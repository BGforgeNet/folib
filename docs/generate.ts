/**
 * Custom API documentation generator for FOlib.
 *
 * Reads TypeScript source files via the compiler API and generates
 * Starlight-compatible markdown. Constants render as compact tables;
 * functions and types get signature blocks with JSDoc descriptions.
 * Type references in function signatures are cross-linked.
 * Syntax highlighting uses Shiki with Starlight's Night Owl themes.
 *
 * Usage: pnpm docs:generate
 */

import ts from 'typescript'
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs'
import { resolve, basename, join, relative, dirname } from 'node:path'
import { createHighlighter, type Highlighter } from 'shiki'
import { escape as escapeHtml } from 'html-escaper'

// ---------------------------------------------------------------------------
// Data structures
// ---------------------------------------------------------------------------

interface Section {
  readonly name: string
  readonly dir: string
  readonly exclude: readonly string[]
}

interface Variable {
  readonly name: string
  readonly value: string
  readonly type: string
  readonly doc: string
}

interface ParamInfo {
  readonly name: string
  readonly type: string
  readonly optional: boolean
}

interface FunctionInfo {
  readonly name: string
  readonly typeParams: string
  readonly params: readonly ParamInfo[]
  readonly returnType: string
  readonly doc: string
}

interface TypeInfo {
  readonly name: string
  readonly typeParams: string
  readonly typeText: string
  readonly doc: string
}

interface EnumMember {
  readonly name: string
  readonly value: string
  readonly doc: string
}

interface EnumInfo {
  readonly name: string
  readonly members: readonly EnumMember[]
  readonly doc: string
}

interface CategorizedExports {
  readonly variables: Variable[]
  readonly functions: FunctionInfo[]
  readonly types: TypeInfo[]
  readonly enums: EnumInfo[]
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ROOT = resolve(dirname(import.meta.filename), '..')
const OUT_DIR = resolve(dirname(import.meta.filename), 'src/content/docs/api')

const SECTIONS: readonly Section[] = [
  { name: 'core', dir: 'src', exclude: ['sfall/', 'rpu/', 'index.ts'] },
  { name: 'sfall', dir: 'src/sfall', exclude: ['index.ts'] },
  { name: 'rpu', dir: 'src/rpu', exclude: [] },
]

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const configPath = resolve(ROOT, 'tsconfig.json')
  const { config } = ts.readConfigFile(configPath, ts.sys.readFile)
  const { options, fileNames } = ts.parseJsonConfigFileContent(config, ts.sys, ROOT)
  const program = ts.createProgram(fileNames, options)
  const checker = program.getTypeChecker()

  if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true })

  // Clear Astro's content cache to avoid stale entries from previous runs
  const astroDir = resolve(dirname(import.meta.filename), '.astro')
  if (existsSync(astroDir)) rmSync(astroDir, { recursive: true })

  const highlighter = await createShikiHighlighter()

  // First pass: collect all pages and their exported types for cross-linking
  const typeRegistry = buildTypeRegistry(program, checker)

  // Second pass: generate markdown pages
  for (const section of SECTIONS) {
    const sectionDir = resolve(ROOT, section.dir)
    const outDir = join(OUT_DIR, section.name)
    mkdirSync(outDir, { recursive: true })

    for (const sf of program.getSourceFiles()) {
      if (!sf.fileName.startsWith(sectionDir + '/')) continue
      const rel = relative(sectionDir, sf.fileName)
      if (rel.includes('/')) continue
      if (section.exclude.some(e => rel.startsWith(e))) continue

      const moduleSymbol = checker.getSymbolAtLocation(sf)
      if (!moduleSymbol) continue

      const allExports = checker.getExportsOfModule(moduleSymbol)
      if (allExports.length === 0) continue

      const categorized = categorize(allExports, sf, checker)
      if (categorized.variables.length === 0 && categorized.functions.length === 0
        && categorized.types.length === 0 && categorized.enums.length === 0) continue

      // Use '-decl' suffix for .d.ts files to avoid slug collisions (types.ts vs types.d.ts).
      // A dot-based suffix like '.d' gets stripped by Starlight's content loader.
      const slug = sf.fileName.endsWith('.d.ts')
        ? basename(sf.fileName, '.d.ts') + '-decl'
        : basename(sf.fileName, '.ts')
      const description = getFileComment(sf)
      const currentPage = `/api/${section.name}/${slug}/`
      const md = renderPage(slug, description, categorized, typeRegistry, currentPage, highlighter)
      writeFileSync(join(outDir, `${slug}.md`), md)
    }

    console.log(`${section.name}: wrote pages to ${relative(ROOT, outDir)}`)
  }
}

// ---------------------------------------------------------------------------
// Shiki highlighter
// ---------------------------------------------------------------------------

/** Load Starlight's bundled Night Owl themes and create a Shiki highlighter. */
async function createShikiHighlighter(): Promise<Highlighter> {
  const themesDir = resolve(
    dirname(import.meta.filename),
    'node_modules/@astrojs/starlight/integrations/expressive-code/themes',
  )
  // Shiki needs a name field to reference themes
  const darkTheme = { ...JSON.parse(stripJsonComments(readFileSync(join(themesDir, 'night-owl-dark.jsonc'), 'utf8'))), name: 'night-owl-dark' }
  const lightTheme = { ...JSON.parse(stripJsonComments(readFileSync(join(themesDir, 'night-owl-light.jsonc'), 'utf8'))), name: 'night-owl-light' }

  return createHighlighter({
    themes: [darkTheme, lightTheme],
    langs: ['typescript'],
  })
}

/** Strip comments and trailing commas from JSONC content to produce valid JSON. */
function stripJsonComments(text: string): string {
  return text
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/,\s*([}\]])/g, '$1')
}

/**
 * Highlight a function signature using Shiki and inject <a> links for type names.
 *
 * Tokenizes with both dark and light themes, then renders each token as a <span>
 * with dual-theme CSS variables so the correct color shows for the active theme.
 * Tokens whose text matches a registered type name are wrapped in <a> links.
 */
function highlightSignature(
  code: string,
  typeRegistry: Map<string, string>,
  currentPage: string,
  highlighter: Highlighter,
): string {
  const darkResult = highlighter.codeToTokens(code, { lang: 'typescript', theme: 'night-owl-dark' })
  const lightResult = highlighter.codeToTokens(code, { lang: 'typescript', theme: 'night-owl-light' })

  // Build a character-level color map from the light theme for lookups,
  // since dark/light themes may produce different token boundaries.
  const lightColors = buildColorMap(lightResult.tokens)

  let html = '<pre class="sig"><code>'
  let charIndex = 0
  for (const line of darkResult.tokens) {
    for (const token of line) {
      const darkColor = token.color ?? ''
      // Look up the light color at this character position
      const lightColor = lightColors.get(charIndex) ?? ''
      const text = token.content

      // Check if the entire token is a known type name
      const url = typeRegistry.get(text)
      if (url) {
        const targetPage = url.split('#')[0]
        const resolvedUrl = targetPage === currentPage
          ? `#${url.split('#')[1]}`
          : url
        html += `<span style="--dark:${escapeHtml(darkColor)};--light:${escapeHtml(lightColor)}"><a href="${escapeHtml(resolvedUrl)}">${escapeHtml(text)}</a></span>`
      } else {
        html += `<span style="--dark:${escapeHtml(darkColor)};--light:${escapeHtml(lightColor)}">${escapeHtml(text)}</span>`
      }
      charIndex += text.length
    }
    charIndex++ // newline
  }
  html += '</code></pre>'
  return html
}

/** Token line type derived from the highlighter's codeToTokens result. */
type TokenLines = ReturnType<Highlighter['codeToTokens']>['tokens']

/** Build a Map from character offset to token color for a set of Shiki token lines. */
function buildColorMap(tokenLines: TokenLines): Map<number, string> {
  const colorMap = new Map<number, string>()
  let pos = 0
  for (const line of tokenLines) {
    for (const token of line) {
      colorMap.set(pos, token.color ?? '')
      pos += token.content.length
    }
    pos++ // newline
  }
  return colorMap
}

// ---------------------------------------------------------------------------
// Type registry for cross-linking
// ---------------------------------------------------------------------------

/** Collect all exported type alias names and map them to page URL + anchor. */
function buildTypeRegistry(program: ts.Program, checker: ts.TypeChecker): Map<string, string> {
  const registry = new Map<string, string>()

  for (const section of SECTIONS) {
    const sectionDir = resolve(ROOT, section.dir)

    for (const sf of program.getSourceFiles()) {
      if (!sf.fileName.startsWith(sectionDir + '/')) continue
      const rel = relative(sectionDir, sf.fileName)
      if (rel.includes('/')) continue
      if (section.exclude.some(e => rel.startsWith(e))) continue

      const moduleSymbol = checker.getSymbolAtLocation(sf)
      if (!moduleSymbol) continue

      const slug = sf.fileName.endsWith('.d.ts')
        ? basename(sf.fileName, '.d.ts') + '-decl'
        : basename(sf.fileName, '.ts')
      const pageUrl = `/api/${section.name}/${slug}/`

      for (const sym of checker.getExportsOfModule(moduleSymbol)) {
        const decls = sym.getDeclarations()
        if (!decls || decls.length === 0) continue
        if (ts.isTypeAliasDeclaration(decls[0]) || ts.isEnumDeclaration(decls[0])) {
          const anchor = sym.name.toLowerCase()
          registry.set(sym.name, `${pageUrl}#${anchor}`)
        }
      }
    }
  }

  return registry
}


// ---------------------------------------------------------------------------
// Extract
// ---------------------------------------------------------------------------

function categorize(exports: ts.Symbol[], sf: ts.SourceFile, checker: ts.TypeChecker): CategorizedExports {
  const variables: Variable[] = []
  const functions: FunctionInfo[] = []
  const types: TypeInfo[] = []
  const enums: EnumInfo[] = []

  for (const sym of exports) {
    const decls = sym.getDeclarations()
    if (!decls || decls.length === 0) continue
    const decl = decls[0]

    // Skip re-exported declarations from other files to avoid duplicates
    // and getText() offset mismatches (node offsets are file-specific).
    const declSf = decl.getSourceFile()
    if (declSf !== sf) continue

    const doc = ts.displayPartsToString(sym.getDocumentationComment(checker)).trim()

    if (ts.isVariableDeclaration(decl)) {
      const init = decl.initializer
      let value = ''
      if (init) {
        value = ts.isAsExpression(init)
          ? init.expression.getText(sf)
          : init.getText(sf)
      }
      const type = decl.type ? decl.type.getText(sf) : ''
      variables.push({ name: sym.name, value, type, doc })
    } else if (ts.isFunctionDeclaration(decl)) {
      const fn = extractFunction(decl, sf)
      functions.push({ ...fn, doc })
    } else if (ts.isEnumDeclaration(decl)) {
      const members = decl.members.map(m => {
        const name = m.name.getText(sf)
        const value = m.initializer ? m.initializer.getText(sf) : ''
        const memberDoc = ts.displayPartsToString(
          checker.getSymbolAtLocation(m.name)?.getDocumentationComment(checker) ?? []
        ).trim()
        return { name, value, doc: memberDoc }
      })
      enums.push({ name: sym.name, members, doc })
    } else if (ts.isTypeAliasDeclaration(decl)) {
      const typeText = decl.type.getText(sf)
      const typeParams = decl.typeParameters
        ? '<' + decl.typeParameters.map(p => p.getText(sf)).join(', ') + '>'
        : ''
      types.push({ name: sym.name, typeParams, typeText, doc })
    }
  }

  return { variables, functions, types, enums }
}

/** Extract structured function info from AST for rendering with inline links. */
function extractFunction(decl: ts.FunctionDeclaration, sf: ts.SourceFile): Omit<FunctionInfo, 'doc'> {
  const name = decl.name?.getText(sf) ?? ''
  const typeParams = decl.typeParameters
    ? '<' + decl.typeParameters.map(p => p.getText(sf)).join(', ') + '>'
    : ''
  const params = decl.parameters.map(p => ({
    name: p.name.getText(sf),
    type: p.type ? p.type.getText(sf) : 'any',
    optional: !!p.questionToken,
  }))
  const returnType = decl.type ? decl.type.getText(sf) : 'void'
  return { name, typeParams, params, returnType }
}

function getFileComment(sf: ts.SourceFile): string {
  const text = sf.getFullText()
  const ranges = ts.getLeadingCommentRanges(text, 0)
  if (!ranges || ranges.length === 0) return ''
  const r = ranges[0]
  const raw = text.slice(r.pos, r.end)
  if (raw.startsWith('//')) return raw.slice(2).trim()
  // Block comment: strip /* */ and leading *
  return raw.slice(2, -2).replace(/^\s*\*\s?/gm, '').trim()
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------

/** Build the plain-text function signature for Shiki tokenization. */
function buildSignatureText(f: FunctionInfo): string {
  const paramStr = f.params
    .map(p => {
      const opt = p.optional ? '?' : ''
      return `${p.name}${opt}: ${p.type}`
    })
    .join(', ')
  return `function ${f.name}${f.typeParams}(${paramStr}): ${f.returnType}`
}

function renderPage(
  title: string,
  description: string,
  { variables, functions, types, enums }: CategorizedExports,
  typeRegistry: Map<string, string>,
  currentPage: string,
  highlighter: Highlighter,
): string {
  const lines: string[] = [
    '---',
    `title: ${quote(title)}`,
    '---',
    '',
  ]

  if (description) {
    lines.push(description, '')
  }

  if (types.length > 0) {
    lines.push('## Types', '')
    for (const t of types) {
      lines.push(
        `### ${t.name}`,
        '',
        '```ts',
        `type ${t.name}${t.typeParams} = ${t.typeText}`,
        '```',
        '',
      )
      if (t.doc) lines.push(t.doc, '')
    }
  }

  if (enums.length > 0) {
    lines.push('## Enums', '')
    for (const e of enums) {
      lines.push(`### ${e.name}`, '')
      if (e.doc) lines.push(e.doc, '')
      const hasDoc = e.members.some(m => m.doc)
      if (hasDoc) {
        lines.push('| Member | Value | Description |')
        lines.push('|--------|-------|-------------|')
        for (const m of e.members) {
          lines.push(`| \`${e.name}.${m.name}\` | \`${m.value}\` | ${m.doc} |`)
        }
      } else {
        lines.push('| Member | Value |')
        lines.push('|--------|-------|')
        for (const m of e.members) {
          lines.push(`| \`${e.name}.${m.name}\` | \`${m.value}\` |`)
        }
      }
      lines.push('')
    }
  }

  if (functions.length > 0) {
    lines.push('## Functions', '')
    for (const f of functions) {
      const sigText = buildSignatureText(f)
      const sigHtml = highlightSignature(sigText, typeRegistry, currentPage, highlighter)
      lines.push(
        `### ${f.name}`,
        '',
        sigHtml,
        '',
      )
      if (f.doc) lines.push(f.doc, '')
    }
  }

  if (variables.length > 0) {
    renderVariables(lines, variables)
  }

  return lines.join('\n')
}

function renderVariables(lines: string[], variables: readonly Variable[]): void {
  // Ambient declarations (no value, has type) go in a globals table
  const globals = variables.filter(v => !v.value && v.type)
  const constants = variables.filter(v => v.value)

  if (globals.length > 0) {
    lines.push('## Globals', '')
    lines.push('| Name | Type | Description |')
    lines.push('|------|------|-------------|')
    for (const v of globals) {
      lines.push(`| \`${v.name}\` | \`${v.type}\` | ${v.doc} |`)
    }
    lines.push('')
  }

  if (constants.length === 0) return

  // Multi-line docs (containing newlines or code fences) break table formatting,
  // so split constants into table-safe and standalone groups
  const isMultiline = (v: Variable): boolean => v.doc.includes('\n') || v.doc.includes('```')
  const tableConstants = constants.filter(v => !isMultiline(v))
  const standaloneConstants = constants.filter(v => isMultiline(v))

  if (tableConstants.length > 0) {
    lines.push('## Constants', '')
    const hasDoc = tableConstants.some(v => v.doc)
    if (hasDoc) {
      lines.push('| Name | Value | Description |')
      lines.push('|------|-------|-------------|')
      for (const v of tableConstants) {
        lines.push(`| \`${v.name}\` | \`${v.value}\` | ${v.doc} |`)
      }
    } else {
      lines.push('| Name | Value |')
      lines.push('|------|-------|')
      for (const v of tableConstants) {
        lines.push(`| \`${v.name}\` | \`${v.value}\` |`)
      }
    }
    lines.push('')
  }

  if (standaloneConstants.length > 0) {
    // Use a separate heading only if table constants already used "Constants"
    if (tableConstants.length === 0) {
      lines.push('## Constants', '')
    }
    for (const v of standaloneConstants) {
      lines.push(
        `### ${v.name}`,
        '',
        `Value: \`${v.value}\``,
        '',
      )
      if (v.doc) lines.push(v.doc, '')
    }
  }
}

function quote(s: string): string {
  return `"${s.replace(/"/g, '\\"')}"`
}

main().catch((err: unknown) => {
  console.error('docs:generate failed:', err)
  process.exit(1)
})
