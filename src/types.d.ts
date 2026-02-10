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

/** Weapon type classification */
export type WeaponType = 0 | 1 | 2 | 3 | 4;

/** Inventory slot for critter_inven_obj */
export type InvenSlot = -2 | 0 | 1 | 2;

/** Damage type (0-6), can be combined with DMG_BYPASS_ARMOR/DMG_NOANIMATE flags */
export type DamageType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/** Float message color for float_msg */
export type FloatMsgColor = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

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

/** Active hand (0=left, 1=right) */
export type Hand = 0 | 1;

/** Difficulty level (0=easy, 1=normal, 2=hard) */
export type Difficulty = 0 | 1 | 2;

/** Elevation level (0-2) */
export type Elevation = 0 | 1 | 2;

/** Direction on hex grid (0-5, clockwise from NE) */
export type Direction = 0 | 1 | 2 | 3 | 4 | 5;

/** Critter state bitmask from critter_state() */
export type CritterState = number & { __brand: 'CritterState' };

/** Hit result from HOOK_AFTERHITROLL (0=critical miss, 1=miss, 2=hit, 3=critical hit) */
export type HitResult = 0 | 1 | 2 | 3;

/** Sfall list array - numeric index, iterable over values */
export type SfallList<T> = {
    [index: number]: T;
    readonly __brand: 'SfallList';
} & Iterable<T>;

/** Sfall map array - key/value pairs, iterable as [key, value] tuples */
export type SfallMap<K, V> = {
    [key: string]: V;
    [key: number]: V;
    readonly __brand: 'SfallMap';
} & Iterable<[K, V]>;

/**
 * Create a typed list from items. Transpiles to array literal [a, b, c].
 */
export declare function list<T>(...items: T[]): SfallList<T>;

/**
 * Create a typed map from object literal. Transpiles to map literal {a: 1}.
 */
export declare function map<K extends string | number, V>(obj: Record<K, V>): SfallMap<K, V>;
