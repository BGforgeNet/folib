// Converted from headers/sfall/define_extra.h

import type { ObjType, BodyPart, WeaponType, PerkID, AttackType, AttackMode, Difficulty } from "../index";

export const PID_PLAYER = 16777216;

// Combat Flags
export const DAM_PRESERVE_FLAGS = 0x80000000;

// Body hit locations
export const BODY_HIT_HEAD = 0 as BodyPart;
export const BODY_HIT_LEFT_ARM = 1 as BodyPart;
export const BODY_HIT_RIGHT_ARM = 2 as BodyPart;
export const BODY_HIT_TORSO = 3 as BodyPart;
export const BODY_HIT_RIGHT_LEG = 4 as BodyPart;
export const BODY_HIT_LEFT_LEG = 5 as BodyPart;
export const BODY_HIT_EYES = 6 as BodyPart;
export const BODY_HIT_GROIN = 7 as BodyPart;
export const BODY_UNCALLED = 8 as BodyPart;

// Object types
export const OBJ_TYPE_ITEM = 0 as ObjType;
export const OBJ_TYPE_CRITTER = 1 as ObjType;
export const OBJ_TYPE_SCENERY = 2 as ObjType;
export const OBJ_TYPE_WALL = 3 as ObjType;
export const OBJ_TYPE_TILE = 4 as ObjType;
export const OBJ_TYPE_MISC = 5 as ObjType;
export const OBJ_TYPE_SPATIAL = 6 as ObjType;

// Art types
export const ART_TYPE_INTERFACE = 6;
export const ART_TYPE_INVENT = 7;
export const ART_TYPE_HEADS = 8;
export const ART_TYPE_BACKGRND = 9;
export const ART_TYPE_SKILLDEX = 10;

// Weapon types
export const WEAPON_TYPE_NONE = 0 as WeaponType;
export const WEAPON_TYPE_UNARMED = 1 as WeaponType;
export const WEAPON_TYPE_MELEE = 2 as WeaponType;
export const WEAPON_TYPE_THROWN = 3 as WeaponType;
export const WEAPON_TYPE_RANGED = 4 as WeaponType;

// Item flags (FlagsExt in proto)
export const HEALING_ITEM = 0x04000000;
export const HIDDEN_ITEM = 0x08000000;
export const ITEM_ACTION_USE = 0x00000800;
export const ITEM_ACTION_USEON = 0x00001000;
export const ITEM_ACTION_PICKUP = 0x00008000;
export const WEAPON_BIGGUN = 0x00000100;
export const WEAPON_2HAND = 0x00000200;
export const WEAPON_ENERGY = 0x00000400;

// Attack types
export const ATKTYPE_LWEP1 = 0 as AttackType;
export const ATKTYPE_LWEP2 = 1 as AttackType;
export const ATKTYPE_RWEP1 = 2 as AttackType;
export const ATKTYPE_RWEP2 = 3 as AttackType;
export const ATKTYPE_PUNCH = 4 as AttackType;
export const ATKTYPE_KICK = 5 as AttackType;
export const ATKTYPE_LWEP_RELOAD = 6 as AttackType;
export const ATKTYPE_RWEP_RELOAD = 7 as AttackType;
export const ATKTYPE_STRONGPUNCH = 8 as AttackType;
export const ATKTYPE_HAMMERPUNCH = 9 as AttackType;
export const ATKTYPE_HAYMAKER = 10 as AttackType;
export const ATKTYPE_JAB = 11 as AttackType;
export const ATKTYPE_PALMSTRIKE = 12 as AttackType;
export const ATKTYPE_PIERCINGSTRIKE = 13 as AttackType;
export const ATKTYPE_STRONGKICK = 14 as AttackType;
export const ATKTYPE_SNAPKICK = 15 as AttackType;
export const ATKTYPE_POWERKICK = 16 as AttackType;
export const ATKTYPE_HIPKICK = 17 as AttackType;
export const ATKTYPE_HOOKKICK = 18 as AttackType;
export const ATKTYPE_PIERCINGKICK = 19 as AttackType;

// Attack modes
export const ATTACK_MODE_NONE = 0 as AttackMode;
export const ATTACK_MODE_PUNCH = 1 as AttackMode;
export const ATTACK_MODE_KICK = 2 as AttackMode;
export const ATTACK_MODE_SWING = 3 as AttackMode;
export const ATTACK_MODE_THRUST = 4 as AttackMode;
export const ATTACK_MODE_THROW = 5 as AttackMode;
export const ATTACK_MODE_SINGLE = 6 as AttackMode;
export const ATTACK_MODE_BURST = 7 as AttackMode;
export const ATTACK_MODE_FLAME = 8 as AttackMode;

// Object flags for get/set_flags
export const FLAG_HIDDEN = 0x1;
export const FLAG_NOSAVE = 0x4;
export const FLAG_FLAT = 0x8;
export const FLAG_NOBLOCK = 0x10;
export const FLAG_LIGHTING = 0x20;
export const FLAG_NOREMOVE = 0x400;
export const FLAG_MULTIHEX = 0x800;
export const FLAG_NOHIGHLIGHT = 0x1000;
export const FLAG_USED = 0x2000;
export const FLAG_TRANSRED = 0x4000;
export const FLAG_TRANSNONE = 0x8000;
export const FLAG_TRANSWALL = 0x10000;
export const FLAG_TRANSGLASS = 0x20000;
export const FLAG_TRANSSTEAM = 0x40000;
export const FLAG_TRANSENERGY = 0x80000;
export const FLAG_LEFT_HAND = 0x1000000;
export const FLAG_RIGHT_HAND = 0x2000000;
export const FLAG_WORN = 0x4000000;
export const FLAG_RESERVED = 0x8000000;
export const FLAG_WALLTRANSEND = 0x10000000;
export const FLAG_LIGHTTHRU = 0x20000000;
export const FLAG_SEEN = 0x40000000;
export const FLAG_SHOOTTHRU = 0x80000000;

// Critter flags
export const CFLG_BARTER = 2;
export const CFLG_NOSTEAL = 32;
export const CFLG_NODROP = 64;
export const CFLG_NOLIMBS = 128;
export const CFLG_NOAGES = 256;
export const CFLG_NOHEAL = 512;
export const CFLG_INVULN = 1024;
export const CFLG_FLATTN = 2048;
export const CFLG_SPECIAL = 4096;
export const CFLG_RANGED = 8192;
export const CFLG_NOKNOCKBACK = 16384;
export const CFLG_NOKNOCKDOWN = CFLG_NOKNOCKBACK;

// Door flags
export const FLAG_WALKTHRU = 0x4;

// Window flags
export const WIN_FLAG_DONTMOVE = 0x2;
export const WIN_FLAG_MOVEONTOP = 0x4;
export const WIN_FLAG_HIDDEN = 0x8;
export const WIN_FLAG_EXCLUSIVE = 0x10;
export const WIN_FLAG_TRANSPARENT = 0x20;

// Message window flags
export const MSGBOX_AUTOSIZE = 0x0;
export const MSGBOX_NORMAL = 0x1;
export const MSGBOX_SMALL = 0x2;
export const MSGBOX_ALIGN_LEFT = 0x4;
export const MSGBOX_ALIGN_TOP = 0x8;
export const MSGBOX_YESNO = 0x10;
export const MSGBOX_CLEAN = 0x20;

// HOOK_REMOVEINVENOBJ argument defines
export const RMOBJ_ITEM_REMOVED_INVEN = 4831349;
export const RMOBJ_ITEM_REMOVED = 4548572;
export const RMOBJ_ITEM_REMOVED_MULTI = 4563866;
export const RMOBJ_ITEM_DESTROYED = 4543215;
export const RMOBJ_ITEM_DESTROY_MULTI = 4571599;
export const RMOBJ_ITEM_MOVE = 4683293;
export const RMOBJ_ITEM_REPLACE = 4686256;
export const RMOBJ_CONSUME_DRUG = 4666772;
export const RMOBJ_USE_OBJ = 4666865;
export const RMOBJ_EQUIP_ARMOR = 4658121;
export const RMOBJ_EQUIP_WEAPON = 4658675;
export const RMOBJ_UNLOAD_WEAPON = 4667030;
export const RMOBJ_USE_DRUG_ON = 4834866;
export const RMOBJ_STEAL_VIEW = 4668206;
export const RMOBJ_ARMOR_EQUIPED = 4651961;
export const RMOBJ_LEFT_HAND_EQUIPED = 4651899;
export const RMOBJ_RIGHT_HAND_EQUIPED = 4651934;
export const RMOBJ_REPLACE_WEAPON = 4658526;
export const RMOBJ_THROW = 4266040;
export const RMOBJ_SUB_CONTAINER = 4683191;
export const RMOBJ_AI_USE_DRUG_ON = 4359920;
export const RMOBJ_BARTER_ARMOR = 4675656;
export const RMOBJ_BARTER_WEAPON = 4675722;
export const RMOBJ_INVEN_DROP_CAPS = 4667295;
export const RMOBJ_DROP_INTO_CONTAINER = 4678833;
// Aliases
export const RMOBJ_RM_MULT_OBJS = RMOBJ_ITEM_REMOVED_MULTI;
export const RMOBJ_TRADE = RMOBJ_ITEM_MOVE;
export const RMOBJ_DROP = RMOBJ_ITEM_REMOVED_INVEN;
export const RMOBJ_DROPMULTI = RMOBJ_ITEM_DESTROY_MULTI;

// Common prototype offsets
export const PROTO_PID = 0;
export const PROTO_TEXTID = 4;
export const PROTO_FID = 8;
export const PROTO_LDIST = 12;
export const PROTO_LINT = 16;
export const PROTO_FLAG = 20;
export const PROTO_FLAG_EXT = 24;
export const PROTO_SCRIPTID = 28;

// Item prototype offsets
export const PROTO_IT_LDIST = PROTO_LDIST;
export const PROTO_IT_LINT = PROTO_LINT;
export const PROTO_IT_FLAG = PROTO_FLAG;
export const PROTO_IT_FLAGS = PROTO_FLAG_EXT;
export const PROTO_IT_SCRIPTID = PROTO_SCRIPTID;
export const PROTO_IT_TYPE = 32;
export const PROTO_IT_MATERIAL = 108;
export const PROTO_IT_SIZE = 112;
export const PROTO_IT_WEIGHT = 116;
export const PROTO_IT_COST = 120;
export const PROTO_IT_INV_FID = 124;
export const PROTO_IT_SOUND = 128;

// Weapon prototype offsets
export const PROTO_WP_ANIM = 36;
export const PROTO_WP_DMG_MIN = 40;
export const PROTO_WP_DMG_MAX = 44;
export const PROTO_WP_DMG_TYPE = 48;
export const PROTO_WP_RANGE_1 = 52;
export const PROTO_WP_RANGE_2 = 56;
export const PROTO_WP_PROJ_PID = 60;
export const PROTO_WP_MIN_ST = 64;
export const PROTO_WP_APCOST_1 = 68;
export const PROTO_WP_APCOST_2 = 72;
export const PROTO_WP_CRIT_FAIL = 76;
export const PROTO_WP_PERK = 80;
export const PROTO_WP_BURST = 84;
export const PROTO_WP_CALIBER = 88;
export const PROTO_WP_AMMO_PID = 92;
export const PROTO_WP_MAG_SIZE = 96;
export const PROTO_WP_SOUND = 100;

// Armor prototype offsets
export const PROTO_AR_AC = 36;
export const PROTO_AR_DR_NORMAL = 40;
export const PROTO_AR_DR_LASER = 44;
export const PROTO_AR_DR_FIRE = 48;
export const PROTO_AR_DR_PLASMA = 52;
export const PROTO_AR_DR_ELECTRICAL = 56;
export const PROTO_AR_DR_EMP = 60;
export const PROTO_AR_DR_EXPLOSION = 64;
export const PROTO_AR_DT_NORMAL = 68;
export const PROTO_AR_DT_LASER = 72;
export const PROTO_AR_DT_FIRE = 76;
export const PROTO_AR_DT_PLASMA = 80;
export const PROTO_AR_DT_ELECTRICAL = 84;
export const PROTO_AR_DT_EMP = 88;
export const PROTO_AR_DT_EXPLOSION = 92;
export const PROTO_AR_PERK = 96;
export const PROTO_AR_FID_MALE = 100;
export const PROTO_AR_FID_FEMALE = 104;

// Container prototype offsets
export const PROTO_CN_MAX_SIZE = 36;
export const PROTO_CN_FLAGS = 40;

// Ammo prototype offsets
export const PROTO_AM_CALIBER = 36;
export const PROTO_AM_PACK_SIZE = 40;
export const PROTO_AM_AC_MOD = 44;
export const PROTO_AM_DR_MOD = 48;
export const PROTO_AM_DMG_MULT = 52;
export const PROTO_AM_DMG_DIV = 56;

// Misc item prototype offsets
export const PROTO_MI_POWER_PID = 36;
export const PROTO_MI_CALIBER = 40;
export const PROTO_MI_CHARGES = 44;

// Drug prototype offsets
export const PROTO_DR_STAT_A = 36;
export const PROTO_DR_STAT_B = 40;
export const PROTO_DR_STAT_C = 44;
export const PROTO_DR_AMOUNT_1_A = 48;
export const PROTO_DR_AMOUNT_1_B = 52;
export const PROTO_DR_AMOUNT_1_C = 56;
export const PROTO_DR_DURATION_1 = 60;
export const PROTO_DR_AMOUNT_2_A = 64;
export const PROTO_DR_AMOUNT_2_B = 68;
export const PROTO_DR_AMOUNT_2_C = 72;
export const PROTO_DR_DURATION_2 = 76;
export const PROTO_DR_AMOUNT_3_A = 80;
export const PROTO_DR_AMOUNT_3_B = 84;
export const PROTO_DR_AMOUNT_3_C = 88;
export const PROTO_DR_ADDICT_CHANCE = 92;
export const PROTO_DR_ADDICT_PERK = 96;
export const PROTO_DR_ADDICT_DELAY = 100;

// Critter prototype offsets
export const PROTO_CR_FLAGS = 32;
export const PROTO_CR_BASE_STATS = 36;
export const PROTO_CR_BONUS_STATS = 176;
export const PROTO_CR_BONUS_SRENGTH = 176;
export const PROTO_CR_BONUS_PRCEPTION = 180;
export const PROTO_CR_BONUS_ENDURANCE = 184;
export const PROTO_CR_BONUS_CHARISMA = 188;
export const PROTO_CR_BONUS_INTELLIGENCE = 192;
export const PROTO_CR_BONUS_AGILITY = 196;
export const PROTO_CR_BONUS_LUCK = 200;
export const PROTO_CR_BONUS_HP = 204;
export const PROTO_CR_BONUS_AP = 208;
export const PROTO_CR_BONUS_AC = 212;
export const PROTO_CR_BONUS_UNARMED_DAMAGE = 216;
export const PROTO_CR_BONUS_MELEE_DAMAGE = 220;
export const PROTO_CR_BONUS_CARRY_WEIGHT = 224;
export const PROTO_CR_BONUS_SEQUENCE = 228;
export const PROTO_CR_BONUS_HEALING_RATE = 232;
export const PROTO_CR_BONUS_CRITICAL_CHANCE = 236;
export const PROTO_CR_BONUS_BETTER_CRITICALS = 240;
export const PROTO_CR_SKILLS = 316;
export const PROTO_CR_BODY_TYPE = 388;
export const PROTO_CR_KILL_EXP = 392;
export const PROTO_CR_KILL_TYPE = 396;
export const PROTO_CR_DMG_TYPE = 400;
export const PROTO_CR_HEAD_FID = 404;
export const PROTO_CR_AI_PACKET = 408;
export const PROTO_CR_TEAM_NUM = 412;

// Scenery prototype offsets
export const PROTO_SC_MATERIAL = 44;

// Wall prototype offsets
export const PROTO_WL_MATERIAL = 32;

// Material types
export const MATERIAL_TYPE_GLASS = 0;
export const MATERIAL_TYPE_METAL = 1;
export const MATERIAL_TYPE_PLASTIC = 2;
export const MATERIAL_TYPE_WOOD = 3;
export const MATERIAL_TYPE_DIRT = 4;
export const MATERIAL_TYPE_STONE = 5;
export const MATERIAL_TYPE_CEMENT = 6;
export const MATERIAL_TYPE_LEATHER = 7;

// Weapon calibers
export const CALIBER_NONE = 0;
export const CALIBER_ROCKET = 1;
export const CALIBER_FLAMER_FUEL = 2;
export const CALIBER_SMALL_ENERGY_CELL = 3;
export const CALIBER_MICRO_FUSION_CELL = 4;
export const CALIBER_223 = 5;
export const CALIBER_5MM = 6;
export const CALIBER_40 = 7;
export const CALIBER_10MM = 8;
export const CALIBER_44 = 9;
export const CALIBER_14MM = 10;
export const CALIBER_12_GAUGE = 11;
export const CALIBER_9MM = 12;
export const CALIBER_BB = 13;
export const CALIBER_45 = 14;
export const CALIBER_2MM = 15;
export const CALIBER_4_7MM_CASELESS = 16;
export const CALIBER_HN_NEEDLER = 17;
export const CALIBER_7_62MM = 18;

// Hidden perks
export const PERK_add_nuka = 53 as PerkID;
export const PERK_add_buffout = 54 as PerkID;
export const PERK_add_mentats = 55 as PerkID;
export const PERK_add_psycho = 56 as PerkID;
export const PERK_add_radaway = 57 as PerkID;
export const PERK_weapon_long_range = 58 as PerkID;
export const PERK_weapon_accurate = 59 as PerkID;
export const PERK_weapon_penetrate = 60 as PerkID;
export const PERK_weapon_knockback = 61 as PerkID;
export const PERK_armor_powered = 62 as PerkID;
export const PERK_armor_combat = 63 as PerkID;
export const PERK_weapon_scope_range = 64 as PerkID;
export const PERK_weapon_fast_reload = 65 as PerkID;
export const PERK_weapon_night_sight = 66 as PerkID;
export const PERK_weapon_flameboy = 67 as PerkID;
export const PERK_armor_advanced_1 = 68 as PerkID;
export const PERK_armor_advanced_2 = 69 as PerkID;
export const PERK_add_jet = 70 as PerkID;
export const PERK_add_tragic = 71 as PerkID;
export const PERK_armor_charisma = 72 as PerkID;

// Weapon animation codes
export const WPN_ANIM_NONE = 0x00;
export const WPN_ANIM_KNIFE = 0x01;
export const WPN_ANIM_CLUB = 0x02;
export const WPN_ANIM_SLEDGEHAMMER = 0x03;
export const WPN_ANIM_SPEAR = 0x04;
export const WPN_ANIM_PISTOL = 0x05;
export const WPN_ANIM_SMG = 0x06;
export const WPN_ANIM_RIFLE = 0x07;
export const WPN_ANIM_BIG_GUN = 0x08;
export const WPN_ANIM_MINIGUN = 0x09;
export const WPN_ANIM_ROCKET_LAUNCHER = 0x0A;

// Common object data offsets
export const OBJ_DATA_ID = 0x00;
export const OBJ_DATA_TILENUM = 0x04;
export const OBJ_DATA_CUR_FRM = 0x18;
export const OBJ_DATA_ROTATION = 0x1C;
export const OBJ_DATA_FID = 0x20;
export const OBJ_DATA_FLAGS = 0x24;
export const OBJ_DATA_ELEVATION = 0x28;
export const OBJ_DATA_MISC_FLAGS = 0x38;
export const OBJ_DATA_PID = 0x64;
export const OBJ_DATA_CID = 0x68;
export const OBJ_DATA_LIGHT_DISTANCE = 0x6C;
export const OBJ_DATA_LIGHT_INTENSITY = 0x70;
export const OBJ_DATA_SID = 0x78;
export const OBJ_DATA_SCRIPT_INDEX = 0x80;
// Items
export const OBJ_DATA_CUR_CHARGES = 0x3C;
// Critters
export const OBJ_DATA_COMBAT_STATE = 0x3C;
export const OBJ_DATA_CUR_ACTION_POINT = 0x40;
export const OBJ_DATA_DAMAGE_FLAGS = 0x44;
export const OBJ_DATA_DAMAGE_LAST_TURN = 0x48;
export const OBJ_DATA_WHO_HIT_ME = 0x54;

// Compute attack result data offsets
export const C_ATTACK_SOURCE = 0x00;
export const C_ATTACK_HIT_MODE = 0x04;
export const C_ATTACK_WEAPON = 0x08;
export const C_ATTACK_UNUSED = 0x0C;
export const C_ATTACK_DAMAGE_SOURCE = 0x10;
export const C_ATTACK_FLAGS_SOURCE = 0x14;
export const C_ATTACK_ROUNDS = 0x18;
export const C_ATTACK_MESSAGE = 0x1C;
export const C_ATTACK_TARGET = 0x20;
export const C_ATTACK_BODY_PART = 0x28;
export const C_ATTACK_DAMAGE_TARGET = 0x2C;
export const C_ATTACK_FLAGS_TARGET = 0x30;
export const C_ATTACK_KNOCKBACK_VALUE = 0x34;
export const C_ATTACK_MAIN_TARGET = 0x38;
export const C_ATTACK_AROUND_NUMBER = 0x3C;
export const C_ATTACK_TARGET1 = 0x40;
export const C_ATTACK_TARGET2 = 0x44;
export const C_ATTACK_TARGET3 = 0x48;
export const C_ATTACK_TARGET4 = 0x4C;
export const C_ATTACK_TARGET5 = 0x50;
export const C_ATTACK_TARGET6 = 0x54;
export const C_ATTACK_BODY_PART1 = 0x58;
export const C_ATTACK_BODY_PART2 = 0x5C;
export const C_ATTACK_BODY_PART3 = 0x60;
export const C_ATTACK_BODY_PART4 = 0x64;
export const C_ATTACK_BODY_PART5 = 0x68;
export const C_ATTACK_BODY_PART6 = 0x6C;
export const C_ATTACK_DAMAGE_TARGET1 = 0x70;
export const C_ATTACK_DAMAGE_TARGET2 = 0x74;
export const C_ATTACK_DAMAGE_TARGET3 = 0x78;
export const C_ATTACK_DAMAGE_TARGET4 = 0x7C;
export const C_ATTACK_DAMAGE_TARGET5 = 0x80;
export const C_ATTACK_DAMAGE_TARGET6 = 0x84;
export const C_ATTACK_FLAGS_TARGET1 = 0x88;
export const C_ATTACK_FLAGS_TARGET2 = 0x8C;
export const C_ATTACK_FLAGS_TARGET3 = 0x90;
export const C_ATTACK_FLAGS_TARGET4 = 0x94;
export const C_ATTACK_FLAGS_TARGET5 = 0x98;
export const C_ATTACK_FLAGS_TARGET6 = 0x9C;
export const C_ATTACK_KNOCKBACK_VALUE1 = 0xA0;
export const C_ATTACK_KNOCKBACK_VALUE2 = 0xA4;
export const C_ATTACK_KNOCKBACK_VALUE3 = 0xA8;
export const C_ATTACK_KNOCKBACK_VALUE4 = 0xAC;
export const C_ATTACK_KNOCKBACK_VALUE5 = 0xB0;
export const C_ATTACK_KNOCKBACK_VALUE6 = 0xB4;

// Critical values
export const CRITICAL_VALUE_MULT = 0;
export const CRITICAL_VALUE_EFFECTS = 1;
export const CRITICAL_VALUE_STAT_CHECK = 2;
export const CRITICAL_VALUE_STAT_MOD = 3;
export const CRITICAL_VALUE_FAIL_EFFECT = 4;
export const CRITICAL_VALUE_MSG = 5;
export const CRITICAL_VALUE_FAIL_MSG = 6;

// Difficulty levels
export const DIFFICULTY_EASY = 0 as Difficulty;
export const DIFFICULTY_NORMAL = 1 as Difficulty;
export const DIFFICULTY_HARD = 2 as Difficulty;

// Sound playback flags
export const soundraw = 0x80000000;

// Sound volume adjustments
export const SoundVolume25 = 0x20000000;
export const SoundVolumeHalf = 0x40000000;
export const SoundVolume75 = 0x60000000;

