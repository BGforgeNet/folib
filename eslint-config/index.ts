/**
 * ESLint configuration factory for TSSL (TypeScript-to-SSL) projects.
 *
 * Provides rules that prevent use of JS features unsupported by the SSL transpiler,
 * forbid shadowing of engine/sfall reserved words, and flag unavailable JS globals.
 *
 * Usage:
 *   import tsslConfig from 'folib/eslint-config'
 *   export default tsslConfig({ tsconfigRootDir: import.meta.dirname })
 *
 * Or with overrides:
 *   export default [
 *     ...tsslConfig({ tsconfigRootDir: import.meta.dirname }),
 *     { rules: { ... } },
 *   ]
 */

import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import { SSL_RESERVED_WORDS, SFALL_RESERVED_WORDS } from './reserved-words'

export interface TsslConfigOptions {
  /** Absolute path to the directory containing tsconfig.json (required) */
  readonly tsconfigRootDir: string
  /** Extra file extensions for the TS parser (default: ['.tssl']) */
  readonly extraFileExtensions?: readonly string[]
  /** Additional ignore patterns (additive to defaults) */
  readonly ignores?: readonly string[]
}

/** Engine entry points and special variables -- not directly referenced but called by engine */
const IGNORE_UNUSED = [
  'barter_init_p_proc',
  'barter_p_proc',
  'combat_p_proc',
  'create_p_proc',
  'critter_p_proc',
  'damage_p_proc',
  'description_p_proc',
  'destroy_p_proc',
  'drop_p_proc',
  'look_at_p_proc',
  'map_enter_p_proc',
  'map_exit_p_proc',
  'map_update_p_proc',
  'pickup_p_proc',
  'spatial_p_proc',
  'start',
  'talk_p_proc',
  'timed_event_p_proc',
  'use_ad_on_p_proc',
  'use_disad_on_p_proc',
  'use_obj_on_p_proc',
  'use_p_proc',
  'use_skill_on_p_proc',
  'SCRIPT_NAME',
  'SCRIPT_REALNAME',
] as const

/** TypeScript/JS syntax that breaks transpilation or produces broken SSL */
const TSSL_FORBIDDEN_SYNTAX: readonly (readonly [string, string])[] = [
  ['ArrowFunctionExpression', 'Arrow functions are not supported. Use regular function declarations.'],
  ['TemplateLiteral', 'Template literals are not supported. Use string concatenation with +.'],
  ['ChainExpression', 'Optional chaining (?.) is not supported in SSL.'],
  ["LogicalExpression[operator='??']", 'Nullish coalescing (??) is not supported. Use explicit null/0 checks.'],
  ['SpreadElement', 'Spread operator (...) is not supported in SSL.'],
  ["BinaryExpression[operator='**']", 'Exponentiation (**) is not supported. Use power() or manual multiplication.'],
  ['Property[shorthand=true]', 'Shorthand properties ({x}) are not supported. Use explicit {x: x}.'],
  ['ArrayPattern:not(ForOfStatement ArrayPattern)', 'Array destructuring is not supported. Access elements by index. (for-of [k,v] is OK)'],
  ['ObjectPattern', 'Object destructuring is not supported. Access properties explicitly.'],
  ["UnaryExpression[operator='typeof']", 'typeof is not supported. Use typeof_() sfall function.'],
  ["BinaryExpression[operator='instanceof']", 'instanceof is not supported in SSL.'],
  ['NewExpression', 'new keyword is not supported. SSL has no constructors.'],
  ['AwaitExpression', 'await is not supported. SSL is synchronous.'],
  ['YieldExpression', 'yield is not supported. SSL has no generators.'],
  ["AssignmentExpression[operator='??=']", 'Nullish assignment (??=) is not supported.'],
  ["AssignmentExpression[operator='||=']", 'Logical OR assignment (||=) is not supported.'],
  ["AssignmentExpression[operator='&&=']", 'Logical AND assignment (&&=) is not supported.'],
  ["BinaryExpression[operator='in']", "'in' operator is not supported. Use is_in_array() or scan_array()."],
  ['ClassDeclaration', 'Classes are not supported in SSL.'],
  ['ClassExpression', 'Classes are not supported in SSL.'],
  ['TaggedTemplateExpression', 'Tagged templates are not supported in SSL.'],
] as const

/** JS globals not available in the SSL runtime */
const JS_UNAVAILABLE_GLOBALS: readonly (readonly [string, string])[] = [
  ['Array', 'Array constructor is not available in SSL runtime. Use sfall temp_array or create_array.'],
  ['Date', 'Date is not available in SSL runtime.'],
  ['JSON', 'JSON is not available in SSL runtime.'],
  ['Map', 'Map is not available in SSL runtime. Use sfall temp_array_map.'],
  ['Math', 'Math is not available in SSL runtime. Use sfall functions (floor2, ceil2, abs2, etc).'],
  ['Object', 'Object is not available in SSL runtime. Use sfall arrays and scan_array for iteration.'],
  ['Promise', 'Promise is not available in SSL runtime.'],
  ['Proxy', 'Proxy is not available in SSL runtime.'],
  ['Reflect', 'Reflect is not available in SSL runtime.'],
  ['Set', 'Set is not available in SSL runtime.'],
] as const

function buildReservedWordRules(): readonly object[] {
  const allWords = [...new Set([...SSL_RESERVED_WORDS, ...SFALL_RESERVED_WORDS])]
  return allWords.map(name => ({
    selector: `:matches(VariableDeclarator[id.name='${name}'], FunctionDeclaration[id.name='${name}'], Property[key.name='${name}'])`,
    message: `'${name}' is a reserved word in SSL and cannot be used as a variable/function/parameter name.`,
  }))
}

/**
 * Create an ESLint flat config array for TSSL projects.
 */
export default function tsslConfig(options: TsslConfigOptions) {
  const {
    tsconfigRootDir,
    extraFileExtensions = ['.tssl'],
    ignores = [],
  } = options

  const filePatterns = ['**/*.ts', ...extraFileExtensions.map(ext => `**/*${ext}`)]

  return tseslint.config(
    ...tseslint.configs.recommendedTypeChecked.map(config => ({
      ...config,
      files: filePatterns,
    })),
    {
      files: filePatterns,
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          extraFileExtensions: [...extraFileExtensions],
          tsconfigRootDir,
        },
      },
      plugins: {
        'unused-imports': unusedImports,
      },
      rules: {
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', {
          varsIgnorePattern: `^(${IGNORE_UNUSED.join('|')}|_)`,
          argsIgnorePattern: '^_',
        }],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-restricted-globals': [
          'error',
          ...JS_UNAVAILABLE_GLOBALS.map(([name, message]) => ({ name, message })),
        ],
        'no-restricted-syntax': [
          'error',
          ...buildReservedWordRules(),
          ...TSSL_FORBIDDEN_SYNTAX.map(([selector, message]) => ({ selector, message })),
        ],
      },
    },
    {
      ignores: ['node_modules/**', '**/*.mjs', 'source/*.ts', ...ignores],
    },
  )
}
