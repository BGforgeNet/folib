/**
 * Compiles a generated .tssl fixture that calls every exported folib function through the real
 * @bgforge/tssl compiler (both its .int and --ssl routes), to catch declarations tsc/eslint accept
 * but tssl cannot compile - the class of bug that shipped in folib 0.5.0 (optional parameters and
 * branching in sfall wrapper bodies, which tssl's @inline extraction and lowering can't handle).
 *
 * Run with: pnpm test
 */

import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import ts from "typescript";

const ROOT = join(import.meta.dirname, "..");

// Pinned so a drift in tssl's own recognized-procedure table doesn't register as a folib regression (or mask
// one); bump deliberately when adopting a new tssl release.
const TSSL_VERSION = "0.5.0";

// Correct folib declarations tssl@0.5.0 still can't compile, for reasons outside folib:
// - town_map is Fallout 1 only; tssl has no way to target Fallout 1 (always compiles for Fallout 2).
// - string_format_array is sfall.h's `sprintf_array(fmt, arr)`, which is not an opcode or a #define but a
//   ~50-line hand-written SSL procedure (lib.strings.h) folib has never ported to TypeScript.
// - floor, set_perk_skill1_mag, get_stat_max and get_stat_min were all reported to and FIXED on bgforge-mls
//   master (92f17a32, 39b79228, 2026-11-02; confirmed by rebuilding compilers/tssl and compilers/ssl from
//   that commit and re-running this fixture's exact shape against it - clean). Not yet in a published
//   @bgforge/tssl release, so they stay listed here until TSSL_VERSION is bumped to one that includes them,
//   at which point remove these four names.
const KNOWN_UNCOMPILABLE = new Set([
    "town_map",
    "string_format_array",
    "floor",
    "set_perk_skill1_mag",
    "get_stat_max",
    "get_stat_min",
]);

function classifyType(checker: ts.TypeChecker, type: ts.Type): string {
    const text = checker.typeToString(type);
    if (text === "string") return '"x"';
    if (text === "number") return "0";
    if (text === "boolean") return "true";
    if (text === "Function") return "dummy_proc";
    // Branded pointer types, numeric enums, SfallArray/SfallList/SfallMap, unions, etc: the fixture only
    // needs something tssl can lower, not something semantically valid, so bypass the type check.
    return "(0 as any)";
}

interface FunctionPlan {
    readonly name: string;
    readonly args: readonly string[];
}

interface ModulePlan {
    readonly functions: readonly FunctionPlan[];
    readonly constants: readonly string[];
    readonly skippedGeneric: readonly string[];
}

function planModule(checker: ts.TypeChecker, sourceFile: ts.SourceFile): ModulePlan {
    const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
    if (!moduleSymbol) throw new Error(`no module symbol for ${sourceFile.fileName}`);
    const exports = checker.getExportsOfModule(moduleSymbol);

    const functions: FunctionPlan[] = [];
    const constants: string[] = [];
    const skippedGeneric: string[] = [];

    for (const exported of exports) {
        if (KNOWN_UNCOMPILABLE.has(exported.name)) continue;
        // A re-export (`export { x } from './base.d'`) is an Alias symbol; resolve it to the real one.
        const symbol = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
        if ((symbol.flags & ts.SymbolFlags.Value) === 0) continue; // type-only export, nothing to compile
        if (symbol.flags & ts.SymbolFlags.Enum) continue; // the enum object itself isn't a lowerable value

        const decl = symbol.valueDeclaration ?? symbol.declarations?.[0];
        if (!decl) continue;
        const type = checker.getTypeOfSymbolAtLocation(symbol, decl);
        const signatures = type.getCallSignatures();

        if (signatures.length === 0) {
            constants.push(exported.name);
            continue;
        }

        const signature = signatures[0];
        if (signature.typeParameters && signature.typeParameters.length > 0) {
            skippedGeneric.push(exported.name);
            continue;
        }

        const args: string[] = [];
        for (const param of signature.parameters) {
            const paramDecl = param.valueDeclaration as ts.ParameterDeclaration | undefined;
            const isRest = paramDecl?.dotDotDotToken !== undefined;
            const paramType = checker.getTypeOfSymbolAtLocation(param, paramDecl ?? decl);
            if (isRest) {
                const elementType = paramType.getNumberIndexType() ?? paramType;
                const text = classifyType(checker, elementType);
                args.push(text, text);
            } else {
                args.push(classifyType(checker, paramType));
            }
        }
        functions.push({ name: exported.name, args });
    }

    return { functions, constants, skippedGeneric };
}

interface CallPlan {
    readonly name: string;
    readonly importFrom: string;
    readonly call: string;
}

function flattenCalls(plans: readonly ModulePlan[], importSpecifiers: readonly string[]): readonly CallPlan[] {
    // "folib" and "folib/sfall" both re-export some names (SKILL, BODY, metarule3, ...); call each name
    // once, from whichever module plan lists it first.
    const seen = new Set<string>();
    const calls: CallPlan[] = [];
    for (let i = 0; i < plans.length; i++) {
        const plan = plans[i];
        for (const fn of plan.functions) {
            if (seen.has(fn.name)) continue;
            seen.add(fn.name);
            calls.push({ name: fn.name, importFrom: importSpecifiers[i], call: `${fn.name}(${fn.args.join(", ")})` });
        }
        for (const name of plan.constants) {
            if (seen.has(name)) continue;
            seen.add(name);
            calls.push({ name, importFrom: importSpecifiers[i], call: name });
        }
    }
    return calls;
}

// A single file calling everything hit what looks like a tssl scale artifact unrelated to any one
// declaration (a correct, independently-verified function started failing only inside the big file).
// No real mod calls every sfall/base function from one script either, so chunking is both a workaround
// and a more realistic shape.
const CHUNK_SIZE = 40;

function renderChunk(calls: readonly CallPlan[]): string {
    const byModule = new Map<string, string[]>();
    for (const c of calls) {
        (byModule.get(c.importFrom) ?? byModule.set(c.importFrom, []).get(c.importFrom)!).push(c.name);
    }
    const lines: string[] = [];
    for (const [specifier, names] of byModule) {
        lines.push(`import { ${names.join(", ")} } from "${specifier}";`);
    }
    lines.push("");
    lines.push("function dummy_proc(): void {}");
    // ndebug() (src/define.ts) requires the importing script to provide this itself.
    lines.push('const SCRIPT_REALNAME = "check";');
    lines.push("");
    lines.push("export function start(): void {");
    let n = 0;
    for (const c of calls) {
        lines.push(`    let v${n++} = ${c.call};`);
    }
    lines.push("}");
    return lines.join("\n") + "\n";
}

function main(): void {
    const program = ts.createProgram([join(ROOT, "src/index.ts"), join(ROOT, "src/sfall/index.ts")], {
        target: ts.ScriptTarget.ESNext,
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        strict: true,
        skipLibCheck: true,
    });
    const checker = program.getTypeChecker();

    const rootFile = program.getSourceFile(join(ROOT, "src/index.ts"));
    const sfallFile = program.getSourceFile(join(ROOT, "src/sfall/index.ts"));
    if (!rootFile || !sfallFile) throw new Error("could not load folib's entry points");

    const rootPlan = planModule(checker, rootFile);
    const sfallPlan = planModule(checker, sfallFile);

    const totalFns = rootPlan.functions.length + sfallPlan.functions.length;
    const totalConsts = rootPlan.constants.length + sfallPlan.constants.length;
    const skipped = [...rootPlan.skippedGeneric, ...sfallPlan.skippedGeneric];
    console.log(`Covering ${totalFns} functions and ${totalConsts} constants.`);
    if (skipped.length > 0) {
        console.log(`Skipped ${skipped.length} generic export(s) (no safe default instantiation): ${skipped.join(", ")}`);
    }

    const calls = flattenCalls([rootPlan, sfallPlan], ["folib", "folib/sfall"]);

    const workDir = mkdtempSync(join(tmpdir(), "folib-tssl-check-"));
    try {
        mkdirSync(join(workDir, "node_modules"));
        symlinkSync(ROOT, join(workDir, "node_modules/folib"));
        writeFileSync(
            join(workDir, "tsconfig.json"),
            JSON.stringify(
                {
                    compilerOptions: {
                        target: "ESNext",
                        module: "ESNext",
                        moduleResolution: "bundler",
                        strict: true,
                        noEmit: true,
                        skipLibCheck: true,
                    },
                    include: ["*.tssl"],
                },
                null,
                4,
            ),
        );

        let chunkCount = 0;
        for (let i = 0; i < calls.length; i += CHUNK_SIZE) {
            const chunk = calls.slice(i, i + CHUNK_SIZE);
            writeFileSync(join(workDir, `check-${chunkCount}.tssl`), renderChunk(chunk));
            chunkCount++;
        }
        console.log(`Compiling ${chunkCount} fixture file(s) with @bgforge/tssl@${TSSL_VERSION} (pnpm dlx, not a project dependency)...`);
        execFileSync("pnpm", ["dlx", `@bgforge/tssl@${TSSL_VERSION}`, ".", "-r", "--ssl"], {
            cwd: workDir,
            stdio: "inherit",
        });
        console.log("tssl compiled the whole exported surface cleanly.");
    } finally {
        rmSync(workDir, { recursive: true, force: true });
    }
}

main();
