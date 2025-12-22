// Re-export types
export type {
    ObjectPtr, CritterPtr, ItemPtr, ContainerPtr, DoorPtr, SceneryPtr,
    ArrayID, SkillID, HookID, IfaceTag, GameMode,
    ObjType, BodyPart, WeaponType, InvenSlot, DamageType, FloatMsgColor,
    StatID, PerkID, TraitID, TraitType,
    PcStatID, RollResult, AttackType, AttackMode, Gender, Difficulty, CritterState
} from './types';

/** Float constant 1.0 - use to force float division: FLOAT1 * a / b */
export const FLOAT1 = 1.0;

// No barrel exports - import directly from subpaths:
// - "folib/types" - ObjectPtr, CritterPtr, ItemPtr, etc.
// - "folib/sfall/sfall.d" - sfall function declarations
// - "folib/sfall/sfall" - sfall constants and wrappers
// - "folib/sfall/define_extra" - extra constants
// - "folib/sfall/lib.arrays" - array utilities
// - "folib/sfall/lib.strings" - string utilities
// - "folib/base.d" - engine builtins
// - "folib/define" - script helpers (ndebug)
// - "folib/rp/scenepid" - RP scenepid helpers
// - "folib/rp/command" - RP command helpers
