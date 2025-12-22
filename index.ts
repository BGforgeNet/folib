// Re-export types from declaration file
export type {
    ObjectPtr, CritterPtr, ItemPtr, ContainerPtr, DoorPtr, SceneryPtr,
    ArrayID, SkillID, HookID, IfaceTag, GameMode,
    ObjType, BodyPart, WeaponType, InvenSlot, DamageType, FloatMsgColor,
    StatID, PerkID, TraitID, TraitType,
    PcStatID, RollResult, AttackType, AttackMode, Gender, CritterState,
    Hand, Difficulty, Elevation, Direction
} from './types.d';

// Re-export constants from runtime file
export {
    LEFT_HAND, RIGHT_HAND,
    DIFFICULTY_EASY, DIFFICULTY_NORMAL, DIFFICULTY_HARD,
    ELEVATION_0, ELEVATION_1, ELEVATION_2, ELEVATION_ALL,
    DIRECTION_NE, DIRECTION_E, DIRECTION_SE, DIRECTION_SW, DIRECTION_W, DIRECTION_NW
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
