/**
 * Sfall scripting extensions for Fallout 2
 * Converted from headers/sfall/sfall.h
 */
import type { ObjectPtr } from "../index";
export * from "./define_extra";

// Import engine functions for wrappers
import {
    sfall_func0, sfall_func1, sfall_func2, sfall_func3, sfall_func4, sfall_func5, sfall_func6, sfall_func7, sfall_func8,
    scan_array, create_array, temp_array, metarule3, resize_array, metarule2_explosions, get_tile_fid
} from "./sfall.d";
import { OBJ_DATA_CUR_ACTION_POINT } from "./define_extra";
import { DMG_fire } from "./define_lite";

// ============================================================================
// Game Modes (for set_shader_mode and get_game_mode)
// ============================================================================

/** World map mode */
export const WORLDMAP = 0x1;
/** Local map mode (always 1 when scripts run) */
export const LOCALMAP = 0x2;
/** Dialog mode */
export const DIALOG = 0x4;
/** Escape menu mode */
export const ESCMENU = 0x8;
/** Save game mode */
export const SAVEGAME = 0x10;
/** Load game mode */
export const LOADGAME = 0x20;
/** Combat mode */
export const COMBAT = 0x40;
/** Options menu mode */
export const OPTIONS = 0x80;
/** Help screen mode */
export const HELP = 0x100;
/** Character screen mode */
export const CHARSCREEN = 0x200;
/** Pipboy mode */
export const PIPBOY = 0x400;
/** Player combat mode */
export const PCOMBAT = 0x800;
/** Inventory mode */
export const INVENTORY = 0x1000;
/** Automap mode */
export const AUTOMAP = 0x2000;
/** Skilldex mode */
export const SKILLDEX = 0x4000;
/** Interface use mode */
export const INTFACEUSE = 0x8000;
/** Interface loot mode */
export const INTFACELOOT = 0x10000;
/** Barter mode */
export const BARTER = 0x20000;
/** Hero window mode */
export const HEROWIN = 0x40000;
/** Dialog view mode */
export const DIALOGVIEW = 0x80000;
/** Counter window for moving multiple items or setting a timer */
export const COUNTERWIN = 0x100000;
/** Ctrl+P pause window */
export const PAUSEWIN = 0x200000;
/** Special mode */
export const SPECIAL = 0x80000000;

// ============================================================================
// Hook Types (for register_hook_proc)
// ============================================================================

export const HOOK_TOHIT = 0;
export const HOOK_AFTERHITROLL = 1;
export const HOOK_CALCAPCOST = 2;
export const HOOK_DEATHANIM1 = 3;
export const HOOK_DEATHANIM2 = 4;
export const HOOK_COMBATDAMAGE = 5;
export const HOOK_ONDEATH = 6;
export const HOOK_FINDTARGET = 7;
export const HOOK_USEOBJON = 8;
export const HOOK_REMOVEINVENOBJ = 9;
export const HOOK_BARTERPRICE = 10;
export const HOOK_MOVECOST = 11;
export const HOOK_HEXMOVEBLOCKING = 12;
export const HOOK_HEXAIBLOCKING = 13;
export const HOOK_HEXSHOOTBLOCKING = 14;
export const HOOK_HEXSIGHTBLOCKING = 15;
export const HOOK_ITEMDAMAGE = 16;
export const HOOK_AMMOCOST = 17;
export const HOOK_USEOBJ = 18;
export const HOOK_KEYPRESS = 19;
export const HOOK_MOUSECLICK = 20;
export const HOOK_USESKILL = 21;
export const HOOK_STEAL = 22;
export const HOOK_WITHINPERCEPTION = 23;
export const HOOK_INVENTORYMOVE = 24;
export const HOOK_INVENWIELD = 25;
export const HOOK_ADJUSTFID = 26;
export const HOOK_COMBATTURN = 27;
export const HOOK_CARTRAVEL = 28;
export const HOOK_SETGLOBALVAR = 29;
export const HOOK_RESTTIMER = 30;
export const HOOK_GAMEMODECHANGE = 31;
export const HOOK_USEANIMOBJ = 32;
export const HOOK_EXPLOSIVETIMER = 33;
export const HOOK_DESCRIPTIONOBJ = 34;
export const HOOK_USESKILLON = 35;
export const HOOK_ONEXPLOSION = 36;
export const HOOK_SUBCOMBATDAMAGE = 37;
export const HOOK_SETLIGHTING = 38;
export const HOOK_SNEAK = 39;
export const HOOK_STDPROCEDURE = 40;
export const HOOK_STDPROCEDURE_END = 41;
export const HOOK_TARGETOBJECT = 42;
export const HOOK_ENCOUNTER = 43;
export const HOOK_ADJUSTPOISON = 44;
export const HOOK_ADJUSTRADS = 45;
export const HOOK_ROLLCHECK = 46;
export const HOOK_BESTWEAPON = 47;
export const HOOK_CANUSEWEAPON = 48;
// RESERVED 49..60
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
export function critter_inven_obj2(critter: number, slot: number): ObjectPtr {
    return sfall_func2("critter_inven_obj2", critter, slot) as ObjectPtr;
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
export function set_iface_tag_text(tag: number, text: string, color: number): void {
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
export function add_iface_tag(): number {
    return sfall_func0("add_iface_tag");
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
export function string_format1(format: string, a1: any): string {
    return sfall_func2("string_format", format, a1);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format2(format: string, a1: any, a2: any): string {
    return sfall_func3("string_format", format, a1, a2);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format3(format: string, a1: any, a2: any, a3: any): string {
    return sfall_func4("string_format", format, a1, a2, a3);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format4(format: string, a1: any, a2: any, a3: any, a4: any): string {
    return sfall_func5("string_format", format, a1, a2, a3, a4);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format5(format: string, a1: any, a2: any, a3: any, a4: any, a5: any): string {
    return sfall_func6("string_format", format, a1, a2, a3, a4, a5);
}

/**
 * Formats values using C printf syntax.
 * @inline
 */
export function string_format6(format: string, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any): string {
    return sfall_func7("string_format", format, a1, a2, a3, a4, a5, a6);
}

/**
 * Formats values using C printf syntax (max 7 values).
 * @inline
 */
export function string_format7(format: string, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any): string {
    return sfall_func8("string_format", format, a1, a2, a3, a4, a5, a6, a7);
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
export function party_member_list_critters(): ObjectPtr[] {
    return party_member_list(0) as unknown as ObjectPtr[];
}

/** Get list of all party members */
export function party_member_list_all(): any[] {
    return party_member_list(1);
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
