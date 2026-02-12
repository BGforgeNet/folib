---
title: Setup
---

## Installation

```bash
pnpm add folib
```

## ESLint config

FOlib ships an ESLint config for TSSL projects that prevents use of unsupported JS syntax, flags shadowing of engine/sfall reserved words, and disallows unavailable JS globals.

Install peer dependencies:

```bash
pnpm add -D eslint typescript-eslint eslint-plugin-unused-imports
```

Then in your `eslint.config.mjs`:

```js
import tsslConfig from 'folib/eslint-config'

export default tsslConfig({ tsconfigRootDir: import.meta.dirname })
```

### Options

- `tsconfigRootDir` (required) -- absolute path to the directory containing `tsconfig.json`
- `extraFileExtensions` (default: `['.tssl']`) -- extra file extensions for the TS parser
- `ignores` -- additional ignore patterns (additive to defaults)
