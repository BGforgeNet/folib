// Branded types for type safety
/** Object pointer - an integer handle to a game object */
export type ObjectPtr = number & { __brand: 'ObjectPtr' };

/** Array ID - an integer handle to a sfall array */
export type ArrayID = number & { __brand: 'ArrayID' };

/** Float constant 1.0 - use to force float division: FLOAT1 * a / b */
export const FLOAT1 = 1.0;

// No barrel exports - import directly from subpaths:
// - "folib/sfall/sfall.d" - sfall function declarations
// - "folib/sfall/sfall" - sfall constants and wrappers
// - "folib/sfall/define_extra" - extra constants
// - "folib/sfall/lib.arrays" - array utilities
// - "folib/sfall/lib.strings" - string utilities
// - "folib/base.d" - engine builtins
// - "folib/define" - script helpers (ndebug)
// - "folib/rp/scenepid" - RP scenepid helpers
// - "folib/rp/command" - RP command helpers
