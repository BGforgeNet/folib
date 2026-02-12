/**
 * Generates eslint-config/reserved-words.ts from the .d.ts source files.
 *
 * Reads exported function and const names from base.d.ts, sfall.d.ts, and types.d.ts,
 * then writes them as sorted arrays for use in the ESLint config.
 *
 * Run with: pnpm exec tsx scripts/generate-eslint-config.ts
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = join(import.meta.dirname, '..')

function extractNames(filePath: string): readonly string[] {
  const content = readFileSync(filePath, 'utf-8')
  const names: string[] = []
  const re = /export declare (?:function|const) (\w+)/g
  let match: RegExpExecArray | null
  while ((match = re.exec(content)) !== null) {
    names.push(match[1])
  }
  return names
}

function dedup(names: readonly string[]): readonly string[] {
  return [...new Set(names)].sort((a, b) => a.localeCompare(b))
}

const basePath = join(ROOT, 'src/base.d.ts')
const sfallPath = join(ROOT, 'src/sfall/sfall.d.ts')
const typesPath = join(ROOT, 'src/types.d.ts')

const sslNames = dedup(extractNames(basePath))
const sfallNames = dedup([
  ...extractNames(sfallPath),
  ...extractNames(typesPath),
])

if (sslNames.length === 0) {
  throw new Error('No SSL reserved words extracted from base.d.ts -- something is wrong')
}
if (sfallNames.length === 0) {
  throw new Error('No sfall reserved words extracted -- something is wrong')
}

const formatArray = (items: readonly string[]): string =>
  items.map(name => `    '${name}',`).join('\n')

const output = `/**
 * GENERATED FILE -- DO NOT EDIT
 *
 * Reserved words extracted from folib .d.ts source files.
 * Regenerate with: pnpm run generate:eslint
 */

/** SSL engine builtins from base.d.ts */
export const SSL_RESERVED_WORDS = [
${formatArray(sslNames)}
] as const

/** Sfall extensions from sfall.d.ts + types.d.ts */
export const SFALL_RESERVED_WORDS = [
${formatArray(sfallNames)}
] as const
`

const outPath = join(ROOT, 'eslint-config/reserved-words.ts')
writeFileSync(outPath, output, 'utf-8')

console.log(`Generated ${outPath}`)
console.log(`  SSL reserved words: ${sslNames.length}`)
console.log(`  Sfall reserved words: ${sfallNames.length}`)
