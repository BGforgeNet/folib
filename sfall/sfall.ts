/**
 * Sfall scripting extensions for Fallout 2
 * Converted from headers/sfall/sfall.h
 */
import type { ObjectPtr, CritterPtr, ItemPtr, IfaceTag, GameMode } from "../index";
export * from "./define_extra";

// Import engine functions for wrappers
import {
    sfall_func0, sfall_func1, sfall_func2, sfall_func3, sfall_func4, sfall_func5, sfall_func6, sfall_func7, sfall_func8,
    scan_array, create_array, temp_array, metarule3, resize_array, metarule2_explosions, get_tile_fid
} from "./sfall.d";
import { OBJ_DATA_CUR_ACTION_POINT } from "./define_extra";
import { DMG_fire } from "./define_lite";

// ============================================================================
// Interface Tag Constants (for show_iface_tag, hide_iface_tag, is_iface_tag_active)
// ============================================================================

/** Sneak interface tag - shows when sneaking is active */
export const IFACE_TAG_SNEAK = 0 as IfaceTag;
/** Poisoned status tag - only for is_iface_tag_active check */
export const IFACE_TAG_POISONED = 1 as IfaceTag;
/** Radiated status tag - only for is_iface_tag_active check */
export const IFACE_TAG_RADIATED = 2 as IfaceTag;
/** Level up available interface tag */
export const IFACE_TAG_LEVEL = 3 as IfaceTag;
/** Addict status interface tag */
export const IFACE_TAG_ADDICT = 4 as IfaceTag;

// ============================================================================
// Game Modes (for set_shader_mode and get_game_mode)
// ============================================================================

/** World map mode */
export const WORLDMAP = 0x1 as GameMode;
/** Local map mode (always 1 when scripts run) */
export const LOCALMAP = 0x2 as GameMode;
/** Dialog mode */
export const DIALOG = 0x4 as GameMode;
/** Escape menu mode */
export const ESCMENU = 0x8 as GameMode;
/** Save game mode */
export const SAVEGAME = 0x10 as GameMode;
/** Load game mode */
export const LOADGAME = 0x20 as GameMode;
/** Combat mode */
export const COMBAT = 0x40 as GameMode;
/** Options menu mode */
export const OPTIONS = 0x80 as GameMode;
/** Help screen mode */
export const HELP = 0x100 as GameMode;
/** Character screen mode */
export const CHARSCREEN = 0x200 as GameMode;
/** Pipboy mode */
export const PIPBOY = 0x400 as GameMode;
/** Player combat mode */
export const PCOMBAT = 0x800 as GameMode;
/** Inventory mode */
export const INVENTORY = 0x1000 as GameMode;
/** Automap mode */
export const AUTOMAP = 0x2000 as GameMode;
/** Skilldex mode */
export const SKILLDEX = 0x4000 as GameMode;
/** Interface use mode */
export const INTFACEUSE = 0x8000 as GameMode;
/** Interface loot mode */
export const INTFACELOOT = 0x10000 as GameMode;
/** Barter mode */
export const BARTER = 0x20000 as GameMode;
/** Hero window mode */
export const HEROWIN = 0x40000 as GameMode;
/** Dialog view mode */
export const DIALOGVIEW = 0x80000 as GameMode;
/** Counter window for moving multiple items or setting a timer */
export const COUNTERWIN = 0x100000 as GameMode;
/** Ctrl+P pause window */
export const PAUSEWIN = 0x200000 as GameMode;
/** Special mode */
export const SPECIAL = 0x80000000 as GameMode;

// ============================================================================
// Hook Types (for register_hook_proc)
// ============================================================================

/**
 * Runs when Fallout is calculating the chances of an attack striking a target.
 * Runs after the hit chance is fully calculated normally, including applying the 95% cap.
 *
 * ```
 * int     arg0 - The hit chance (capped)
 * Critter arg1 - The attacker
 * Critter arg2 - The target of the attack
 * int     arg3 - The targeted bodypart
 * int     arg4 - Source tile (may differ from attacker's tile, when AI is considering potential fire position)
 * int     arg5 - Attack Type (see ATKTYPE_* constants)
 * int     arg6 - Ranged flag. 1 if the hit chance calculation takes into account the distance to the target
 * int     arg7 - The raw hit chance before applying the cap
 *
 * int     ret0 - The new hit chance. The value is limited to the range of -99 to 999
 * ```
 */
export const HOOK_TOHIT = 0;

/**
 * Runs after Fallout has decided if an attack will hit or miss.
 *
 * ```
 * int     arg0 - If the attack will hit: 0 - critical miss, 1 - miss, 2 - hit, 3 - critical hit
 * Critter arg1 - The attacker
 * Critter arg2 - The target of the attack
 * int     arg3 - The bodypart
 * int     arg4 - The hit chance
 *
 * int     ret0 - Override the hit/miss
 * int     ret1 - Override the targeted bodypart
 * Critter ret2 - Override the target of the attack
 * ```
 */
export const HOOK_AFTERHITROLL = 1;

/**
 * Runs whenever Fallout calculates the AP cost of using an active item in hand (or unarmed attack).
 * Doesn't run for moving.
 *
 * Note that the first time a game is loaded, this script doesn't run before the initial interface
 * is drawn, so if the script effects the AP cost of whatever is in the player's hands at the time
 * the wrong AP cost will be shown. It will be fixed the next time the interface is redrawn.
 *
 * You can get the weapon object by checking item slot based on attack type (ATKTYPE_LWEP1, etc)
 * and then calling critter_inven_obj.
 *
 * ```
 * Critter arg0 - The critter performing the action
 * int     arg1 - Attack Type (see ATKTYPE_* constants)
 * int     arg2 - Is aimed attack (1 or 0)
 * int     arg3 - The default AP cost
 * Item    arg4 - The weapon for which the cost is calculated (0 if can be obtained by other method)
 *
 * int     ret0 - The new AP cost
 * ```
 */
export const HOOK_CALCAPCOST = 2;

/**
 * Runs before Fallout tries to calculate the death animation.
 * Lets you switch out which weapon Fallout sees.
 * Does not run for critters in the knockdown/out state.
 *
 * ```
 * int     arg0 - The pid of the weapon performing the attack (-1 if unarmed)
 * Critter arg1 - The attacker
 * Critter arg2 - The target
 * int     arg3 - The amount of damage
 * int     arg4 - Unused, always -1
 *
 * int     ret0 - The pid of an object to override the attacking weapon with
 * ```
 */
export const HOOK_DEATHANIM1 = 3;

/**
 * Runs after Fallout has calculated the death animation.
 * Lets you set your own custom frame id, so more powerful than HOOK_DEATHANIM1, but performs no validation.
 * Does not run for critters in the knockdown/out state.
 *
 * When using critter_dmg function, this script will also run. In that case weapon pid will be -1
 * and attacker will point to an object with obj_art_fid == 0x20001F5.
 *
 * ```
 * int     arg0 - The pid of the weapon performing the attack (-1 if unarmed)
 * Critter arg1 - The attacker
 * Critter arg2 - The target
 * int     arg3 - The amount of damage
 * int     arg4 - The death anim id calculated by Fallout
 *
 * int     ret0 - The death anim id to override with
 * ```
 */
export const HOOK_DEATHANIM2 = 4;

/**
 * Runs when:
 * 1. Game calculates how much damage each target will get (primary target and extras from explosions/bursts).
 *    This happens BEFORE the actual attack animation.
 * 2. AI decides whether it is safe to use area attack (burst, grenades), if he might hit friendlies.
 *
 * Does not run for misses, or non-combat damage like dynamite explosions.
 *
 * ```
 * Critter arg0  - The target
 * Critter arg1  - The attacker
 * int     arg2  - The amount of damage to the target
 * int     arg3  - The amount of damage to the attacker
 * int     arg4  - The special effect flags for the target (use bwand DAM_* to check)
 * int     arg5  - The special effect flags for the attacker
 * Item    arg6  - The weapon used in the attack
 * int     arg7  - The bodypart that was struck
 * int     arg8  - Damage Multiplier (divided by 2, so 3 = 1.5x, 8 = 4x)
 * int     arg9  - Number of bullets actually hit the target (1 for melee)
 * int     arg10 - The amount of knockback to the target
 * int     arg11 - Attack Type (see ATKTYPE_* constants)
 * mixed   arg12 - computed attack data (use C_ATTACK_* offsets with get/set_object_data)
 *
 * int     ret0 - The damage to the target
 * int     ret1 - The damage to the attacker
 * int     ret2 - The special effect flags for the target
 * int     ret3 - The special effect flags for the attacker
 * int     ret4 - The amount of knockback to the target
 * ```
 */
export const HOOK_COMBATDAMAGE = 5;

/**
 * Runs immediately after a critter dies for any reason.
 * No return values; this is just a convenience for when you need to do something after death
 * for a large number of different critters and don't want to have to script each one.
 *
 * ```
 * Critter arg0 - The critter that just died
 * ```
 */
export const HOOK_ONDEATH = 6;

/**
 * Runs when the AI is trying to pick a target in combat.
 * Fallout first chooses a list of 4 likely suspects, then normally sorts them in order of
 * weakness/distance/etc depending on the AI caps of the attacker.
 * This hook replaces that sorting function, allowing you to sort the targets in some arbitrary way.
 *
 * The return values can include critters that weren't in the list of possible targets,
 * but they may still be discarded later if out of perception or chance of hit is too low.
 *
 * Use set_sfall_return to give the 4 targets, in order of preference.
 * Pass 0 or -1 to skip return values for less than 4 targets.
 *
 * ```
 * Critter arg0 - The attacker
 * Critter arg1 - A possible target
 * Critter arg2 - A possible target
 * Critter arg3 - A possible target
 * Critter arg4 - A possible target
 *
 * Critter ret0 - The first choice of target
 * Critter ret1 - The second choice of target
 * Critter ret2 - The third choice of target
 * Critter ret3 - The fourth choice of target
 * ```
 */
export const HOOK_FINDTARGET = 7;

/**
 * Runs when:
 * 1. a critter uses an object on another critter (or themselves)
 * 2. a critter uses an object from inventory without "Use" action flag and it's not active flare/explosive
 * 3. player or AI uses any drug
 *
 * This is fired before the object is used, and the relevant use_obj_on script procedures are run.
 * You can disable default item behavior.
 *
 * NOTE: You can't remove/destroy this object during the hookscript (game will crash).
 * To remove it, return 1.
 *
 * ```
 * Critter arg0 - The target
 * Critter arg1 - The user
 * int     arg2 - The object used
 *
 * int     ret0 - overrides handler (0 - place back, 1 - remove, -1 - use engine handler)
 * ```
 */
export const HOOK_USEOBJON = 8;

/**
 * Runs when an object is removed from a container or critter's inventory for any reason.
 *
 * ```
 * Obj     arg0 - the owner that the object is being removed from
 * Item    arg1 - the item that is being removed
 * int     arg2 - the number of items to remove
 * int     arg3 - The reason the object is being removed (see RMOBJ_* constants)
 * Obj     arg4 - The destination object when moved to another object, 0 otherwise
 * ```
 */
export const HOOK_REMOVEINVENOBJ = 9;

/**
 * Runs whenever the value of goods being purchased is calculated.
 *
 * NOTE: the hook is executed twice when entering the barter screen or after transaction:
 * the first time is for the player and the second time is for NPC.
 *
 * ```
 * Critter arg0 - the critter doing the bartering (either dude_obj or inven_dude)
 * Critter arg1 - the critter being bartered with
 * int     arg2 - the default value of the goods
 * Critter arg3 - table of requested goods (being bought from NPC)
 * int     arg4 - the number of actual caps in the barter stack
 * int     arg5 - the value of all goods being traded before skill modifications
 * Critter arg6 - table of offered goods (being sold to NPC)
 * int     arg7 - the total cost of the goods offered by the player
 * int     arg8 - 1 if the "offers" button was pressed (not for party member), 0 otherwise
 * int     arg9 - 1 if trading with a party member, 0 otherwise
 *
 * int     ret0 - the modified value of all goods (pass -1 to just modify offered goods)
 * int     ret1 - the modified value of all offered goods
 * ```
 */
export const HOOK_BARTERPRICE = 10;

/**
 * Runs when calculating the AP cost of movement.
 *
 * ```
 * Critter arg0 - the critter doing the moving
 * int     arg1 - the number of hexes being moved
 * int     arg2 - the original AP cost
 *
 * int     ret0 - the new AP cost
 * ```
 */
export const HOOK_MOVECOST = 11;

/**
 * @deprecated Hex movement blocking check - avoid using, very CPU intensive.
 * May be removed in future sfall versions. Use obj_blocking_tile, obj_blocking_line,
 * path_find_to functions instead. Or use HOOK_MOVECOST for combat hex movement.
 */
export const HOOK_HEXMOVEBLOCKING = 12;

/**
 * @deprecated Hex AI blocking check - avoid using, very CPU intensive.
 * May be removed in future sfall versions.
 */
export const HOOK_HEXAIBLOCKING = 13;

/**
 * @deprecated Hex shoot blocking check - avoid using, very CPU intensive.
 * May be removed in future sfall versions.
 */
export const HOOK_HEXSHOOTBLOCKING = 14;

/**
 * @deprecated Hex sight blocking check - avoid using, very CPU intensive.
 * May be removed in future sfall versions.
 */
export const HOOK_HEXSIGHTBLOCKING = 15;

/**
 * Runs when retrieving the damage rating of the player's used weapon (which may be their fists).
 *
 * ```
 * int     arg0 - The default min damage
 * int     arg1 - The default max damage
 * Item    arg2 - The weapon used (0 if unarmed)
 * Critter arg3 - The critter doing the attacking
 * int     arg4 - The type of attack
 * int     arg5 - non-zero if this is an attack using a melee weapon
 *
 * int     ret0 - Either the damage to be used, if ret1 isn't given, or the new minimum damage
 * int     ret1 - The new maximum damage
 * ```
 */
export const HOOK_ITEMDAMAGE = 16;

/**
 * Runs when calculating ammo cost for a weapon. Doesn't affect damage, only how much ammo is spent.
 * By default, a weapon can perform an attack with at least one ammo, regardless of ammo cost calculation.
 * To add proper checks for ammo before attacking (hook type 1), set CheckWeaponAmmoCost=1 in ddraw.ini.
 *
 * NOTE: The return value must be >= 0 to be valid.
 *
 * ```
 * Item    arg0 - The weapon
 * int     arg1 - Number of bullets in burst or 1 for single shots
 * int     arg2 - The amount of ammo that will be consumed (for hook type 2, this is ammo cost per round)
 * int     arg3 - Type of hook:
 *                0 - when subtracting ammo after single shot attack
 *                1 - when checking for "out of ammo" before attack
 *                2 - when calculating number of burst rounds
 *                3 - when subtracting ammo after burst attack
 *
 * int     ret0 - The new ammo to consume, or ammo cost per round for hook type 2 (0 = unlimited ammo)
 * ```
 */
export const HOOK_AMMOCOST = 17;

/**
 * Runs when:
 * 1. a critter uses an object from inventory which has "Use" action flag set or it's an active flare/dynamite
 * 2. player uses an object from main interface
 *
 * This is fired before the object is used, and the relevant use_obj script procedures are run.
 * You can disable default item behavior.
 *
 * NOTE: You can't remove/destroy this object during the hookscript (game will crash).
 * To remove it, return 1.
 *
 * ```
 * Critter arg0 - The user
 * Obj     arg1 - The object used
 *
 * int     ret0 - overrides handler (0 - place back, 1 - remove, -1 - use engine handler)
 * ```
 */
export const HOOK_USEOBJ = 18;

/**
 * Runs once every time when any key was pressed or released.
 * DX codes: see dik.h header or https://kippykip.com/b3ddocs/commands/scancodes.htm
 *
 * NOTE: If you want to override a key, the new key DX scancode should be the same
 * for both pressed and released events.
 *
 * ```
 * int     arg0 - event type: 1 - pressed, 0 - released
 * int     arg1 - key DX scancode
 * int     arg2 - key VK code (very similar to ASCII codes)
 *
 * int     ret0 - overrides the pressed key (a new key DX scancode or 0 for no override)
 * ```
 */
export const HOOK_KEYPRESS = 19;

/**
 * Runs once every time when a mouse button was pressed or released.
 *
 * ```
 * int     arg0 - event type: 1 - pressed, 0 - released
 * int     arg1 - button number (0 - left, 1 - right, up to 7)
 * ```
 */
export const HOOK_MOUSECLICK = 20;

/**
 * Runs when using any skill on any object.
 * This is fired before the default handlers are called, which you can override.
 *
 * If you override, you should write your own skill use handler entirely (including fade in/out,
 * time lapsing and messages - use message_str_game with sprintf for vanilla text).
 *
 * Does not run if the script of the object calls script_overrides for using the skill.
 *
 * ```
 * Critter arg0 - The user critter
 * Obj     arg1 - The target object
 * int     arg2 - skill being used
 * int     arg3 - skill bonus from items such as first aid kits
 *
 * int     ret0 - overrides handler (-1 = use engine, other = override; 0 = 10% chance to remove medical item)
 * ```
 */
export const HOOK_USESKILL = 21;

/**
 * Runs when checking an attempt to steal or plant an item in other inventory using Steal skill.
 * This is fired before the default handlers are called, which you can override.
 *
 * If you override, you MUST provide message of the result to player.
 * Example: display_msg(sprintf(mstr_skill(570 + (isSuccess != false) + arg3 * 2), obj_name(arg2)));
 *
 * ```
 * Critter arg0 - Thief
 * Obj     arg1 - The target
 * Item    arg2 - The item being stolen/planted
 * int     arg3 - 0 when stealing, 1 when planting
 * int     arg4 - quantity of the item being stolen/planted
 *
 * int     ret0 - overrides handler (2 - force fail without closing window, 1 - force success, 0 - force fail, -1 - use engine)
 * int     ret1 - overrides experience points gained for stealing this item (must be >= 0)
 * ```
 */
export const HOOK_STEAL = 22;

/**
 * Runs when checking if one critter sees another critter (used in combat AI, etc).
 * This is fired after the default calculation is made.
 *
 * NOTE: obj_can_see_obj calls this first when deciding if critter can see another critter
 * with regard to perception, lighting, sneak factors. If check fails, result is false.
 * If check succeeds, another check is made for blocking tiles (windows, bushes, barrels, etc).
 *
 * You can override "within perception" check by returning 0 or 1, OR override blocking check
 * by returning 2 (but then you should add line of sight check in your hook script).
 *
 * ```
 * Critter arg0 - Watcher object
 * Obj     arg1 - Target object
 * int     arg2 - Result of vanilla function: 1 - within perception range, 0 - otherwise
 * int     arg3 - Type of hook:
 *                1 - from obj_can_see_obj script function
 *                2 - from obj_can_hear_obj (need ObjCanHearObjFix=1 in ddraw.ini)
 *                3 - when AI determines whether it sees a potential target
 *                0 - all other cases
 *
 * int     ret0 - overrides result: 0 - not in range, 1 - in range (will see if not blocked), 2 - forced detection
 * ```
 */
export const HOOK_WITHINPERCEPTION = 23;

/**
 * Runs before moving items between inventory slots in dude interface. You can override the action.
 *
 * What you can NOT do: force moving items to inappropriate slots (gun in armor slot).
 * What you can do: restrict weapons/armors, add AP costs for inventory movement, apply scripted effects.
 *
 * ```
 * int     arg0 - Target slot:
 *                0 - main backpack, 1 - left hand, 2 - right hand, 3 - armor slot
 *                4 - weapon (when reloading by dropping ammo), 5 - container (bag/backpack)
 *                6 - dropping on ground, 7 - picking up item, 8 - dropping on character portrait
 * Item    arg1 - Item being moved
 * Item    arg2 - Item being replaced, weapon being reloaded, or container being filled (can be 0)
 *
 * int     ret0 - Override setting (-1 = use engine, other = prevent relocation/reload/pickup)
 * ```
 */
export const HOOK_INVENTORYMOVE = 24;

/**
 * Runs before causing a critter or the player to wield/unwield an armor or weapon
 * (except when using the inventory by PC).
 *
 * NOTE: When replacing a previously wielded armor or weapon, the unwielding hook will not be executed.
 * If you need to rely on this, check if armor/weapon is already equipped when wielding hook is executed.
 *
 * ```
 * Critter arg0 - critter
 * Item    arg1 - item being wielded or unwielded (weapon/armor)
 * int     arg2 - slot (INVEN_TYPE_*)
 * int     arg3 - 1 when wielding, 0 when unwielding
 * int     arg4 - 1 when removing an equipped item from inventory, 0 otherwise
 *
 * int     ret0 - overrides handler (-1 = use engine, other = override) - NOT RECOMMENDED
 * ```
 */
export const HOOK_INVENWIELD = 25;

/**
 * Runs after calculating character figure FID on the inventory screen,
 * whenever the game decides that character appearance might change.
 * Also happens on other screens, like barter.
 *
 * NOTE: FID has format: 0x0ABBCDDD where A = object type, BB = animation code (always 0 here),
 * C = weapon code, DDD = FRM index in LST file.
 *
 * ```
 * int     arg0 - the vanilla FID calculated by the engine
 * int     arg1 - the modified FID calculated by internal sfall code (like Hero Appearance Mod)
 *
 * int     ret0 - overrides the calculated FID with provided value
 * ```
 */
export const HOOK_ADJUSTFID = 26;

/**
 * Runs before and after each turn in combat (for both PC and NPC).
 *
 * ```
 * int     arg0 - event type:
 *                1 - start of turn
 *                0 - normal end of turn
 *               -1 - combat ends abruptly (by script or by pressing Enter during PC turn)
 *               -2 - combat ends normally (hook always runs at the end of combat)
 * Critter arg1 - critter doing the turn
 * int     arg2 - 1 at start/end of player's turn after loading a game saved in combat mode, 0 otherwise
 *
 * int     ret0 - pass 1 at start of turn to skip the turn, pass -1 at end of turn to force end of combat
 * ```
 */
export const HOOK_COMBATTURN = 27;

/**
 * Runs continuously during world map travel by car.
 *
 * ```
 * int     arg0 - vanilla car speed (between 3 and 8 "steps")
 * int     arg1 - vanilla fuel consumption (100 and below)
 *
 * int     ret0 - car speed override (pass -1 if you just want to override fuel consumption)
 * int     ret1 - fuel consumption override
 * ```
 */
export const HOOK_CARTRAVEL = 28;

/**
 * Runs when setting the value of a global variable.
 *
 * ```
 * int     arg0 - the index number of the global variable being set
 * int     arg1 - the set value of the global variable
 *
 * int     ret0 - overrides the value of the global variable
 * ```
 */
export const HOOK_SETGLOBALVAR = 29;

/**
 * Runs continuously while the player is resting (using pipboy alarm clock).
 *
 * ```
 * int     arg0 - the game time in ticks
 * int     arg1 - event type: 1 - resting ends normally, -1 - pressing ESC to cancel, 0 - otherwise
 * int     arg2 - the hour part of the length of resting time
 * int     arg3 - the minute part of the length of resting time
 *
 * int     ret0 - pass 1 to interrupt the resting, pass 0 to continue the rest if it was interrupted by ESC
 * ```
 */
export const HOOK_RESTTIMER = 30;

/**
 * Runs once every time when the game mode was changed (opening/closing inventory, character screen, pipboy, etc).
 *
 * ```
 * int     arg0 - event type: 1 - when the player exits the game, 0 - otherwise
 * int     arg1 - the previous game mode
 * ```
 */
export const HOOK_GAMEMODECHANGE = 31;

/**
 * Runs before playing the "use" (usually "magic hands") animation when a critter uses
 * a scenery/container object on the map, or before walking/running animation if the player
 * is at a distance from the object.
 *
 * ```
 * Critter arg0 - the critter that uses an object (usually dude_obj)
 * Obj     arg1 - the object being used
 * int     arg2 - the animation code being used (see ANIM_* in Animcomd.h)
 *
 * int     ret0 - overrides the animation code (pass -1 if you want to skip the animation)
 * ```
 */
export const HOOK_USEANIMOBJ = 32;

/**
 * Runs after setting the explosive timer. You can override the result.
 *
 * ```
 * int     arg0 - the time in ticks set in the timer
 * Obj     arg1 - the explosive object
 * int     arg2 - the result of engine calculation: 1 - failure, 2 - success (similar to ROLL_*)
 *
 * int     ret0 - overrides the time of the timer (maximum 18000 ticks)
 * int     ret1 - overrides the result: 0/1 - failure, 2/3 - success, other = use engine handler
 * ```
 */
export const HOOK_EXPLOSIVETIMER = 33;

/**
 * Runs when using the examine action icon to display the description of an object.
 * You can override the description text.
 * An example usage would be to add an additional description to the item based on player's stats/skills.
 *
 * Does not run if the script of the object overrides the description.
 *
 * ```
 * Obj     arg0 - the object
 *
 * String  ret0 - the new description text to use
 * ```
 */
export const HOOK_DESCRIPTIONOBJ = 34;

/**
 * Runs before using any skill on any object. Lets you override the critter that uses the skill.
 *
 * NOTE: The user critter can't be overridden when using Steal skill.
 *
 * ```
 * Critter arg0 - the user critter (usually dude_obj)
 * Obj     arg1 - the target object/critter
 * int     arg2 - skill being used
 *
 * int     ret0 - a new critter to override the user. Pass -1 to cancel skill use, 0 to skip this return
 * int     ret1 - pass 1 to allow the skill to be used in combat (only for dude_obj or controlled critter)
 * ```
 */
export const HOOK_USESKILLON = 35;

/**
 * Runs when Fallout is checking all the tiles within the explosion radius for targets
 * before an explosion occurs. The tile checking will be interrupted when 6 additional targets are received.
 *
 * ```
 * int     arg0 - event type: 1 - checking objects without causing damage (e.g. player drops active explosive), 0 - otherwise
 * Critter arg1 - the attacker
 * int     arg2 - the tile on which the explosion occurs
 * int     arg3 - checked tile within the explosion radius
 * Obj     arg4 - first found object on the checked tile as an additional target
 * Critter arg5 - the target critter, may be 0 or equal to the attacker
 * int     arg6 - 1 when using throwing weapons (e.g. grenades), 0 otherwise
 *
 * int     ret0 - overrides the found object on the checked tile, pass 0 to skip the object
 * ```
 */
export const HOOK_ONEXPLOSION = 36;

/**
 * This hook overrides the vanilla damage calculation formula.
 * Runs when:
 * 1. Before the game calculates how much damage each target will get (primary and extras from explosions/bursts).
 * 2. AI decides whether it is safe to use area attack if he might hit friendlies.
 *
 * Does not run for misses, non-combat damage, or if one of the damage formulas is selected in ddraw.ini.
 *
 * ```
 * Critter arg0 - the attacker
 * Critter arg1 - the target
 * Item    arg2 - the weapon used in the attack
 * int     arg3 - attack type (see ATKTYPE_* constants)
 * int     arg4 - number of bullets actually hit the target (1 for melee)
 * int     arg5 - target's Damage Resistance (DR) value
 * int     arg6 - target's Damage Threshold (DT) value
 * int     arg7 - bonus ranged damage from the perk
 * int     arg8 - damage multiplier (divided by 2, so 3 = 1.5x, 8 = 4x)
 * int     arg9 - combat difficulty multiplier (125 - rough, 100 - normal, 75 - wimpy)
 * int     arg10 - the calculated amount of damage (usually 0)
 * mixed   arg11 - computed attack data (use C_ATTACK_* offsets with get/set_object_data)
 *
 * int     ret0 - the returned amount of damage
 * ```
 */
export const HOOK_SUBCOMBATDAMAGE = 37;

/**
 * Runs before setting the light level for an object or a map. You can override the result.
 *
 * ```
 * Obj     arg0 - the object being set, or -1 when setting the light level for a map
 * int     arg1 - the light intensity
 * int     arg2 - the light radius, or -1 when setting the light level for a map
 *
 * int     ret0 - overrides the light intensity. Intensity range is from 0 to 65536
 * int     ret1 - overrides the light radius. Radius range is from 0 to 8 (works only for the object)
 * ```
 */
export const HOOK_SETLIGHTING = 38;

/**
 * Runs when the Sneak skill is activated, or when the game rolls another Sneak check
 * after the duration for the current one is over.
 * You can override the result of a random Sneak check or the duration time.
 *
 * ```
 * int     arg0 - Sneak check result: 1 - success, 0 - failure
 * int     arg1 - the duration in ticks for the current Sneak check (time depends on Sneak skill level)
 * Critter arg2 - the critter (usually dude_obj)
 *
 * int     ret0 - overrides the result of the Sneak check
 * int     ret1 - overrides the duration time for the current result
 * ```
 */
export const HOOK_SNEAK = 39;

/**
 * Runs before Fallout executes a standard procedure (handler) in any script of any object.
 * NOTE: this hook will not be executed for start, critter_p_proc, timed_event_p_proc, and map_update_p_proc.
 *
 * ```
 * int     arg0 - the number of the standard script handler (see *_proc in define.h)
 * Obj     arg1 - the object that owns this handler (self_obj)
 * Obj     arg2 - the object that called this handler (source_obj, can be 0)
 * int     arg3 - always 0 (1 for _END version)
 * Obj     arg4 - the object that is acted upon by this handler (target_obj, can be 0)
 * int     arg5 - the parameter of this call (fixed_param), useful for combat_proc
 *
 * int     ret0 - pass -1 to cancel the execution of the handler
 * ```
 */
export const HOOK_STDPROCEDURE = 40;

/**
 * Runs after Fallout executes a standard procedure (handler) in any script of any object.
 * NOTE: this hook will not be executed for start, critter_p_proc, timed_event_p_proc, and map_update_p_proc.
 *
 * ```
 * int     arg0 - the number of the standard script handler (see *_proc in define.h)
 * Obj     arg1 - the object that owns this handler (self_obj)
 * Obj     arg2 - the object that called this handler (source_obj, can be 0)
 * int     arg3 - always 1 (procedure end)
 * Obj     arg4 - the object that is acted upon by this handler (target_obj, can be 0)
 * int     arg5 - the parameter of this call (fixed_param), useful for combat_proc
 * ```
 */
export const HOOK_STDPROCEDURE_END = 41;

/**
 * Runs when the targeting cursor hovers over an object, or when the player tries to attack the target.
 * You can override the target object or prevent the player from attacking the chosen target.
 *
 * ```
 * int     arg0 - event type: 0 - when the targeting cursor hovers over the object, 1 - when trying to attack
 * int     arg1 - 1 when the target object is valid to attack, 0 otherwise
 * Obj     arg2 - the target object
 *
 * mixed   ret0 - overrides the target object, or pass -1 to prevent the player from attacking
 * ```
 */
export const HOOK_TARGETOBJECT = 42;

/**
 * Runs whenever a random encounter occurs on the world map.
 *
 * ```
 * int     arg0 - event type: 0 - encounter happens, 1 - player enters a special encounter map
 * int     arg1 - map ID for special encounters; for random encounters, 0 unless an ID was manually set
 * int     arg2 - 1 if this is a special encounter, 0 otherwise
 * int     arg3 - the encounter table number (from Encounter table in worldmap.txt)
 * int     arg4 - the encounter index in the table (number of the line in Encounter table section)
 *
 * int     ret0 - overrides the map ID for special encounter maps
 * int     ret1 - pass 1 to cancel the encounter and continue traveling
 * ```
 */
export const HOOK_ENCOUNTER = 43;

/**
 * Runs when the player's poison level is changed.
 * NOTE: the hook is not executed for the critter_adjust_poison function.
 *
 * ```
 * Critter arg0 - the critter (always dude_obj)
 * int     arg1 - the amount of poison being added (negative = reducing poison)
 * int     arg2 - the calculated damage value that will be applied to hit points at the end of each day
 *
 * int     ret0 - the new amount of poison
 * int     ret1 - the damage value to apply
 * ```
 */
export const HOOK_ADJUSTPOISON = 44;

/**
 * Runs when the player's radiation level is changed.
 * NOTE: the hook is not executed for the critter_adjust_rads function.
 *
 * ```
 * Critter arg0 - the critter (always dude_obj)
 * int     arg1 - the amount of radiation being added
 *
 * int     ret0 - the new amount of radiation
 * ```
 */
export const HOOK_ADJUSTRADS = 45;

/**
 * Runs when Fallout makes a random roll check for the skills or attacker's weapon in combat.
 *
 * ```
 * int     arg0 - event type:
 *                1 - aass/fail critical skill check (determine_to_hit_func)
 *                2 - check (determine_crit_ranged_attack_to_hit_func)
 *                3 - weapon critical failure check (attack_crit_failure)
 *                4 - weapon critical hit check (attack_crit_success)
 *                5 - skill critical hit check (skill_result)
 *                6 - skill critical miss check (skill_result)
 *                7 - skill check (skill_result)
 * int     arg1 - the roll result (0-100)
 * int     arg2 - the chance of critical hit/miss (0-100)
 * int     arg3 - the bonus value to add to/subtract from the hit chance
 * int     arg4 - the random chance value (1-100)
 *
 * int     ret0 - the new roll result
 * ```
 */
export const HOOK_ROLLCHECK = 46;

/**
 * Runs when AI is choosing the best weapon for an attack.
 *
 * ```
 * Critter arg0 - the critter
 * Item    arg1 - the best weapon chosen by the AI (can be 0 if nothing was chosen)
 * Item    arg2 - the first available weapon (can be 0)
 * Item    arg3 - the second available weapon (can be 0)
 * Critter arg4 - the target of the attack
 *
 * Item    ret0 - overrides the weapon choice (pass 0 to allow no weapon, -1 to skip this return)
 * ```
 */
export const HOOK_BESTWEAPON = 47;

/**
 * Runs when AI checks if a weapon is usable (has enough ammo, in range, etc).
 *
 * ```
 * Critter arg0 - the critter
 * Item    arg1 - the weapon being checked
 * int     arg2 - attack type (see ATKTYPE_* constants)
 * int     arg3 - 1 if the weapon can be used, 0 if it can't
 *
 * int     ret0 - overrides the result: 0 - cannot use, 1 - can use
 * ```
 */
export const HOOK_CANUSEWEAPON = 48;

// RESERVED 49..60

/**
 * Runs before the weapon sound effect is played for an attack.
 *
 * ```
 * int     arg0 - the sound effect type:
 *                0 - generic attack
 *                1 - fire attack
 *                2 - contact/swing/throw attack
 *                3 - reload
 *                4 - out of ammo
 * Item    arg1 - the weapon (can be 0 for unarmed)
 * int     arg2 - attack type (see ATKTYPE_* constants)
 * Critter arg3 - the target (can be 0)
 *
 * String  ret0 - the path to a custom sfx sound file (relative to sound/sfx/)
 * ```
 */
export const HOOK_BUILDSFXWEAPON = 61;

// ============================================================================
// List Types (for list_begin)
// ============================================================================

export const LIST_CRITTERS = 0;
export const LIST_GROUNDITEMS = 1;
export const LIST_SCENERY = 2;
export const LIST_WALLS = 3;
// LIST_TILES (4) not listable via sfall list functions
export const LIST_MISC = 5;
export const LIST_SPATIAL = 6;
export const LIST_ALL = 9;

// ============================================================================
// Window Types (for get_window_attribute)
// ============================================================================

/** Any inventory window (player/loot/use/barter) */
export const WINTYPE_INVENTORY = 0;
export const WINTYPE_DIALOG = 1;
export const WINTYPE_PIPBOY = 2;
export const WINTYPE_WORLDMAP = 3;
/** The interface bar */
export const WINTYPE_IFACEBAR = 4;
export const WINTYPE_CHARACTER = 5;
export const WINTYPE_SKILLDEX = 6;
/** Escape menu */
export const WINTYPE_ESCMENU = 7;
export const WINTYPE_AUTOMAP = 8;

// ============================================================================
// Encounter Flags (for force_encounter_with_flags)
// ============================================================================

export const ENCOUNTER_FLAG_NO_CAR = 0x1;
/** Block new forced encounter until current one occurs */
export const ENCOUNTER_FLAG_LOCK = 0x2;
/** Disable displaying the flashing icon */
export const ENCOUNTER_FLAG_NO_ICON = 0x4;
/** Use special encounter icon */
export const ENCOUNTER_FLAG_ICON_SP = 0x8;
/** Fade out screen on encounter (you must restore fade when entering) */
export const ENCOUNTER_FLAG_FADEOUT = 0x10;

// ============================================================================
// Value Types (for typeof)
// ============================================================================

/** Not used yet */
export const VALTYPE_NONE = 0;
export const VALTYPE_INT = 1;
export const VALTYPE_FLOAT = 2;
export const VALTYPE_STR = 3;

// ============================================================================
// Game Message Types
// ============================================================================

export const GAME_MSG_COMBAT = 0;
export const GAME_MSG_AI = 1;
export const GAME_MSG_SCRNAME = 2;
export const GAME_MSG_MISC = 3;
export const GAME_MSG_CUSTOM = 4;
export const GAME_MSG_INVENTRY = 5;
export const GAME_MSG_ITEM = 6;
export const GAME_MSG_LSGAME = 7;
export const GAME_MSG_MAP = 8;
export const GAME_MSG_OPTIONS = 9;
export const GAME_MSG_PERK = 10;
export const GAME_MSG_PIPBOY = 11;
export const GAME_MSG_QUESTS = 12;
export const GAME_MSG_PROTO = 13;
export const GAME_MSG_SCRIPT = 14;
export const GAME_MSG_SKILL = 15;
export const GAME_MSG_SKILLDEX = 16;
export const GAME_MSG_STAT = 17;
export const GAME_MSG_TRAIT = 18;
export const GAME_MSG_WORLDMAP = 19;
export const GAME_MSG_EDITOR = 20;
export const GAME_MSG_PRO_ITEM = 0x1000;
export const GAME_MSG_PRO_CRIT = 0x1001;
export const GAME_MSG_PRO_SCEN = 0x1002;
export const GAME_MSG_PRO_WALL = 0x1003;
export const GAME_MSG_PRO_TILE = 0x1004;
export const GAME_MSG_PRO_MISC = 0x1005;

// ============================================================================
// Outline Colors
// ============================================================================

export const OUTLINE_NONE = 0;
export const OUTLINE_RED_GLOW = 0x01;
export const OUTLINE_RED = 0x02;
export const OUTLINE_GREY = 0x04;
export const OUTLINE_GREEN_GLOW = 0x08;
export const OUTLINE_YELLOW = 0x10;
export const OUTLINE_DARK_YELLOW = 0x20;
export const OUTLINE_PURPLE = 0x40;

// ============================================================================
// Cursor Types
// ============================================================================

export const CURSOR_MOVEMENT = 0;
export const CURSOR_COMMAND = 1;
export const CURSOR_TARGETING = 2;

// ============================================================================
// Rest Mode Flags (for set_rest_mode)
// ============================================================================

/** Disable resting on all maps */
export const RESTMODE_DISABLED = 1;
/** Disable resting on maps with "can_rest_here=No" in Maps.txt, even if there are no other critters */
export const RESTMODE_STRICT = 2;
/** Disable healing during resting */
export const RESTMODE_NO_HEALING = 4;

// ============================================================================
// Blocking Types
// ============================================================================

export const BLOCKING_TYPE_BLOCK = 0;
/** Use this for more realistic line-of-sight checks */
export const BLOCKING_TYPE_SHOOT = 1;
export const BLOCKING_TYPE_AI = 2;
/** Not really useful (works not as expected), game uses this only when checking if you can talk to a person */
export const BLOCKING_TYPE_SIGHT = 3;

// ============================================================================
// Add Perk Mode Flags (fake perks/traits)
// ============================================================================

/** Add to the player's traits list */
export const ADD_PERK_MODE_TRAIT = 1;
/** Add to the player's perks list */
export const ADD_PERK_MODE_PERK = 2;
/** Remove from the list of selectable perks (after added to the player) */
export const ADD_PERK_MODE_REMOVE = 4;


// ============================================================================
// Array Functions
// ============================================================================


/**
 * Create a persistent list
 * @param size Initial size of the list
 */
export function create_array_list(size: number): any[] {
    return create_array(size, 0);
}

/**
 * Create a temporary list
 * @param size Initial size of the list
 */
export function temp_array_list(size: number): any[] {
    return temp_array(size, 0);
}

/** Create a persistent map */
export function create_array_map(): any[] { return create_array(-1, 0); }

/** Create a temporary map */
export function temp_array_map(): any[] { return temp_array(-1, 0); }

/** Create a persistent lookup map (see arrays.txt for details) */
export function create_lookup_map(): any[] { return create_array(-1, 2); }

/** Create a temporary lookup map */
export function temp_lookup_map(): any[] { return temp_array(-1, 2); }

/**
 * Check if item exists in array
 * @param item Item to search for
 * @param array Array to search in
 */
export function is_in_array(item: any, array: any[]): boolean {
    return scan_array(array, item) != -1;
}

/**
 * Check if array exists
 * @param array Array to check
 */
export function array_exists(array: any[]): boolean {
    return len_array(array) != -1;
}

/**
 * Remove all elements from array
 * @param array Array to clear
 */
export function clear_array(array: any[]): void {
    resize_array(array, 0);
}

/**
 * Sort array or map by key in ascending order
 * @param array Array to sort
 */
export function sort_array(array: any[]): void {
    resize_array(array, -2);
}

/**
 * Sort array or map by key in descending order
 * @param array Array to sort
 */
export function sort_array_reverse(array: any[]): void {
    resize_array(array, -3);
}

/**
 * Reverse elements in list/map
 * @param array Array to reverse
 */
export function reverse_array(array: any[]): void {
    resize_array(array, -4);
}

/**
 * Randomly shuffle elements in list/map
 * @param array Array to shuffle
 */
export function shuffle_array(array: any[]): void {
    resize_array(array, -5);
}

/**
 * Sort map in ascending order by value
 * @param array Map to sort
 */
export function sort_map_value(array: any[]): void {
    resize_array(array, -6);
}

/**
 * Sort map in descending order by value
 * @param array Map to sort
 */
export function sort_map_reverse(array: any[]): void {
    resize_array(array, -7);
}

// ============================================================================
// Explosion Functions
// ============================================================================

/**
 * Set attack explosion pattern
 * @param x X pattern value
 * @param y Y pattern value
 */
export function set_attack_explosion_pattern(x: number, y: number): void {
    metarule2_explosions(1, x, y);
}

/**
 * Set attack explosion art
 * @param x Art X value
 * @param y Art Y value
 */
export function set_attack_explosion_art(x: number, y: number): void {
    metarule2_explosions(2, x, y);
}

/**
 * Set attack explosion radius
 * @param radius Explosion radius
 */
export function set_attack_explosion_radius(radius: number): void {
    metarule2_explosions(3, radius, 0);
}

/**
 * Set attack is explosion
 * @param damageType Damage type for explosion
 * @inline
 */
export function set_attack_is_explosion(damageType: number): void {
    metarule2_explosions(4, damageType, 0);
}

/**
 * Set attack is fire explosion
 * @inline
 */
export function set_attack_is_explosion_fire(): void {
    set_attack_is_explosion(DMG_fire);
}

/**
 * Set explosion radius for grenades and rockets
 * @param grenade Grenade explosion radius
 * @param rocket Rocket explosion radius
 */
export function set_explosion_radius(grenade: number, rocket: number): void {
    metarule2_explosions(5, grenade, rocket);
}

/**
 * Get explosion damage for item
 * @param itemPid Item prototype ID
 * @returns Explosion damage
 */
export function get_explosion_damage(itemPid: number): number {
    return metarule2_explosions(6, itemPid, 0);
}

/**
 * Set dynamite damage range
 * @param minDmg Minimum damage
 * @param maxDmg Maximum damage
 */
export function set_dynamite_damage(minDmg: number, maxDmg: number): void {
    metarule2_explosions(7, minDmg, maxDmg);
}

/**
 * Set plastic explosive damage range
 * @param minDmg Minimum damage
 * @param maxDmg Maximum damage
 */
export function set_plastic_damage(minDmg: number, maxDmg: number): void {
    metarule2_explosions(8, minDmg, maxDmg);
}

/**
 * Set maximum explosion targets
 * @param maxTargets Maximum number of targets
 */
export function set_explosion_max_targets(maxTargets: number): void {
    metarule2_explosions(9, maxTargets, 0);
}

// ============================================================================
// Sfall Function Wrappers
// ============================================================================

/**
 * Get critter inventory object in extended slot
 * @param critter Critter object
 * @param slot Inventory slot type
 * @returns Object in slot
 * @inline
 */
export function critter_inven_obj2(critter: number, slot: number): ItemPtr {
    // Cast: sfall_func2 returns any, we know this returns an item pointer
    return sfall_func2("critter_inven_obj2", critter, slot) as ItemPtr;
}

/**
 * Get sfall hook argument at index
 * @param index Argument index
 * @returns Argument value
 * @inline
 */
export function get_sfall_arg_at(index: number): number {
    return sfall_func1("get_sfall_arg_at", index);
}

/**
 * Set interface tag text
 * @param tag Tag number
 * @param text Text to display
 * @param color Text color
 * @inline
 */
export function set_iface_tag_text(tag: IfaceTag, text: string, color: number): void {
    sfall_func3("set_iface_tag_text", tag, text, color);
}


/**
 * Get object flags
 * @param obj Object to get flags from
 * @returns Object flags
 * @inline
 */
export function get_flags(obj: number): number {
    return sfall_func1("get_flags", obj);
}

/**
 * Set object flags
 * @param obj Object to set flags on
 * @param flags Flags to set
 * @inline
 */
export function set_flags(obj: number, flags: number): void {
    sfall_func2("set_flags", obj, flags);
}

/**
 * Get object outline color
 * @param obj Object to get outline from
 * @returns Outline color
 * @inline
 */
export function get_outline(obj: number): number {
    return sfall_func1("get_outline", obj);
}

/**
 * Set object outline color
 * @param obj Object to set outline on
 * @param color Outline color (use OUTLINE_* constants)
 * @inline
 */
export function set_outline(obj: number, color: number): void {
    sfall_func2("set_outline", obj, color);
}

/**
 * Get object data at offset
 * @param obj Object to read from
 * @param offset Data offset (use OBJ_DATA_* constants)
 * @returns Data value
 * @inline
 */
export function get_object_data(obj: number, offset: number): number {
    return sfall_func2("get_object_data", obj, offset);
}

/**
 * Set object data at offset
 * @param obj Object to write to
 * @param offset Data offset (use OBJ_DATA_* constants)
 * @param value Value to set
 * @inline
 */
export function set_object_data(obj: number, offset: number, value: number): void {
    sfall_func3("set_object_data", obj, offset, value);
}

/**
 * Get current cursor mode
 * @returns Cursor mode (use CURSOR_* constants)
 * @inline
 */
export function get_cursor_mode(): number {
    return sfall_func0("get_cursor_mode");
}

/**
 * Set cursor mode
 * @param mode Cursor mode (use CURSOR_* constants)
 * @inline
 */
export function set_cursor_mode(mode: number): void {
    sfall_func1("set_cursor_mode", mode);
}

/**
 * Refresh tile display
 * @inline
 */
export function tile_refresh_display(): void {
    sfall_func0("tile_refresh_display");
}

/**
 * Get object under cursor
 * @param onlyCritter Only return critters
 * @param includeDude Include dude in results
 * @returns Object under cursor
 * @inline
 */
export function obj_under_cursor(onlyCritter: boolean, includeDude: boolean): ObjectPtr {
    return sfall_func2("obj_under_cursor", onlyCritter, includeDude);
}

/**
 * Get the real dude object (useful when controlling other critters)
 * @returns Real dude object
 * @inline
 */
export function real_dude_obj(): number {
    return sfall_func0("real_dude_obj");
}

/**
 * Set the controlled critter (dude object)
 * @param critter Critter to control
 * @inline
 */
export function set_dude_obj(critter: number): void {
    sfall_func1("set_dude_obj", critter);
}

/**
 * Get the current dialog object
 * @returns Dialog object
 * @inline
 */
export function dialog_obj(): number {
    return sfall_func0("dialog_obj");
}

/**
 * Get the current loot target object
 * @returns Loot object
 * @inline
 */
export function loot_obj(): number {
    return sfall_func0("loot_obj");
}

/**
 * Get combat data structure
 * @returns Combat data
 * @inline
 */
export function combat_data(): number {
    return sfall_func0("combat_data");
}

/**
 * Get combat free move value
 * @returns Free move value
 * @inline
 */
export function get_combat_free_move(): number {
    return sfall_func0("get_combat_free_move");
}

/**
 * Set combat free move value
 * @param value Free move value
 * @inline
 */
export function set_combat_free_move(value: number): void {
    sfall_func1("set_combat_free_move", value);
}

/**
 * Check if current attack is aimed
 * @returns True if attack is aimed
 * @inline
 */
export function attack_is_aimed(): boolean {
    return sfall_func0("attack_is_aimed");
}

/**
 * Get current inventory size
 * @param obj Object to check
 * @returns Current inventory size
 * @inline
 */
export function get_current_inven_size(obj: number): number {
    return sfall_func1("get_current_inven_size", obj);
}

/**
 * Get item weight
 * @param obj Item object
 * @returns Item weight
 * @inline
 */
export function item_weight(obj: number): number {
    return sfall_func1("item_weight", obj);
}

/**
 * Check if object is openable
 * @param obj Object to check
 * @returns True if openable
 * @inline
 */
export function obj_is_openable(obj: number): boolean {
    return sfall_func1("obj_is_openable", obj);
}

/**
 * Check if lock is jammed
 * @param obj Lock object
 * @returns True if jammed
 * @inline
 */
export function lock_is_jammed(obj: number): boolean {
    return sfall_func1("lock_is_jammed", obj);
}

/**
 * Unjam a lock
 * @param obj Lock object
 * @inline
 */
export function unjam_lock(obj: number): void {
    sfall_func1("unjam_lock", obj);
}

/**
 * Get spatial script radius
 * @param obj Spatial object
 * @returns Radius
 * @inline
 */
export function spatial_radius(obj: number): number {
    return sfall_func1("spatial_radius", obj);
}

/**
 * Get text width in pixels
 * @param text Text to measure
 * @returns Width in pixels
 * @inline
 */
export function get_text_width(text: string): number {
    return sfall_func1("get_text_width", text);
}

/**
 * Compare two strings
 * @param str1 First string
 * @param str2 Second string
 * @returns Comparison result (-1, 0, 1)
 * @inline
 */
export function string_compare(str1: string, str2: string): number {
    return sfall_func2("string_compare", str1, str2);
}

/**
 * Find substring in string
 * @param haystack String to search in
 * @param needle String to find
 * @returns Position of needle or -1 if not found
 * @inline
 */
export function string_find(haystack: string, needle: string): number {
    return sfall_func2("string_find", haystack, needle);
}

/**
 * Convert string to lowercase
 * @param text Text to convert
 * @returns Lowercase text
 * @inline
 */
export function string_tolower(text: string): string {
    return sfall_func2("string_to_case", text, 0);
}

/**
 * Convert string to uppercase
 * @param text Text to convert
 * @returns Uppercase text
 * @inline
 */
export function string_toupper(text: string): string {
    return sfall_func2("string_to_case", text, 1);
}

/**
 * Floor function that handles negative numbers correctly
 * @param value Value to floor
 * @returns Floored value
 * @inline
 */
export function floor2(value: number): number {
    return sfall_func1("floor2", value);
}

/**
 * Get car gas amount
 * @returns Gas amount
 * @inline
 */
export function car_gas_amount(): number {
    return sfall_func0("car_gas_amount");
}

/**
 * Add a new interface tag
 * @returns New tag number
 * @inline
 */
export function add_iface_tag(): IfaceTag {
    return sfall_func0("add_iface_tag") as IfaceTag;
}

/**
 * Hide the main interface bar
 * @inline
 */
export function intface_hide(): void {
    sfall_func0("intface_hide");
}

/**
 * Show the main interface bar
 * @inline
 */
export function intface_show(): void {
    sfall_func0("intface_show");
}

/**
 * Redraw the main interface bar
 * @inline
 */
export function intface_redraw(): void {
    sfall_func0("intface_redraw");
}

/**
 * Check if interface bar is hidden
 * @returns True if hidden
 * @inline
 */
export function intface_is_hidden(): boolean {
    return sfall_func0("intface_is_hidden");
}

/**
 * Redraw the stats display
 * @inline
 */
export function display_stats(): void {
    sfall_func0("display_stats");
}


/**
 * Remove a timer event
 * @param fixedParam Fixed parameter used when creating the event
 * @inline
 */
export function remove_timer_event(fixedParam: number): void {
    sfall_func1("remove_timer_event", fixedParam);
}

/**
 * Remove all timer events
 * @inline
 */
export function remove_all_timer_events(): void {
    sfall_func0("remove_timer_event");
}

/**
 * Add a global timer event
 * @param time Time until event fires
 * @param fixedParam Fixed parameter passed to handler
 * @inline
 */
export function add_global_timer_event(time: number, fixedParam: number): void {
    sfall_func2("add_g_timer_event", time, fixedParam);
}

/**
 * Get all objects within radius
 * @param tile Center tile
 * @param radius Search radius
 * @param elev Elevation
 * @param type Object type (use LIST_* constants)
 * @returns Array of objects
 * @inline
 */
export function objects_in_radius(tile: number, radius: number, elev: number, type: number): any[] {
    return sfall_func4("objects_in_radius", tile, radius, elev, type);
}

/**
 * Get tile number from screen position
 * @param x Screen X coordinate
 * @param y Screen Y coordinate
 * @returns Tile number
 * @inline
 */
export function tile_by_position(x: number, y: number): number {
    return sfall_func2("tile_by_position", x, y);
}

/**
 * Get currently outlined object
 * @returns Outlined object
 * @inline
 */
export function outlined_object(): number {
    return sfall_func0("outlined_object");
}

/**
 * Clear the art cache
 * @inline
 */
export function art_cache_clear(): void {
    sfall_func0("art_cache_clear");
}

/**
 * Execute map update scripts
 * @inline
 */
export function exec_map_update_scripts(): void {
    sfall_func0("exec_map_update_scripts");
}

/**
 * Set rest mode flags
 * @param mode Rest mode flags (use RESTMODE_* constants)
 * @inline
 */
export function set_rest_mode(mode: number): void {
    sfall_func1("set_rest_mode", mode);
}

/**
 * Set rest heal time
 * @param time Heal time
 * @inline
 */
export function set_rest_heal_time(time: number): void {
    sfall_func1("set_rest_heal_time", time);
}

/**
 * Signal the game to close
 * @inline
 */
export function signal_close_game(): void {
    sfall_func0("signal_close_game");
}

/**
 * Toggle NPC engine level up
 * @param toggle Enable/disable
 * @inline
 */
export function npc_engine_level_up(toggle: number): void {
    sfall_func1("npc_engine_level_up", toggle);
}

/**
 * Get object AI data
 * @param obj Critter object
 * @param aiParam AI parameter (use AI_CAP_* constants)
 * @returns AI data value
 * @inline
 */
export function get_object_ai_data(obj: number, aiParam: number): number {
    return sfall_func2("get_object_ai_data", obj, aiParam);
}

/**
 * Unwield item from slot
 * @param critter Critter object
 * @param slot Slot to unwield from
 * @inline
 */
export function unwield_slot(critter: number, slot: number): void {
    sfall_func2("unwield_slot", critter, slot);
}

/**
 * Get INI file section as array
 * @param file INI file path
 * @param sect Section name
 * @returns Section data as array
 * @inline
 */
export function get_ini_section(file: string, sect: string): any {
    return sfall_func2("get_ini_section", file, sect);
}

/**
 * Get list of INI file sections
 * @param file INI file path
 * @returns Array of section names
 * @inline
 */
export function get_ini_sections(file: string): any[] {
    return sfall_func1("get_ini_sections", file);
}

/**
 * Set INI setting value
 * @param setting Setting path (file|section|key)
 * @param value Value to set
 * @inline
 */
export function set_ini_setting(setting: string, value: any): void {
    sfall_func2("set_ini_setting", setting, value);
}

/**
 * Add a trait to the player
 * @param traitID Trait ID
 * @inline
 */
export function add_trait(traitID: number): void {
    sfall_func1("add_trait", traitID);
}

/**
 * Check if NPC has fake perk
 * @param npc NPC object
 * @param perk Perk ID
 * @returns True if NPC has perk
 * @inline
 */
export function has_fake_perk_npc(npc: number, perk: number): boolean {
    return sfall_func2("has_fake_perk_npc", npc, perk);
}

/**
 * Check if NPC has fake trait
 * @param npc NPC object
 * @param trait Trait ID
 * @returns True if NPC has trait
 * @inline
 */
export function has_fake_trait_npc(npc: number, trait: number): boolean {
    return sfall_func2("has_fake_trait_npc", npc, trait);
}

/**
 * Set fake perk for NPC
 * @param npc NPC object
 * @param perk Perk ID
 * @param level Perk level
 * @param image Image ID
 * @param desc Description
 * @inline
 */
export function set_fake_perk_npc(npc: number, perk: number, level: number, image: number, desc: string): void {
    sfall_func5("set_fake_perk_npc", npc, perk, level, image, desc);
}

/**
 * Set fake trait for NPC
 * @param npc NPC object
 * @param trait Trait ID
 * @param active Active state
 * @param image Image ID
 * @param desc Description
 * @inline
 */
export function set_fake_trait_npc(npc: number, trait: number, active: number, image: number, desc: string): void {
    sfall_func5("set_fake_trait_npc", npc, trait, active, image, desc);
}

/**
 * Loads a custom message file and returns the file ID number for message_str_game
 * @param fileName The name of the message file (including .msg extension) in text/<language>/game/
 * @returns File ID number in range 0x3000-0x3FFF
 * @inline
 */
export function add_extra_msg_file(fileName: string): number {
    return sfall_func1("add_extra_msg_file", fileName);
}

// ============================================================================
// Art and Graphics Wrappers
// ============================================================================

/**
 * Returns the dimensions of a given PCX or FRM frame as a temp array in the form [width, height].
 * @param art - path to the PCX/FRM file (e.g. `art\\inven\\5mmap.frm`), or its FRM ID number
 * @param frame - frame number, the first frame starts from zero
 * @param rot - rotation to get the frame for, useful when reading FRM files by path
 * @inline
 */
export function art_frame_data(art: number, frame: number, rot: number): any {
    return sfall_func3("art_frame_data", art, frame, rot);
}

/**
 * Displays the specified PCX or FRM image in the active window created by CreateWin or sfall's create_win.
 * @param artFile - path to the PCX/FRM file (e.g. `art\\inven\\5mmap.frm`), or its FRM ID number
 * @param frame - frame number, the first frame starts from zero
 * @param x - offset relative to the top-left corner of the window
 * @param y - offset relative to the top-left corner of the window
 * @param noTrans - pass true to display an image without transparent background
 * @inline
 */
export function draw_image(artFile: string, frame: number, x: number, y: number, noTrans: boolean): void {
    sfall_func5("draw_image", artFile, frame, x, y, noTrans);
}

/**
 * Displays the specified PCX or FRM image scaled to the given dimensions.
 * @param artFile - path to the PCX/FRM file, or its FRM ID number
 * @param frame - frame number, the first frame starts from zero
 * @param x - offset relative to the top-left corner of the window
 * @param y - offset relative to the top-left corner of the window
 * @param w - width to scale the image to. Pass -1 to keep aspect ratio
 * @param h - height to scale the image to. Pass -1 to keep aspect ratio
 * @inline
 */
export function draw_image_scaled(artFile: string, frame: number, x: number, y: number, w: number, h: number): void {
    sfall_func6("draw_image_scaled", artFile, frame, x, y, w, h);
}

// ============================================================================
// Window and Interface Wrappers
// ============================================================================

/**
 * Creates a window with MoveOnTop flag. Works like vanilla CreateWin but allows the window to be placed on top of the game interface.
 * @inline
 */
export function create_win(winName: string, x: number, y: number, w: number, h: number): number {
    return sfall_func5("create_win", winName, x, y, w, h);
}

/**
 * Creates a window with specified flags. Works like vanilla CreateWin but allows setting additional flags.
 * @param flag - window flags (MoveOnTop flag allows the window to be placed on top of the game interface)
 * @inline
 */
export function create_win_flag(winName: string, x: number, y: number, w: number, h: number, flag: number): number {
    return sfall_func6("create_win", winName, x, y, w, h, flag);
}

/**
 * Fills the rectangle area of the currently selected script window with the specified color, or clears with transparent color if called without arguments.
 * @param color - the color index in the game palette (from 0 to 255)
 * @inline
 */
export function win_fill_color(x: number, y: number, width: number, height: number, color: number): void {
    sfall_func5("win_fill_color", x, y, width, height, color);
}

/**
 * Draws the specified PCX or FRM art in the specified interface window.
 * @param winID - the type number of the interface window (see WINTYPE_* constants in sfall.h)
 * @param artFile - path to the PCX/FRM file, or its FRM ID number
 * @param x - offset relative to the top-left corner of the window
 * @param y - offset relative to the top-left corner of the window
 * @inline
 */
export function interface_art_draw(winID: number, artFile: string, x: number, y: number): void {
    sfall_func4("interface_art_draw", winID, artFile, x, y);
}

/**
 * Displays text in the specified interface window with the current font.
 * @param text - the text to print. Use `\n` for new lines
 * @param winType - the type number of the interface window (see WINTYPE_* constants)
 * @param x - offset relative to the top-left corner of the window
 * @param y - offset relative to the top-left corner of the window
 * @param color - color index in the game palette. Can include flags: 0x10000 (shadow), 0x1000000 (no direct redraw), 0x2000000 (black background)
 * @inline
 */
export function interface_print(text: string, winType: number, x: number, y: number, color: number): void {
    sfall_func5("interface_print", text, winType, x, y, color);
}

/**
 * Redraws inventory items list in the inventory/loot/barter screens.
 * @param invSide - which side to redraw: 0 = player, 1 = target (container/NPC), -1 = both sides
 * @inline
 */
export function inventory_redraw(invSide: number): void {
    sfall_func1("inventory_redraw", invSide);
}

/**
 * Changes the specified flag for a script or game interface window.
 * @param winID - the window ID or 0 for current game interface
 * @param flag - the flag to change (see WIN_FLAG_* constants)
 * @param value - 1 to set the flag, 0 to unset
 * @inline
 */
export function set_window_flag(winID: number, flag: number, value: number): void {
    sfall_func3("set_window_flag", winID, flag, value);
}

// ============================================================================
// Dialog and Message Box Wrappers
// ============================================================================

/**
 * Displays a message in the NPC response window in dialog or barter screen.
 * @inline
 */
export function dialog_message(text: string): void {
    sfall_func1("dialog_message", text);
}

/**
 * Creates a dialog box with text. Returns 0 (No/Escape), 1 (Yes/Enter), or -1 on error.
 * @param text - the message text. Use `\n` for new lines
 * @inline
 */
export function message_box1(text: string): number {
    return sfall_func1("message_box", text);
}

/**
 * Creates a dialog box with text and flags. Returns 0 (No/Escape), 1 (Yes/Enter), or -1 on error.
 * @param text - the message text. Use `\n` for new lines
 * @param flags - mode flags (see MSGBOX_* constants). Pass -1 to use defaults (NORMAL and YESNO)
 * @inline
 */
export function message_box2(text: string, flags: number): number {
    return sfall_func2("message_box", text, flags);
}

/**
 * Creates a dialog box with text, flags, and first line color. Returns 0 (No/Escape), 1 (Yes/Enter), or -1 on error.
 * @param text - the message text. Use `\n` for new lines
 * @param flags - mode flags (see MSGBOX_* constants). Pass -1 to use defaults
 * @param color1 - color index for the first line of text (default 145)
 * @inline
 */
export function message_box3(text: string, flags: number, color1: number): number {
    return sfall_func3("message_box", text, flags, color1);
}

/**
 * Creates a dialog box with text, flags, and colors. Returns 0 (No/Escape), 1 (Yes/Enter), or -1 on error.
 * @param text - the message text. Use `\n` for new lines
 * @param flags - mode flags (see MSGBOX_* constants). Pass -1 to use defaults
 * @param color1 - color index for the first line of text (default 145)
 * @param color2 - color index for subsequent lines (default 145)
 * @inline
 */
export function message_box4(text: string, flags: number, color1: number, color2: number): number {
    return sfall_func4("message_box", text, flags, color1, color2);
}

// ============================================================================
// String Format Wrappers
// ============================================================================

/**
 * Formats values using C printf syntax. Format string limited to 1024 characters.
 * @inline
 */
export function string_format1(fmt: string, a1: any): string {
    return sfall_func2("string_format", fmt, a1);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format2(fmt: string, a1: any, a2: any): string {
    return sfall_func3("string_format", fmt, a1, a2);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format3(fmt: string, a1: any, a2: any, a3: any): string {
    return sfall_func4("string_format", fmt, a1, a2, a3);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format4(fmt: string, a1: any, a2: any, a3: any, a4: any): string {
    return sfall_func5("string_format", fmt, a1, a2, a3, a4);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format5(fmt: string, a1: any, a2: any, a3: any, a4: any, a5: any): string {
    return sfall_func6("string_format", fmt, a1, a2, a3, a4, a5);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format6(fmt: string, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any): string {
    return sfall_func7("string_format", fmt, a1, a2, a3, a4, a5, a6);
}

/**
 * Formats values using C printf syntax (max 7 values).
 * @inline
 */
export function string_format7(fmt: string, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any): string {
    return sfall_func8("string_format", fmt, a1, a2, a3, a4, a5, a6, a7);
}

/**
 * Like string_find but starts search from the specified position.
 * @param pos - start position. Negative values count from end of string
 * @inline
 */
export function string_find_from(haystack: string, needle: string, pos: number): number {
    return sfall_func3("string_find", haystack, needle, pos);
}

// ============================================================================
// Map and Terrain Wrappers
// ============================================================================

/**
 * Returns the set rest value of the map. Returns -1 if not previously set.
 * @param map - map index from maps.txt
 * @param elev - elevation
 * @inline
 */
export function get_can_rest_on_map(map: number, elev: number): number {
    return sfall_func2("get_can_rest_on_map", map, elev);
}

/**
 * Allows/disallows resting on the map, overrides can_rest_here from maps.txt.
 * @param map - map index from maps.txt
 * @param elev - elevation, or -1 for all elevations
 * @param value - rest value to set
 * @inline
 */
export function set_can_rest_on_map(map: number, elev: number, value: number): void {
    sfall_func3("set_can_rest_on_map", map, elev, value);
}

/**
 * Returns the terrain type name for the sub-tile on the world map by coordinates.
 * @inline
 */
export function get_terrain_name(x: number, y: number): string {
    return sfall_func2("get_terrain_name", x, y);
}

/**
 * Overrides the terrain type name for the sub-tile on the world map.
 * @inline
 */
export function set_terrain_name(x: number, y: number, name: string): void {
    sfall_func3("set_terrain_name", x, y, name);
}

/**
 * Overrides the player's entry position when entering via exit grids. Works only in map_enter_p_proc.
 * @param tile - tile number, or 0 for start hex
 * @inline
 */
export function set_map_enter_position(tile: number, elev: number, rot: number): void {
    sfall_func3("set_map_enter_position", tile, elev, rot);
}

/**
 * Sets the time interval in minutes for healing during world map travel. Default is 180.
 * @param time - minutes between heals. 0 = 1 second real time, -1 = disable healing
 * @inline
 */
export function set_worldmap_heal_time(time: number): void {
    sfall_func1("set_worldmap_heal_time", time);
}

// ============================================================================
// Tile FID Wrappers
// ============================================================================

/**
 * Returns FID information about the square under the given tile.
 * @param mode - 0 = ground FID, 1 = roof FID, 2 = raw data
 * @inline
 */
export function get_tile_fid_ext(tile: number, elev: number, mode: number): number {
    return get_tile_fid(((mode & 0xF) * 0x10000000) | ((elev & 0xF) * 0x1000000) | (tile & 0xFFFFFF));
}

/**
 * Returns FID of a ground tile at given tile number and elevation.
 * @inline
 */
export function get_tile_ground_fid(tile: number, elev: number): number {
    return get_tile_fid_ext(tile, elev, 0);
}

/**
 * Returns FID of a roof tile at given tile number and elevation. Note that FID of 1 is used when there is no actual roof.
 * @inline
 */
export function get_tile_roof_fid(tile: number, elev: number): number {
    return get_tile_fid_ext(tile, elev, 1);
}

// ============================================================================
// INI Config Wrappers
// ============================================================================

/**
 * Loads an INI file and returns a permanent array (map) where keys are section names and values are sub-arrays.
 * Subsequent calls for the same file return the same array unless disposed with free_array.
 * @inline
 */
export function get_ini_config(file: string): any {
    return sfall_func2("get_ini_config", file, 0);
}

/**
 * Like get_ini_config but searches in DAT files first, then regular file system.
 * @inline
 */
export function get_ini_config_db(file: string): any {
    return sfall_func2("get_ini_config", file, 1);
}

// ============================================================================
// Stat Wrappers
// ============================================================================

/**
 * Get PC stat maximum.
 * @inline
 */
export function get_pc_stat_max(stat: number): number {
    return sfall_func1("get_stat_max", stat);
}

/**
 * Get PC stat minimum.
 * @inline
 */
export function get_pc_stat_min(stat: number): number {
    return sfall_func1("get_stat_min", stat);
}

// ============================================================================
// Item and Object Wrappers
// ============================================================================

/**
 * Makes the specified item (pid) an explosive item like Dynamite or Plastic Explosives.
 * @param pid - the item proto ID
 * @param activePid - pid for an item with an active timer, can be same as pid
 * @param min - minimum explosion damage
 * @param max - maximum explosion damage (optional)
 * NOTE: this function does not work for pids of Dynamite and Plastic Explosives
 * @inline
 */
export function item_make_explosive(pid: number, activePid: number, min: number, max: number): void {
    sfall_func4("item_make_explosive", pid, activePid, min, max);
}

/**
 * Assigns a unique ID number to the object and returns it. Items with unique IDs won't stack.
 * If already assigned, returns existing ID. Use get_object_data(obj, OBJ_DATA_ID) to just get the ID.
 * @inline
 */
export function set_unique_id(obj: ObjectPtr): number {
    return sfall_func1("set_unique_id", obj);
}

/**
 * Overrides the name of the script object from scrname.msg. Resets when leaving map or reloading.
 * Pass empty string to use name from pro_*.msg files instead.
 * @inline
 */
export function set_scr_name(name: string): void {
    sfall_func1("set_scr_name", name);
}

// ============================================================================
// Animation Wrappers
// ============================================================================

/**
 * Plays the specified animation while simultaneously moving the object to the given tile.
 * @param delay - delay from the previous animation. A value of -1 will execute the specified animation immediately after the previous one in the sequence ends.
 * @inline
 */
export function reg_anim_animate_and_move(obj: ObjectPtr, tile: number, animID: number, delay: number): void {
    sfall_func4("reg_anim_animate_and_move", obj, tile, animID, delay);
}

// ============================================================================
// Combat and Quest Wrappers
// ============================================================================

/**
 * Changes burst attack bullet distribution. Resets to defaults after each attack.
 * Should be called before bullet distribution calc (e.g. in HOOK_TOHIT or HOOK_AMMOCOST).
 * @param ctrMult - center multiplier (capped at ctrDiv)
 * @param ctrDiv - center divisor (minimum 1)
 * @param tgtMult - target multiplier (capped at tgtDiv)
 * @param tgtDiv - target divisor (minimum 1)
 * @inline
 */
export function set_spray_settings(ctrMult: number, ctrDiv: number, tgtMult: number, tgtDiv: number): void {
    sfall_func4("set_spray_settings", ctrMult, ctrDiv, tgtMult, tgtDiv);
}

/**
 * Sets the threshold value at which a quest is considered failed (crossed out red in pipboy).
 * @param gvar - the global variable number controlling the quest
 * @param threshold - the value at which the quest is counted as failure
 * @inline
 */
export function set_quest_failure_value(gvar: number, threshold: number): void {
    sfall_func2("set_quest_failure_value", gvar, threshold);
}

// ============================================================================
// Miscellaneous Wrappers
// ============================================================================

/**
 * Changes the interface art (index in intrface.lst) for the car image on the world map interface.
 * Should be called before going to the world map. Vanilla art index is 433.
 * @inline
 */
export function set_car_intface_art(artIndex: number): void {
    sfall_func1("set_car_intface_art", artIndex);
}

/**
 * Overrides drug parameters from DrugsFile config.
 * @param type - 0 = NumEffects, 1 = addiction duration (1 = one game minute)
 * @inline
 */
export function set_drugs_data(type: number, pid: number, value: number): void {
    sfall_func3("set_drugs_data", type, pid, value);
}

/**
 * Sets floating text for a town on the world map when hovering over player's marker.
 * @param areaID - town ID from city.txt
 * @inline
 */
export function set_town_title(areaID: number, title: string): void {
    sfall_func2("set_town_title", areaID, title);
}

/**
 * Sets hours until jammed locks auto-unjam when player leaves map (up to 127).
 * Also disables midnight auto-unjam. Pass 0 to disable completely. Resets on reload.
 * @inline
 */
export function set_unjam_locks_time(time: number): void {
    sfall_func1("set_unjam_locks_time", time);
}

/**
 * Returns true if the specified sfall_funcX metarule exists in the current sfall version.
 * @inline
 */
export function metarule_exist(metaruleName: string): boolean {
    return sfall_func1("metarule_exist", metaruleName);
}

/**
 * Like set_selectable_perk but applies to specified party member NPC (including dude_obj).
 * @inline
 */
export function set_selectable_perk_npc(npc: ObjectPtr, perk: number, active: number, image: number, desc: string): void {
    sfall_func5("set_selectable_perk_npc", npc, perk, active, image, desc);
}

// ============================================================================
// Metarule3 Wrappers
// ============================================================================

/**
 * Set Horrigan encounter days (1-127) or disable (0)
 * @param day Number of days (0 to disable)
 */
export function set_horrigan_days(day: number): void {
    metarule3(200, day, 0, 0);
}

/**
 * Clear keyboard input buffer
 * Use in HOOK_KEYPRESS to clear events before calling functions waiting for keyboard input
 */
export function clear_keyboard_buffer(): void {
    metarule3(201, 0, 0, 0);
}

/**
 * Get current save slot (page + slot)
 * Note: slot value is 0-indexed instead of 1-indexed displayed in game
 * @returns Current save slot
 */
export function get_current_save_slot(): number {
    return metarule3(210, 0, 0, 0);
}

/**
 * Set current save slot
 * Note: slot value is 0-indexed instead of 1-indexed displayed in game
 * @param page Save page
 * @param slot Save slot
 */
export function set_current_save_slot(page: number, slot: number): void {
    metarule3(211, page, slot, 0);
}

// ============================================================================
// Wrappers for sfall.d native functions
// ============================================================================
import { len_array, party_member_list, array_key, set_array, message_str_game } from "./sfall.d";

/** Check if array is a map (associative array) */
export function array_is_map(array: any[]): boolean {
    return array_key(array, -1) == 1;
}

/** Remove key from array (sets value to 0) */
export function unset_array(array: any[], key: any): void {
    set_array(array, key, 0);
}

/** Get list of party member critters (returns array for iteration) */
export function party_member_list_critters(): CritterPtr[] {
    // Cast: party_member_list returns temp array, we know elements are critter pointers
    return party_member_list(false) as unknown as CritterPtr[];
}

/** Get list of all party members */
export function party_member_list_all(): ObjectPtr[] {
    return party_member_list(true);
}

/**
 * Get skill name from game messages
 * @inline
 */
export function mstr_skill(msgNum: number): string {
    return message_str_game(GAME_MSG_SKILL, msgNum);
}

/**
 * Get skilldex message from game messages
 * @inline
 */
export function mstr_skilldex(msgNum: number): string {
    return message_str_game(GAME_MSG_SKILLDEX, msgNum);
}
