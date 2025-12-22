// Branded types for type safety

/** Object pointer - an integer handle to a game object */
export type ObjectPtr<T extends string = string> = number & { __type: T };

/** Critter object (NPCs, player, creatures) */
export type CritterPtr = ObjectPtr<'critter'>;

/** Item object (weapons, armor, ammo, misc items, containers) */
export type ItemPtr = ObjectPtr<'item' | 'container'>;

/** Container object (lockers, chests, bags) - subtype of Item */
export type ContainerPtr = ObjectPtr<'container'>;

/** Scenery object (includes doors) */
export type SceneryPtr = ObjectPtr<'scenery' | 'door'>;

/** Door object - subtype of Scenery */
export type DoorPtr = ObjectPtr<'door'>;

/** Array ID - an integer handle to a sfall array */
export type ArrayID = number & { __brand: 'ArrayID' };

/** Skill ID - valid skill identifiers (0-17) */
export type SkillID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

/** Hook ID - valid sfall hook identifiers (0-48, 61) */
export type HookID =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
  | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29
  | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39
  | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48
  | 61;

/** Interface tag ID for show_iface_tag, hide_iface_tag, is_iface_tag_active */
export type IfaceTag = number & { __brand: 'IfaceTag' };

/** Game mode bitmask returned by get_game_mode() */
export type GameMode = number & { __brand: 'GameMode' };

/** Object type returned by obj_type() */
export type ObjType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** Body part / hit location for targeted attacks */
export type BodyPart = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/** Weapon type classification */
export type WeaponType = 0 | 1 | 2 | 3 | 4;

/** Inventory slot for critter_inven_obj */
export type InvenSlot = -2 | 0 | 1 | 2;

/** Damage type (0-6), can be combined with DMG_BYPASS_ARMOR/DMG_NOANIMATE flags */
export type DamageType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** Float message color for float_msg */
export type FloatMsgColor = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/** Stat ID for get_critter_stat, set_critter_stat, etc. (0-37) */
export type StatID =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
  | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29
  | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37;

/** Perk ID for has_perk, set_perk, etc. */
export type PerkID = number & { __brand: 'PerkID' };

/** Character trait ID (0-15) */
export type TraitID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

/** Trait type for has_trait function (TRAIT_PERK=0, TRAIT_OBJECT=1, TRAIT_TRAIT=2) */
export type TraitType = 0 | 1 | 2;

/** PC-only stat ID for get_pc_stat (0-5) */
export type PcStatID = 0 | 1 | 2 | 3 | 4 | 5;

/** Roll/skill check result */
export type RollResult = 0 | 1 | 2 | 3;

/** Attack type for combat hooks (0-19) */
export type AttackType =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;

/** Attack mode for weapons (0-8) */
export type AttackMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/** Gender (0=male, 1=female) */
export type Gender = 0 | 1;

/** Active hand */
export const LEFT_HAND = 0;
export const RIGHT_HAND = 1;
export type Hand = typeof LEFT_HAND | typeof RIGHT_HAND;

/** Difficulty level */
export const DIFFICULTY_EASY = 0;
export const DIFFICULTY_NORMAL = 1;
export const DIFFICULTY_HARD = 2;
export type Difficulty = typeof DIFFICULTY_EASY | typeof DIFFICULTY_NORMAL | typeof DIFFICULTY_HARD;

/** Elevation level (0-2) */
export const ELEVATION_0 = 0;
export const ELEVATION_1 = 1;
export const ELEVATION_2 = 2;
export type Elevation = typeof ELEVATION_0 | typeof ELEVATION_1 | typeof ELEVATION_2;
/** Special value for set_can_rest_on_map to apply to all elevations */
export const ELEVATION_ALL = -1;

/** Direction on hex grid (0-5, clockwise from NE) */
export const DIRECTION_NE = 0;
export const DIRECTION_E = 1;
export const DIRECTION_SE = 2;
export const DIRECTION_SW = 3;
export const DIRECTION_W = 4;
export const DIRECTION_NW = 5;
export type Direction = typeof DIRECTION_NE | typeof DIRECTION_E | typeof DIRECTION_SE | typeof DIRECTION_SW | typeof DIRECTION_W | typeof DIRECTION_NW;

/** Critter state bitmask from critter_state() */
export type CritterState = number & { __brand: 'CritterState' };
