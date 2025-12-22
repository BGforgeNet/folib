// Constants from define_lite.h

import {
  metarule, metarule3, gdialog_mod_barter, gfade_out, gfade_in,
  create_object_sid, has_skill, critter_state, critter_injure, critter_inven_obj,
  attack_complex, wield_obj_critter, has_trait, inven_cmds, self_obj
} from "../base.d";
import { ObjectPtr, CritterPtr, ItemPtr, SkillID, FloatMsgColor, TraitType, TraitID, PerkID, StatID, InvenSlot, DamageType, PcStatID, RollResult, AttackType, AttackMode, Gender, Difficulty, CritterState } from "../index";

export const no_proc = 0;
export const start_proc = 1;
export const spatial_proc = 2;
export const description_proc = 3;
export const pickup_proc = 4;
export const drop_proc = 5;
export const use_proc = 6;
export const use_obj_on_proc = 7;
export const use_skill_on_proc = 8;
export const use_ad_on_proc = 9;
export const use_disad_on_proc = 10;
export const talk_proc = 11;
export const critter_proc = 12;
export const combat_proc = 13;
export const damage_proc = 14;
export const map_enter_proc = 15;
export const map_exit_proc = 16;
export const create_proc = 17;
export const destroy_proc = 18;
export const barter_init_proc = 19;
export const barter_proc = 20;
export const look_at_proc = 21;
export const timed_event_proc = 22;
export const map_update_proc = 23;
export const METARULE_TEST_FIRSTRUN = 14;
export const METARULE_IS_LOADGAME = 22;
export const COMBAT_SUBTYPE_WEAPON_USED = 1;
export const COMBAT_SUBTYPE_HIT_SUCCEEDED = 2;
export const COMBAT_SUBTYPE_SEQUENCING = 3;
export const COMBAT_SUBTYPE_TURN = 4;
export const COMBAT_SUBTYPE_NONCOM_TURN = 5;
/** "vsuit.mve", */
export const VSUIT_MOVIE = 3;
/** "afailed.mve", */
export const AFAILED_MOVIE = 4;
/** "adestroy.mve", */
export const ADESTROY_MOVIE = 5;
/** "car.mve", */
export const CAR_MOVIE = 6;
/** "cartucci.mve", */
export const CARTUCCI_MOVIE = 7;
/** "dethclaw.mve", */
export const DETHCLAW_MOVIE = 8;
/** "tanker.mve", */
export const TANKER_MOVIE = 9;
/** "enclave.mve", */
export const ENCLAVE_MOVIE = 10;
/** "derrick.mve" */
export const DERRICK_MOVIE = 11;
export const FLOAT_MSG_WARNING = -2 as FloatMsgColor;
export const FLOAT_MSG_SEQUENTIAL = -1 as FloatMsgColor;
export const FLOAT_MSG_NORMAL = 0 as FloatMsgColor;
export const FLOAT_MSG_BLACK = 1 as FloatMsgColor;
export const FLOAT_MSG_RED = 2 as FloatMsgColor;
export const FLOAT_MSG_GREEN = 3 as FloatMsgColor;
export const FLOAT_MSG_BLUE = 4 as FloatMsgColor;
export const FLOAT_MSG_PURPLE = 5 as FloatMsgColor;
export const FLOAT_MSG_NEAR_WHITE = 6 as FloatMsgColor;
export const FLOAT_MSG_LIGHT_RED = 7 as FloatMsgColor;
export const FLOAT_MSG_YELLOW = 8 as FloatMsgColor;
export const FLOAT_MSG_WHITE = 9 as FloatMsgColor;
export const FLOAT_MSG_GREY = 10 as FloatMsgColor;
export const FLOAT_MSG_DARK_GREY = 11 as FloatMsgColor;
export const FLOAT_MSG_LIGHT_GREY = 12 as FloatMsgColor;
export const good_fidget = 1;
export const neutral_fidget = 4;
export const bad_fidget = 7;
export const GOOD_REACTION = 49;
export const NEUTRAL_REACTION = 50;
export const BAD_REACTION = 51;
/** marcus -- Party Member (found in Broken Hills) */
export const HEAD_MARCUS = 1;
/** Myron -- Party Member (found in New Reno) */
export const HEAD_MYRON = 2;
/** Elder -- (found in Arroyo) */
export const HEAD_ELDER = 3;
/** Lynette -- fount in Vault City */
export const HEAD_LYNETTE = 4;
/** HAROLD -- found in Gecko */
export const HEAD_HAROLD = 5;
/** Tandi -- Leader of the NCR */
export const HEAD_TANDI = 6;
/** Com Officer in Gecko */
export const HEAD_COM_OFFICER = 7;
/** Sulik -- Party Member (found in Klamath) */
export const HEAD_SULIK = 8;
/** President of the Enclave */
export const HEAD_PRESIDENT = 9;
/** Hakunin -- Found in Arroyo */
export const HEAD_HAKUNIN = 10;
export const HEAD_BOSS = 11;
export const HEAD_DYING_HAKUNIN = 12;
/** rstymetl */
export const BACKGROUND1 = 2;
/** hub.frm */
export const BACKGROUND_HUB = 3;
/** necro.frm */
export const BACKGROUND_NECROPOLIS = 4;
/** bhood.frm */
export const BACKGROUND_BHOOD = 5;
/** military.frm */
export const BACKGROUND_MILITARYBS = 6;
/** junktown.frm */
export const BACKGROUND_JUNKTOWN = 7;
/** cath.frm */
export const BACKGROUND_CATHEDRAL = 8;
/** shady.frm */
export const BACKGROUND_SHADY = 9;
/** vault.frm */
export const BACKGROUND_VAULT = 10;
/** master.frm */
export const BACKGROUND_MASTER = 11;
/** follow.frm */
export const BACKGROUND_FOLLOWER = 12;
/** raider.frm */
export const BACKGROUND_RAIDERS = 13;
/** cave0001.frm */
export const BACKGROUND_CAVE = 14;
/** enclave.frm */
export const BACKGROUND_ENCLAVE = 15;
/** wastelnd.frm */
export const BACKGROUND_WASTELAND = 16;
/** boss.frm */
export const BACKGROUND_BOSS = 17;
/** pres.frm */
export const BACKGROUND_PRESIDENT = 18;
/** tent.frm */
export const BACKGROUND_TENT = 19;
/** Adobe.frm */
export const BACKGROUND_ADOBE = 20;
export const TRAIT_PERK = 0 as TraitType;
export const TRAIT_OBJECT = 1 as TraitType;
export const TRAIT_TRAIT = 2 as TraitType;
export const PERK_bonus_awareness = 0 as PerkID;
export const PERK_bonus_hth_attacks = 1 as PerkID;
export const PERK_bonus_hth_damage = 2 as PerkID;
export const PERK_bonus_move = 3 as PerkID;
export const PERK_bonus_ranged_damage = 4 as PerkID;
export const PERK_bonus_rate_of_fire = 5 as PerkID;
export const PERK_earlier_sequence = 6 as PerkID;
export const PERK_faster_healing = 7 as PerkID;
export const PERK_more_criticals = 8 as PerkID;
export const PERK_night_vision = 9 as PerkID;
export const PERK_presence = 10 as PerkID;
export const PERK_rad_resistance = 11 as PerkID;
export const PERK_toughness = 12 as PerkID;
export const PERK_strong_back = 13 as PerkID;
export const PERK_sharpshooter = 14 as PerkID;
export const PERK_silent_running = 15 as PerkID;
export const PERK_survivalist = 16 as PerkID;
export const PERK_master_trader = 17 as PerkID;
export const PERK_educated = 18 as PerkID;
export const PERK_healer = 19 as PerkID;
export const PERK_fortune_finder = 20 as PerkID;
export const PERK_better_criticals = 21 as PerkID;
export const PERK_empathy = 22 as PerkID;
export const PERK_slayer = 23 as PerkID;
export const PERK_sniper = 24 as PerkID;
export const PERK_silent_death = 25 as PerkID;
export const PERK_action_boy = 26 as PerkID;
/** -- Disabled FO2 */
export const PERK_mental_block = 27 as PerkID;
export const PERK_lifegiver = 28 as PerkID;
export const PERK_dodger = 29 as PerkID;
export const PERK_snakeater = 30 as PerkID;
export const PERK_mr_fixit = 31 as PerkID;
export const PERK_medic = 32 as PerkID;
export const PERK_master_thief = 33 as PerkID;
export const PERK_speaker = 34 as PerkID;
export const PERK_heave_ho = 35 as PerkID;
/** -- Disabled FO2 */
export const PERK_friendly_foe = 36 as PerkID;
export const PERK_pickpocket = 37 as PerkID;
export const PERK_ghost = 38 as PerkID;
export const PERK_cult_of_personality = 39 as PerkID;
/** -- Disabled FO2 */
export const PERK_scrounger = 40 as PerkID;
export const PERK_explorer = 41 as PerkID;
/** -- Disabled FO2 */
export const PERK_flower_child = 42 as PerkID;
export const PERK_pathfinder = 43 as PerkID;
/** -- Disabled FO2 */
export const PERK_animal_friend = 44 as PerkID;
export const PERK_scout = 45 as PerkID;
export const PERK_mysterious_stranger = 46 as PerkID;
export const PERK_ranger = 47 as PerkID;
export const PERK_quick_pockets = 48 as PerkID;
export const PERK_smooth_talker = 49 as PerkID;
export const PERK_swift_learner = 50 as PerkID;
export const PERK_tag = 51 as PerkID;
export const PERK_mutate = 52 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_add_nuka = 53 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_add_buffout = 54 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_add_mentats = 55 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_add_psycho = 56 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_add_radaway = 57 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_long_range = 58 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_accurate = 59 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_penetrate = 60 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_knockback = 61 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_armor_powered = 62 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_armor_combat = 63 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_scope_range = 64 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_fast_reload = 65 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_night_sight = 66 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_weapon_flameboy = 67 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_armor_advanced_1 = 68 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_armor_advanced_2 = 69 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_add_jet = 70 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_add_tragic = 71 as PerkID;
/** Do NOT USE!  Engine ONLY! */
export const PERK_armor_charisma = 72 as PerkID;
export const PERK_gecko_skinning_perk = 73 as PerkID;
export const PERK_dermal_armor_perk = 74 as PerkID;
export const PERK_dermal_enhancement_perk = 75 as PerkID;
export const PERK_phoenix_armor_perk = 76 as PerkID;
export const PERK_phoenix_enhancement_perk = 77 as PerkID;
export const PERK_vault_city_inoculations_perk = 78 as PerkID;
export const PERK_adrenaline_rush_perk = 79 as PerkID;
export const PERK_cautious_nature_perk = 80 as PerkID;
export const PERK_comprehension_perk = 81 as PerkID;
export const PERK_demolition_expert_perk = 82 as PerkID;
export const PERK_gambler_perk = 83 as PerkID;
export const PERK_gain_strength_perk = 84 as PerkID;
export const PERK_gain_perception_perk = 85 as PerkID;
export const PERK_gain_endurance_perk = 86 as PerkID;
export const PERK_gain_charisma_perk = 87 as PerkID;
export const PERK_gain_intelligence_perk = 88 as PerkID;
export const PERK_gain_agility_perk = 89 as PerkID;
export const PERK_gain_luck_perk = 90 as PerkID;
export const PERK_harmless_perk = 91 as PerkID;
export const PERK_here_and_now_perk = 92 as PerkID;
export const PERK_hth_evade_perk = 93 as PerkID;
export const PERK_kama_sutra_perk = 94 as PerkID;
export const PERK_karma_beacon_perk = 95 as PerkID;
export const PERK_light_step_perk = 96 as PerkID;
export const PERK_living_anatomy_perk = 97 as PerkID;
export const PERK_magnetic_personality_perk = 98 as PerkID;
export const PERK_negotiator_perk = 99 as PerkID;
export const PERK_pack_rat_perk = 100 as PerkID;
export const PERK_pyromaniac_perk = 101 as PerkID;
export const PERK_quick_recovery_perk = 102 as PerkID;
export const PERK_salesman_perk = 103 as PerkID;
export const PERK_stonewall_perk = 104 as PerkID;
export const PERK_thief_perk = 105 as PerkID;
export const PERK_weapon_handling_perk = 106 as PerkID;
export const PERK_vault_city_training_perk = 107 as PerkID;
export const PERK_alcohol_hp_bonus1_perk = 108 as PerkID;
export const PERK_alcohol_hp_bonus2_perk = 109 as PerkID;
export const PERK_alcohol_hp_neg1_perk = 110 as PerkID;
export const PERK_alcohol_hp_neg2_perk = 111 as PerkID;
export const PERK_autodoc_hp_bonus1_perk = 112 as PerkID;
export const PERK_autodoc_hp_bonus2_perk = 113 as PerkID;
export const PERK_autodoc_hp_neg1_perk = 114 as PerkID;
export const PERK_autodoc_hp_neg2_perk = 115 as PerkID;
export const PERK_expert_excrement_expediter_perk = 116 as PerkID;
export const PERK_weapon_knockout_perk = 117 as PerkID;
export const PERK_jinxed_perk = 118 as PerkID;
export const OBJECT_AI_PACKET = 5;
export const OBJECT_TEAM_NUM = 6;
export const OBJECT_CUR_ROT = 10;
export const OBJECT_VISIBILITY = 666;
export const OBJECT_CUR_WEIGHT = 669;
export const TRAIT_fast_metabolism = 0 as TraitID;
export const TRAIT_bruiser = 1 as TraitID;
export const TRAIT_small_frame = 2 as TraitID;
export const TRAIT_one_hander = 3 as TraitID;
export const TRAIT_finesse = 4 as TraitID;
export const TRAIT_kamikaze = 5 as TraitID;
export const TRAIT_heavy_handed = 6 as TraitID;
export const TRAIT_fast_shot = 7 as TraitID;
export const TRAIT_bloody_mess = 8 as TraitID;
export const TRAIT_jinxed = 9 as TraitID;
export const TRAIT_good_natured = 10 as TraitID;
export const TRAIT_drug_addict = 11 as TraitID;
export const TRAIT_drug_resistant = 12 as TraitID;
export const TRAIT_sex_appeal = 13 as TraitID;
export const TRAIT_skilled = 14 as TraitID;
export const TRAIT_gifted = 15 as TraitID;
export const STAT_st = 0 as StatID;
export const STAT_pe = 1 as StatID;
export const STAT_en = 2 as StatID;
export const STAT_ch = 3 as StatID;
export const STAT_iq = 4 as StatID;
export const STAT_ag = 5 as StatID;
export const STAT_lu = 6 as StatID;
export const STAT_max_hp = 7 as StatID;
export const STAT_max_hit_points = 7 as StatID;
export const STAT_max_move_points = 8 as StatID;
export const STAT_ac = 9 as StatID;
/** used in sfall for critter inventory size (see CritterInvSizeLimitMode) */
export const STAT_unused = 10 as StatID;
export const STAT_melee_dmg = 11 as StatID;
export const STAT_carry_amt = 12 as StatID;
export const STAT_sequence = 13 as StatID;
export const STAT_heal_rate = 14 as StatID;
export const STAT_crit_chance = 15 as StatID;
export const STAT_better_crit = 16 as StatID;
export const STAT_dmg_thresh = 17 as StatID;
export const STAT_dmg_thresh_laser = 18 as StatID;
export const STAT_dmg_thresh_fire = 19 as StatID;
export const STAT_dmg_thresh_plasma = 20 as StatID;
export const STAT_dmg_thresh_electrical = 21 as StatID;
export const STAT_dmg_thresh_emp = 22 as StatID;
export const STAT_dmg_thresh_explosion = 23 as StatID;
export const STAT_dmg_resist = 24 as StatID;
export const STAT_dmg_resist_laser = 25 as StatID;
export const STAT_dmg_resist_fire = 26 as StatID;
export const STAT_dmg_resist_plasma = 27 as StatID;
export const STAT_dmg_resist_electrical = 28 as StatID;
export const STAT_dmg_resist_emp = 29 as StatID;
export const STAT_dmg_resist_explosion = 30 as StatID;
export const STAT_rad_resist = 31 as StatID;
export const STAT_poison_resist = 32 as StatID;
export const STAT_age = 33 as StatID;
export const STAT_gender = 34 as StatID;
export const STAT_current_hp = 35 as StatID;
export const STAT_current_poison = 36 as StatID;
export const STAT_current_rad = 37 as StatID;
export const STAT_real_max_stat = 38;
export const PCSTAT_unspent_skill_points = 0 as PcStatID;
export const PCSTAT_level = 1 as PcStatID;
export const PCSTAT_experience = 2 as PcStatID;
export const PCSTAT_reputation = 3 as PcStatID;
export const PCSTAT_karma = 4 as PcStatID;
export const PCSTAT_max_pc_stat = 5 as PcStatID;
export const SKILL_SMALL_GUNS = 0;
export const SKILL_BIG_GUNS = 1;
export const SKILL_ENERGY_WEAPONS = 2;
export const SKILL_UNARMED_COMBAT = 3;
export const SKILL_MELEE = 4;
export const SKILL_THROWING = 5;
export const SKILL_FIRST_AID = 6;
export const SKILL_DOCTOR = 7;
export const SKILL_SNEAK = 8;
export const SKILL_LOCKPICK = 9;
export const SKILL_STEAL = 10;
export const SKILL_TRAPS = 11;
export const SKILL_SCIENCE = 12;
export const SKILL_REPAIR = 13;
export const SKILL_SPEECH = 14;
export const SKILL_CONVERSANT = 14;
export const SKILL_BARTER = 15;
export const SKILL_GAMBLING = 16;
export const SKILL_OUTDOORSMAN = 17;
export const rl_disastrous = 0;
export const rl_very_bad = 1;
export const rl_bad = 2;
export const rl_poor = 3;
export const rl_neutral = 4;
export const rl_good = 5;
export const rl_very_good = 6;
export const rl_excellent = 7;
export const GENDER_MALE = 0 as Gender;
export const GENDER_FEMALE = 1 as Gender;
export const CRITTER_IS_NORMAL = 0 as CritterState;
export const CRITTER_IS_DEAD = 1 as CritterState;
export const CRITTER_IS_PRONE = 2 as CritterState;
export const INVEN_TYPE_WORN = 0 as InvenSlot;
export const INVEN_TYPE_RIGHT_HAND = 1 as InvenSlot;
export const INVEN_TYPE_LEFT_HAND = 2 as InvenSlot;
export const INVEN_TYPE_INV_COUNT = -2 as InvenSlot;
export const item_type_armor = 0;
export const item_type_container = 1;
export const item_type_drug = 2;
export const item_type_weapon = 3;
export const item_type_ammo = 4;
export const item_type_misc_item = 5;
export const item_type_key_item = 6;
export const it_pid = 0;
export const it_name = 1;
export const it_description = 2;
export const it_fid = 3;
export const it_light_distance = 4;
export const it_light_intensity = 5;
export const it_flags = 6;
export const it_flags_ext = 7;
export const it_sid = 8;
export const it_type = 9;
export const it_data = 10;
export const it_material = 11;
export const it_size = 12;
export const it_weight = 13;
export const it_cost = 14;
export const it_inv_fid = 15;
export const it_weapon_range = 555;
export const cr_pid = 0;
export const cr_name = 1;
export const cr_description = 2;
export const cr_fid = 3;
export const cr_light_distance = 4;
export const cr_light_intensity = 5;
export const cr_flags = 6;
export const cr_flags_ext = 7;
export const cr_sid = 8;
export const cr_data = 9;
export const cr_head_fid = 10;
export const cr_body_type = 11;
export const CR_BODY_BIPED = 0;
export const CR_BODY_QUADRUPED = 1;
export const CR_BODY_ROBOTIC = 2;
export const sc_pid = 0;
export const sc_name = 1;
export const sc_description = 2;
export const sc_fid = 3;
export const sc_light_distance = 4;
export const sc_light_intensity = 5;
export const sc_flags = 6;
export const sc_flags_ext = 7;
export const sc_sid = 8;
export const sc_type = 9;
export const sc_data = 10;
export const sc_material = 11;
export const wa_pid = 0;
export const wa_name = 1;
export const wa_description = 2;
export const wa_fid = 3;
export const wa_light_distance = 4;
export const wa_light_intensity = 5;
export const wa_flags = 6;
export const wa_flags_ext = 7;
export const wa_sid = 8;
export const wa_material = 9;
export const mi_pid = 0;
export const mi_name = 1;
export const mi_description = 2;
export const mi_fid = 3;
export const mi_light_distance = 4;
export const mi_light_intensity = 5;
export const mi_flags = 6;
export const mi_flags_ext = 7;
export const DAM_KNOCKED_OUT = 0x1;
export const DAM_KNOCKED_DOWN = 0x2;
export const DAM_CRIP_LEG_LEFT = 0x4;
export const DAM_CRIP_LEG_RIGHT = 0x8;
export const DAM_CRIP_ARM_LEFT = 0x10;
export const DAM_CRIP_ARM_RIGHT = 0x20;
export const DAM_BLIND = 0x40;
export const DAM_DEAD = 0x80;
/** hit or critical hit */
export const DAM_HIT = 0x100;
/** could be a critical hit or critical miss */
export const DAM_CRITICAL = 0x200;
export const DAM_ON_FIRE = 0x400;
export const DAM_BYPASS = 0x800;
export const DAM_EXPLODE = 0x1000;
export const DAM_DESTROY = 0x2000;
export const DAM_DROP = 0x4000;
export const DAM_LOSE_TURN = 0x8000;
export const DAM_HIT_SELF = 0x10000;
export const DAM_LOSE_AMMO = 0x20000;
export const DAM_DUD = 0x40000;
export const DAM_HURT_SELF = 0x80000;
export const DAM_RANDOM_HIT = 0x100000;
export const DAM_CRIP_RANDOM = 0x200000;
export const DAM_BACKWASH = 0x400000;
export const DAM_PERFORM_REVERSE = 0x800000;
export const DMG_normal_dam = 0 as DamageType;
export const DMG_laser = 1 as DamageType;
export const DMG_fire = 2 as DamageType;
export const DMG_plasma = 3 as DamageType;
export const DMG_electrical = 4 as DamageType;
export const DMG_emp = 5 as DamageType;
export const DMG_explosion = 6 as DamageType;
export const DMG_BYPASS_ARMOR = 256;
export const DMG_NOANIMATE = 512;
export const KILL_DONT_LEAVE_BODY = 0;
export const KILL_LEAVE_BODY = 1;
export const KILL_LEAVE_NV_BODY = 2;
export const METARULE_SIGNAL_END_GAME = 13;
export const METARULE_ELEVATOR = 15;
/** Brotherhood of Steel main elevator */
export const ELEV_BOS1 = 0;
/** Brotherhood of Steel surface elevator */
export const ELEV_BOS2 = 1;
/** Master's upper-level elevator */
export const ELEV_MASTR1 = 2;
/** Master's lower-level elevator */
export const ELEV_MASTR2 = 3;
/** Military Base upper-level elevator */
export const ELEV_MILB1 = 4;
/** Military Base lower-level elevator */
export const ELEV_MILB2 = 5;
/** Glow Elevator upper */
export const ELEV_GLOW1 = 6;
/** Glow elevator lower */
export const ELEV_GLOW2 = 7;
/** Vault13 elevator */
export const ELEV_VAULT = 8;
/** Necropolis elevator */
export const ELEV_NECVLT = 9;
/** Sierra Elev 1 (1-2-3) */
export const ELEV_SIERRA1 = 10;
/** Sierra Elev 2 (3-4) */
export const ELEV_SIERRA2 = 11;
/** Sierra Service Elev (1-2-3-4) */
export const ELEV_SIERRAS = 12;
export const METARULE_PARTY_COUNT = 16;
export const DONT_LIST_HIDDEN_MEMBERS = 0;
export const LIST_HIDDEN_MEMBERS = 1;
export const METARULE_AREA_KNOWN = 17;
export const METARULE_WHO_ON_DRUGS = 18;
export const METARULE_MAP_KNOWN = 19;
export const METARULE_CAR_CURRENT_TOWN = 30;
export const METARULE_GIVE_CAR_TO_PARTY = 31;
export const METARULE_GIVE_CAR_GAS = 32;
export const METARULE_SKILL_CHECK_TAG = 40;
export const METARULE_DROP_ALL_INVEN = 42;
export const METARULE_INVEN_UNWIELD_WHO = 43;
export const METARULE_GET_WORLDMAP_XPOS = 44;
export const METARULE_GET_WORLDMAP_YPOS = 45;
export const METARULE_CURRENT_TOWN = 46;
export const METARULE_LANGUAGE_FILTER = 47;
export const METARULE_VIOLENCE_FILTER = 48;
/** Violence Level settings. */
export const VLNCLVL_NONE = 0;
export const VLNCLVL_MIN = 1;
export const VLNCLVL_NORMAL = 2;
export const VLNCLVL_MAX = 3;
export const METARULE_W_DAMAGE_TYPE = 49;
export const METARULE_CRITTER_BARTERS = 50;
export const METARULE_CRITTER_KILL_TYPE = 51;
export const KILL_TYPE_men_kills = 0;
export const KILL_TYPE_women_kills = 1;
export const KILL_TYPE_children_kills = 2;
export const KILL_TYPE_super_mutant_kills = 3;
export const KILL_TYPE_ghoul_kills = 4;
export const KILL_TYPE_brahmin_kills = 5;
export const KILL_TYPE_radscorpion_kills = 6;
export const KILL_TYPE_rat_kills = 7;
export const KILL_TYPE_floater_kills = 8;
export const KILL_TYPE_centaur_kills = 9;
export const KILL_TYPE_robot_kills = 10;
export const KILL_TYPE_dog_kills = 11;
export const KILL_TYPE_manti_kills = 12;
export const KILL_TYPE_deathclaw_kills = 13;
export const KILL_TYPE_plant_kills = 14;
export const KILL_TYPE_gecko_kills = 15;
export const KILL_TYPE_alien_kills = 16;
export const KILL_TYPE_giant_ant_kills = 17;
export const DEFINE_METARULE_SET_CAR_CARRY_AMOUNT = 52;
export const DEFINE_METARULE_GET_CAR_CARRY_AMOUNT = 53;
export const METARULE3_CLR_FIXED_TIMED_EVENTS = 100;
export const METARULE3_MARK_SUBTILE = 101;
export const METARULE3_GET_KILL_COUNT = 103;
export const OFFSTATE = 0;
export const ONSTATE = 1;
export const METARULE3_MARK_MAP_ENTRANCE = 104;
export const UNKNOWNTILETYPE = 0;
export const KNOWNTILETYPE = 1;
export const VISITEDTILETYPE = 2;
export const METARULE3_WM_SUBTILE_STATE = 105;
export const METARULE3_TILE_GET_NEXT_CRITTER = 106;
export const METARULE3_ART_SET_BASE_FID_NUM = 107;
export const METARULE3_TILE_SET_CENTER = 108;
export const METARULE3_CHEM_USE_LEVEL = 109;
export const METARULE3_CAR_OUT_OF_FUEL = 110;
export const METARULE3_MAP_GET_LOAD_AREA = 111;
export const MARK_TYPE_TOWN = 0;
export const MARK_TYPE_MAP = 1;
export const MARK_STATE_UNKNOWN = 0;
export const MARK_STATE_KNOWN = 1;
export const MARK_STATE_VISITED = 2;
export const MARK_STATE_INVISIBLE = -66;
export const INVEN_CMD_INDEX_PTR = 13;
export const snd_human = 0;
export const snd_monster = 1;
export const snd_unused = 0;
export const snd_knock_down = 1;
export const snd_pass_out = 2;
export const snd_die = 3;
export const snd_contact = 4;
export const snd_active = 0;
export const snd_passive = 1;
export const snd_weapon_ready = 0;
export const snd_weapon_attack = 1;
export const snd_weapon_out = 2;
export const snd_weapon_ammo_flying = 3;
export const snd_weapon_hitting = 4;
export const snd_open = 0;
export const snd_close = 1;
export const snd_locked = 2;
export const snd_unlocked = 3;
export const snd_used = 4;
export const hit_left_weapon_primary = 0;
export const hit_left_weapon_secondary = 1;
export const hit_right_weapon_primary = 2;
export const hit_right_weapon_secondary = 3;
export const hit_punch = 4;
export const hit_kick = 5;
export const hit_left_weapon_reload = 6;
export const hit_right_weapon_reload = 7;
export const ONE_GAME_SECOND = 10;
export const bit_1 = 1;
export const bit_2 = 2;
export const bit_3 = 4;
export const bit_4 = 8;
export const bit_5 = 0x10;
export const bit_6 = 0x20;
export const bit_7 = 0x40;
export const bit_8 = 0x80;
export const bit_9 = 0x100;
export const bit_10 = 0x200;
export const bit_11 = 0x400;
export const bit_12 = 0x800;
export const bit_13 = 0x1000;
export const bit_14 = 0x2000;
export const bit_15 = 0x4000;
export const bit_16 = 0x8000;
export const bit_17 = 0x10000;
export const bit_18 = 0x20000;
export const bit_19 = 0x40000;
export const bit_20 = 0x80000;
export const bit_21 = 0x100000;
export const bit_22 = 0x200000;
export const bit_23 = 0x400000;
export const bit_24 = 0x800000;
export const bit_25 = 0x1000000;
export const bit_26 = 0x2000000;
export const bit_27 = 0x4000000;
export const bit_28 = 0x8000000;
export const bit_29 = 0x10000000;
export const bit_30 = 0x20000000;
export const bit_31 = 0x40000000;
export const bit_32 = 0x80000000;
export const bit_ALL = 0xFFFFFFFF;
export const ROLL_CRITICAL_FAILURE = 0 as RollResult;
export const ROLL_FAILURE = 1 as RollResult;
export const ROLL_SUCCESS = 2 as RollResult;
export const ROLL_CRITICAL_SUCCESS = 3 as RollResult;

// Wrapper functions

/**
 * Returns the damage type of a weapon (DMG_* constants).
 * @inline
 */
export function weapon_dmg_type(weapon: any): number {
  return metarule(METARULE_W_DAMAGE_TYPE, weapon);
}

/**
 * Returns the kill type of a critter (KILL_TYPE_* constants).
 * @inline
 */
export function critter_kill_type(who: any): number {
  return metarule(METARULE_CRITTER_KILL_TYPE, who);
}

/**
 * Returns true if the current map is being run for the first time.
 * @inline
 */
export function map_first_run(): boolean {
  return metarule(METARULE_TEST_FIRSTRUN, 0) != 0;
}

/**
 * Returns true if the game is currently loading.
 * @inline
 */
export function is_loading_game(): boolean {
  return metarule(METARULE_IS_LOADGAME, 0) != 0;
}

/**
 * Returns the index # of the current town.
 * @inline
 */
export function cur_town(): number {
  return metarule(METARULE_CURRENT_TOWN, 0);
}

/**
 * Returns the current town area the car can be found at.
 * @inline
 */
export function car_current_town(): number {
  return metarule(METARULE_CAR_CURRENT_TOWN, 0);
}

/**
 * Gives the car to the party.
 * @inline
 */
export function car_give_to_party(): number {
  return metarule(METARULE_GIVE_CAR_TO_PARTY, 0);
}

/**
 * Returns the current X position of the party on the World Map.
 * @inline
 */
export function worldmap_xpos(): number {
  return metarule(METARULE_GET_WORLDMAP_XPOS, 0);
}

/**
 * Returns the current Y position of the party on the World Map.
 * @inline
 */
export function worldmap_ypos(): number {
  return metarule(METARULE_GET_WORLDMAP_YPOS, 0);
}

/**
 * Returns true if the language filter is enabled.
 * @inline
 */
export function language_filter_is_on(): boolean {
  return metarule(METARULE_LANGUAGE_FILTER, 0) != 0;
}

/**
 * Returns the current violence level setting.
 * @inline
 */
export function violence_filter_setting(): number {
  return metarule(METARULE_VIOLENCE_FILTER, 0);
}

/**
 * Signals the game should end.
 * @inline
 */
export function signal_end_game(): void {
  metarule(METARULE_SIGNAL_END_GAME, 0);
}

/**
 * Returns the load area for the current map (-1 if none).
 * @inline
 */
export function map_get_load_area(): number {
  return metarule3(METARULE3_MAP_GET_LOAD_AREA, 0, 0, 0);
}

/**
 * Switch to barter screen (modifier = 0).
 * @inline
 */
export function gdialog_barter(): number {
  return gdialog_mod_barter(0);
}

/**
 * Returns the car carry amount.
 * @inline
 */
export function car_carry_amount(): number {
  return metarule(DEFINE_METARULE_GET_CAR_CARRY_AMOUNT, 0);
}

/**
 * Returns true if the car is out of fuel.
 * @inline
 */
export function car_out_of_fuel(): boolean {
  return metarule3(METARULE3_CAR_OUT_OF_FUEL, 0, 0, 0) != 0;
}

/**
 * Fade out the screen (time = 1).
 * @inline
 */
export function fade_out(): void {
  gfade_out(1);
}

/**
 * Fade in the screen (time = 1).
 * @inline
 */
export function fade_in(): void {
  gfade_in(1);
}

/** @inline */
export function create_object(pid: number, tile: number, elev: number): ObjectPtr {
  return create_object_sid(pid, tile, elev, -1);
}

/** @inline */
export function critter_skill_level(who: CritterPtr, skill: SkillID): number {
  return has_skill(who, skill);
}

/**
 * Check if critter is dead
 * @inline
 */
export function is_critter_dead(who: CritterPtr): boolean {
  return (critter_state(who) & CRITTER_IS_DEAD) != 0;
}

/**
 * Remove injuries from critter
 * @inline
 */
export function critter_uninjure(who: CritterPtr, flags: number): number {
  return critter_injure(who, flags | DAM_PERFORM_REVERSE);
}

/** @inline */
export function attack(who: CritterPtr): void {
  attack_complex(who, 0, 1, 0, 0, 30000, 0, 0);
}

/** @inline */
export function wield_obj(item: ItemPtr): void {
  // Cast: self_obj is ObjectPtr but wield_obj is only called from critter scripts
  wield_obj_critter(self_obj as CritterPtr, item);
}

/** @inline */
export function obj_is_visible_flag(who: ObjectPtr): number {
  return has_trait(TRAIT_OBJECT, who, OBJECT_VISIBILITY);
}

/** @inline */
export function inven_count(who: CritterPtr): ItemPtr {
  return critter_inven_obj(who, INVEN_TYPE_INV_COUNT);
}

/** @inline */
export function party_member_count(includeHidden: number): number {
  return metarule(METARULE_PARTY_COUNT, includeHidden);
}

/** @inline */
export function town_known(areaId: number): number {
  return metarule(METARULE_AREA_KNOWN, areaId);
}

/** @inline */
export function drug_influence(who: ObjectPtr): number {
  // Cast: SSL objects are integers at runtime, metarule expects number
  return metarule(METARULE_WHO_ON_DRUGS, who as unknown as number);
}

/** @inline */
export function map_is_known(mapId: number): number {
  return metarule(METARULE_MAP_KNOWN, mapId);
}

/** @inline */
export function car_give_gas(amount: number): number {
  return metarule(METARULE_GIVE_CAR_GAS, amount);
}

/** @inline */
export function is_skill_tagged(skill: SkillID): number {
  return metarule(METARULE_SKILL_CHECK_TAG, skill);
}

/** @inline */
export function obj_drop_everything(who: ObjectPtr): void {
  // Cast: SSL objects are integers at runtime, metarule expects number
  metarule(METARULE_DROP_ALL_INVEN, who as unknown as number);
}

/** @inline */
export function inven_unwield(who: ObjectPtr): void {
  // Cast: SSL objects are integers at runtime, metarule expects number
  metarule(METARULE_INVEN_UNWIELD_WHO, who as unknown as number);
}

/** @inline */
export function rm_fixed_timer_event(who: ObjectPtr, fixedVal: number): void {
  metarule3(METARULE3_CLR_FIXED_TIMED_EVENTS, who, fixedVal, 0);
}

/** @inline */
export function inven_ptr(who: ObjectPtr, where: number): ItemPtr {
  return inven_cmds(who, INVEN_CMD_INDEX_PTR, where) as ItemPtr;
}
