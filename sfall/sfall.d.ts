// Sfall scripting extensions for Fallout 2
// Auto-generated from fallout-ssl-sfall.yml

import type { ObjectPtr, ArrayID } from "../index";

// =============================================================================
// =============================================================================
// Internal functions (used by sfall.ts wrappers)
// =============================================================================

/** Internal sfall metarule function */
export declare function metarule3(func: number, arg1: number, arg2: number, arg3: number): any;

// Stats
// =============================================================================

/**
 * The `set_stat_max/min` functions can be used to set the valid ranges on stats. Values returned by `get_current_stat` will be clamped to this range. The `set_pc_` function only affects the player, the `set_npc_` functions only affects other critters, and the `set_` functions affects both.
 */
export declare function set_npc_stat_max(stat: number, value: number): void;

/**
 * The `set_stat_max/min` functions can be used to set the valid ranges on stats. Values returned by `get_current_stat` will be clamped to this range. The `set_pc_` function only affects the player, the `set_npc_` functions only affects other critters, and the `set_` functions affects both.
 */
export declare function set_npc_stat_min(stat: number, value: number): void;



/**
 * The `set_stat_max/min` functions can be used to set the valid ranges on stats. Values returned by `get_current_stat` will be clamped to this range. The `set_pc_` function only affects the player, the `set_npc_` functions only affects other critters, and the `set_` functions affects both.
 */
export declare function set_stat_max(stat: number, value: number): void;

/**
 * The `set_stat_max/min` functions can be used to set the valid ranges on stats. Values returned by `get_current_stat` will be clamped to this range. The `set_pc_` function only affects the player, the `set_npc_` functions only affects other critters, and the `set_` functions affects both.
 */
export declare function set_stat_min(stat: number, value: number): void;

/**
 * Set PC stat maximum. Only affects the player.
 */
export declare function set_pc_stat_max(stat: number, value: number): void;

/**
 * Set PC stat minimum. Only affects the player.
 */
export declare function set_pc_stat_min(stat: number, value: number): void;

/**
 * Get PC extra stat value (bonus stats). Equivalent to calling get_critter_extra_stat with dude_obj.
 */
export declare function get_pc_extra_stat(stat: number): number;

/**
 * Set PC extra stat value (bonus stats). Equivalent to calling set_critter_extra_stat with dude_obj.
 */
export declare function set_pc_extra_stat(stat: number, value: number): void;

export declare function set_perk_stat(perkID: number, value: number): void;

export declare function set_perk_stat_mag(perkID: number, value: number): void;

/**
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function get_critter_base_stat(CritterPtr: any, StatID: number): number;

/**
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function get_critter_extra_stat(CritterPtr: any, StatID: number): number;

/**
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function get_pc_base_stat(StatID: number): number;


/**
 * - Returns the maximum set value of the specified stat (see `set_stat_max` functions)
 * - who: 0 (`False`) or omitting the argument - returns the value of the player, 1 (`True`) - returns the value set for other critters
 * 
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function get_stat_max(stat: number, False: boolean): void;

/**
 * - Returns the minimum set value of the specified stat (see `set_stat_min` functions)
 * - who: 0 (`False`) or omitting the argument - returns the value of the player, 1 (`True`) - returns the value set for other critters
 * 
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function get_stat_min(stat: number, False: boolean): void;

/**
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function set_critter_base_stat(CritterPtr: any, StatID: number, value: number): void;

/**
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function set_critter_extra_stat(CritterPtr: any, StatID: number, value: number): void;

/**
 * The `get/set_pc_base/extra_stat` functions are equivalent to calling `get/set_critter_base/extra_stat` with `dude_obj` as the critter pointer. None of these stat functions take perks into account, and neither do they do range clamping to make sure the stats are valid. Use the normal `get_critter_stat` function to get a correctly perk adjusted and range clamped value for a stat.
 */
export declare function set_pc_base_stat(StatID: number, value: number): void;


// =============================================================================
// Animation
// =============================================================================

/**
 * Works exactly like `reg_anim_animate` but the object will automatically disappear after the last animation frame (but not destroyed).
 * - `delay`: delay from the previous animation. A value of -1 will execute the specified animation immediately after the previous one in the sequence ends.
 * 
 */
export declare function reg_anim_animate_and_hide(ObjectPtr: any, animID: number, delay: number): void;

/**
 * Adds the given procedure to an animation sequence-list and executes it in the registered sequence.
 */
export declare function reg_anim_callback(proc: Function): void;

/**
 * Should work like `art_change_fid_num` but in `reg_anim` sequence.
 */
export declare function reg_anim_change_fid(ObjectPtr: any, FID: number, delay: number): void;

/**
 * Allows enabling all `reg_anim_*` functions in combat (including vanilla functions) if set to 0. It is automatically reset at the end of each frame, so you need to call it before `reg_anim_begin` - `reg_anim_end` block.
 */
export declare function reg_anim_combat_check(enable: number): void;

/**
 * Given object is destroyed at the end of current animation set.
 */
export declare function reg_anim_destroy(ObjectPtr: any): void;

/**
 * Change light of any object. Light argument is a light radius (0-8), but you can use highest 2 bytes to pass light intensity as well (example: 0xFFFF0008 - intensity 65535 and radius 8). If highest 2 bytes are 0, intensity will not be changed. Intensity range is from 0 to 65535 (0xFFFF)
 */
export declare function reg_anim_light(ObjectPtr: any, light: number, delay: number): void;

/**
 * Plays "take out weapon" animation for given `holdFrameID`. It is not required to have such weapon in critter's inventory.
 */
export declare function reg_anim_take_out(ObjectPtr: any, holdFrameID: any, delay: any): void;

/**
 * Makes object change its direction to face given tile number or target object.
 */
export declare function reg_anim_turn_towards(ObjectPtr: any, tiletarget: number, delay: any): void;

// =============================================================================
// Arrays
// =============================================================================

/**
 * Don't use it directly; it is generated by the compiler in foreach loops.
 *   - for lists, returns index back (no change).
 *   - for maps, returns a key at the specified numeric index (don't rely on the order in which keys are stored though).
 *   - can be checked if given array is associative or not, by using index (-1): 0 - array is list, 1 - array is map.
 * 
 */
export declare function array_key(arrayID: any[], index: number): any;

/**
 * Don't use it directly; it is used by compiler to create array expressions.
 * - assigns value to a given key in an array, created by last `create_array` or `temp_array` call.
 * - always returns 0.
 * 
 */
export declare function arrayexpr(key: any, value: any): number;

/**
 * Creates permanent array (but not "saved").
 * - if `size >= 0`, creates list with given size.
 * - if `size == -1`, creates map (associative array).
 * - if `size == -1` and `flags == 2`, creates a "lookup" map (associative array) in which the values of existing keys are read-only and can't be updated. This type of array allows you to store a zero (0) key value.
 * - returns array ID (valid until array is deleted).
 * 
 */
export declare function create_array(size: number, nothing: number): any[];

/**
 * Changes "temporary" array into "permanent" ("permanent" arrays are not automatically saved into savegames).
 */
export declare function fix_array(arrayID: any[]): void;

/**
 * Deletes any array.
 * - if array was "saved", it will be removed from a savegame.
 * 
 */
export declare function free_array(arrayID: any[]): void;

/**
 * Returns array value by key or index (shorthand: `arrayID[key]`).
 * - if key doesn't exist or index is not in valid range, returns 0.
 * 
 */
export declare function get_array(arrayID: any[], key: any): any;

/**
 * Returns number of elements or key=>value pairs in a given array.
 * - if array is not found, returns -1 (can be used to check if given array exist).
 * 
 */
export declare function len_array(arrayID: any[]): number;

/**
 * Loads array from savegame data by the same key provided in `save_array`.
 * - returns array ID or zero (0) if none found.
 * 
 */
export declare function load_array(key: any): any[];

/**
 * Changes array size. - applicable to maps too, but only to reduce elements. - there are number of special negative values of "size" which perform various operations on the array, use macros `sort_array`, `sort_array_reverse`, `reverse_array`, `shuffle_array` from **sfall.h** header.
 */
export declare function resize_array(arrayID: any[], size: number): void;

/**
 * Makes the array saveable; it will be saved in **sfallgv.sav** file when saving the game.
 * - array ID is associated with given "key".
 * - array becomes permanent (if it was temporary) and "saved".
 * - key can be of any type (int, float or string).
 * - if you specify 0 as the key for the array ID, it will make the array "unsaved".
 * 
 */
export declare function save_array(key: any, arrayID: any[]): void;

/**
 * Searches for a first occurence of given value inside given array.
 * - if value is found, returns its index (for lists) or key (for maps).
 * - if value is not found, returns -1 (be careful, as -1 can be a valid key for a map).
 * 
 */
export declare function scan_array(arrayID: any[], value: any): any;

/**
 * Sets array value (shorthand: `arrayID[key] := value`).
 * - if used on list, "key" must be numeric and within valid index range (0..size-1)
 * - if used on map, key can be of any type
 * - to "unset" a value from map, just set it to zero (0)
 *   - NOTE: to add a value of 0 for the key, use the float value of 0.0
 * 
 */
export declare function set_array(arrayID: any[], key: any, value: any): void;

/**
 * Works exactly like `create_array`, only created array becomes "temporary".
 */
export declare function temp_array(size: number, nothing: number): any[];

/**
 * The `list_xxx` functions can be used to loop over all items on a map. `list_begin` takes an argument telling sfall what you want to list (defined in **sfall.h**). It returns a list pointer, which you iterate through with `list_next`. Finally, when you've finished with the list use `list_end` on it. Not calling `list_end` will result in a memory leak. Alternatively, use `list_as_array` to get the whole list at once as a temp array variable, which can be looped over using `len_array` and which you don't need to remember to free afterwards.
 */
export declare function list_as_array(type: number): any[];

/**
 * The same as string_format, but accepts an array of parameters.
 */
export declare function string_format_array(format: string, array: number): string;

// =============================================================================
// Art
// =============================================================================


/**
 * checks if given artFID exists in the game. Useful when you want to check if critter can use specific weapon: `art_exists((artFid bwand 0xffff0fff) bwor (weaponAnim * 0x1000))`.
 */
export declare function art_exists(artFID: number): number;

export declare function refresh_pc_art(): void;

/**
 * Gets the hit percentage modifiers for aiming at specific bodyparts. Valid bodypart id's are from 0 to 8.
 */
export declare function get_bodypart_hit_modifier(bodypart: number): number;

/**
 * Alters the hit percentage modifiers for aiming at specific bodyparts. Valid bodypart id's are from 0 to 8. Changes are not saved, and will reset to the defaults (or to the values specified in ddraw.ini if they exist) at each reload.
 */
export declare function set_bodypart_hit_modifier(bodypart: number, value: number): void;


/**
 * - Returns FID information about the square under the given tile at elevation 0
 * - Pass elevation as 4-bit number in bits 25-28 to access other elevations
 * - Pass result mode in bits 29-32: 0 - ground FID, 1 - roof FID, 2 - raw data.
 * 
 */
export declare function get_tile_fid(tileData: number): number;

// =============================================================================
// Sound
// =============================================================================

/**
 * Used to play `mp3/wav/wma` files. The path given is relative to the Fallout folder. Specify mode as 1 to loop the file continuously, 2 to replace the current background game music with playing the specified file in loop mode, or 0 to play the file once. If you don't wish to loop, `play_sfall_sound` returns 0. If you do loop, it returns an ID which can be passed back to `stop_sfall_sound` when you want to stop the effect. All sounds effects will be stopped on game reload, looping or not. Does not require `AllowDShowSound` to be set to 1 in `ddraw.ini`.
 * 
 * Starting from sfall 4.2.8/3.8.28, you can pass a value in the `mode` argument for a reduced sound volume. To set the volume, You need to convert the number to hexadecimal and use the argument format `0xZZZZ000Y`, where `ZZZZ` is the volume reduction value in range from 0 to 32767 (the value 32767 is mute), and `Y` is the playback mode.
 * 
 */
export declare function play_sfall_sound(file: string, mode: number): number;

/**
 * Stops looping `mp3/wav/wma` files previously launched by `play_sfall_sound`. All sounds effects will be stopped on game reload, looping or not. Does not require `AllowDShowSound` to be set to 1 in `ddraw.ini`.
 */
export declare function stop_sfall_sound(soundID: number): void;

// =============================================================================
// Car
// =============================================================================


/**
 * Changes the current town index for the player's car.
 */
export declare function set_car_current_town(town: number): void;

// =============================================================================
// Combat
// =============================================================================


/**
 * Deny the player to enter combat mode.
 */
export declare function block_combat(value: boolean): void;


export declare function get_attack_type(): number;


/**
 * Will return the last critter to deliberately launch an attack against the argument critter. If a critter has not launched/received an attack, it will return 0. Outside of combat always returns 0.
 */
export declare function get_last_attacker(critter: ObjectPtr): ObjectPtr;

/**
 * Get critter's current action points.
 */
export declare function get_critter_current_ap(critter: ObjectPtr): number;

/**
 * Set critter's current action points.
 */
export declare function set_critter_current_ap(critter: ObjectPtr, ap: number): void;





/**
 * The `type` value in the weapon knockback functions can be 0 or 1. If 0, the value becomes an absolute distance that targets will be knocked back. If 1, the value is multiplied by the distance they would normally have been knocked back. Weapon knockback modifiers are applied in the order weapon -> attacker -> target, so a x2 weapon wielded by an abs 6 attacker hitting a /2 target will knock the target back 3 squares. The knockback functions will not override the stonewall perk or knockdowns resulting from criticals. knockback values set on weapons or critters are not saved, and must be reset each time the player reloads.
 */
export declare function remove_attacker_knockback(CritterPtr: any): void;

/**
 * The `type` value in the weapon knockback functions can be 0 or 1. If 0, the value becomes an absolute distance that targets will be knocked back. If 1, the value is multiplied by the distance they would normally have been knocked back. Weapon knockback modifiers are applied in the order weapon -> attacker -> target, so a x2 weapon wielded by an abs 6 attacker hitting a /2 target will knock the target back 3 squares. The knockback functions will not override the stonewall perk or knockdowns resulting from criticals. knockback values set on weapons or critters are not saved, and must be reset each time the player reloads.
 */
export declare function remove_weapon_knockback(WeaponPtr: any): void;

/**
 * The `type` value in the weapon knockback functions can be 0 or 1. If 0, the value becomes an absolute distance that targets will be knocked back. If 1, the value is multiplied by the distance they would normally have been knocked back. Weapon knockback modifiers are applied in the order weapon -> attacker -> target, so a x2 weapon wielded by an abs 6 attacker hitting a /2 target will knock the target back 3 squares. The knockback functions will not override the stonewall perk or knockdowns resulting from criticals. knockback values set on weapons or critters are not saved, and must be reset each time the player reloads.
 */
export declare function set_attacker_knockback(CritterPtr: any, type: number, value: number): void;

/**
 * The `type` value in the weapon knockback functions can be 0 or 1. If 0, the value becomes an absolute distance that targets will be knocked back. If 1, the value is multiplied by the distance they would normally have been knocked back. Weapon knockback modifiers are applied in the order weapon -> attacker -> target, so a x2 weapon wielded by an abs 6 attacker hitting a /2 target will knock the target back 3 squares. The knockback functions will not override the stonewall perk or knockdowns resulting from criticals. knockback values set on weapons or critters are not saved, and must be reset each time the player reloads.
 */
export declare function set_weapon_knockback(WeaponPtr: any, type: number, value: number): void;

/**
 * This also allows to get current charges of a misc item (Geiger counter, etc).
 */
export declare function get_weapon_ammo_count(weapon: ObjectPtr): number;

export declare function get_weapon_ammo_pid(weapon: ObjectPtr): number;

/**
 * This also allows to set current charges of a misc item (Geiger counter, etc).
 */
export declare function set_weapon_ammo_count(weapon: ObjectPtr, count: number): void;

export declare function set_weapon_ammo_pid(weapon: ObjectPtr, pid: number): void;

// =============================================================================
// Critter
// =============================================================================


export declare function set_critter_burst_disable(critter: number, disable: number): void;


export declare function get_npc_level(npc: string): number;

/**
 * Takes a party member PID or an NPC name (deprecated, for compatibility with sfall 4.1.5/3.8.15 or earlier) as an argument. The NPC must be in your party. This function ignores player level requirements and the minimum 3 player level delay between NPC level gains. It also ignores the random element, regardless of sfall's `NPCAutoLevel` setting.
 */
export declare function inc_npc_level(party_member_pid: number): void;

export declare function set_critter_hit_chance_mod(CritterPtr: any, max: number, mod: number): void;

/**
 * The same as `set_base_pickpocket`, but applies only to specific critter.
 */
export declare function set_critter_pickpocket_mod(CritterPtr: any, max: number, mod: number): void;



/**
 * Will get the number of additional points a critter has in a skill, on top of whatever they have from their stats and other bonuses
 */
export declare function get_critter_skill_points(critter: number, skill: number): number;

export declare function set_critter_skill_mod(CritterPtr: any, max: number): void;

/**
 * Will set the number of additional points a critter has in a skill, on top of whatever they have from their stats and other bonuses. Note that skill points are part of the proto, so calling it on a critter will affect all critters that share the same proto.
 */
export declare function set_critter_skill_points(critter: number, skill: number, value: number): void;

// =============================================================================
// Dialog
// =============================================================================


export declare function gdialog_get_barter_mod(): number;

// =============================================================================
// Explosion
// =============================================================================

/**
 * Was made as a quick-and-dirty hack to enable dynamic changes to some explosion parameters for ranged attacks. All changed parameters are automatically reset to vanilla state after each attack action.
 */
export declare function metarule2_explosions(arg1: number, arg2: number, arg3: number): number;



// =============================================================================
// Graphics
// =============================================================================

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function activate_shader(ID: number): void;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function deactivate_shader(ID: number): void;

/**
 * Forces the screen to redraw at times when it normally wouldn't. If you're using animated shader, turning this option on is recommended.
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function force_graphics_refresh(enabled: boolean): void;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function free_shader(ID: number): void;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function get_screen_height(): number;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function get_screen_width(): number;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function get_shader_texture(ID: number, texture: number): number;

/**
 * Gives you the highest shader version supported by the player's graphics cards. Possible return values are 11, 12, 13, 14, 20, 21 and 30.
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function get_shader_version(): number;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function graphics_funcs_available(): boolean;

/**
 * Takes a path relative to the `<GameRoot>\<master_patches>\shaders\` directory as an argument and returns a shader ID. That ID should be passed as the first argument to all other shader functions, and is valid until `free_shader` is called on the ID, the player loads a saved game or the player quits to the main menu.
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function load_shader(path: string): number;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function set_shader_float(ID: number, param: string, value: number): void;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function set_shader_int(ID: number, param: string, value: number): void;

/**
 * Tells sfall when to use a shader. The parameter is a set of 32 flags which specify the screens on which the shader will be disabled, unless bit 32 is set, in which case the shader will only be active on those screens. Remember that screens are displayed on top of each other; if the player opens the character menu which in combat, the game still considers the player to be in combat. See **sfall.h** for a list of defines.
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function set_shader_mode(mode: number): void;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function set_shader_texture(ID: number, param: string, texID: number): void;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function set_shader_vector(ID: number, param: string, f1: number, f2: number, f3: number, f4: number): void;

// =============================================================================
// Hooks
// =============================================================================

/**
 * The hook script equivalent of `game_loaded`; it returns 1 when the script is loaded for the first time or when the player reloads the game, and 0 otherwise.
 */
export declare function init_hook(): number;

/**
 * Used from a normal global script if you want to run it at the same point a full hook script would normally run. In case of this function, `start` procedure will be executed in current global script. You can use all above functions like normal.
 */
export declare function register_hook(hookID: number): void;

/**
 * The same as `register_hook`, except that you specifically define which procedure in the current script should be called as a hook (instead of "start" by default). Pass procedure the same as how you use dialog option functions. This IS the recommended way to use hook scripts, as it gives both modularity (each mod logic in a separate global script with no conflicts) and flexibility. You can place all related hook scripts for a specific mod in one global script!
 * 
 * Use zero (0) as second argument to unregister hook script from current global script.
 * 
 * __NOTE:__ you can hook several scripts to a single hook point, for example if it's different mods from different authors or just some different aspects of one larger mod. When one of the scripts in a chain returns value with `set_sfall_return`, the next script may override this value if calls `set_sfall_return` again.
 * 
 * __Example:__ Sometimes you need to multiply certain value in a chain of hook scripts. Let's say we have a **Mod A** which reduces all "to hit" chances by 50%. The code might look like this:
 * 
 * ```js
 * original_chance = get_sfall_arg;
 * set_sfall_return(original_chance / 2);
 * ```
 * 
 * **Mod B** also want to affect hit chances globally, by increasing them by 50%. Now in order for both mods to work well together, we need to add this line to **Mod A** hook script:
 * ```js
 * set_sfall_arg(0, (original_chance / 2));
 * ```
 * 
 * This basically changes hook argument for the next script. **Mod B** code:
 * ```js
 * original_chance = get_sfall_arg;
 * set_sfall_return(original_chance * 1.5);
 * set_sfall_arg(0, (original_chance * 1.5));
 * ```
 * 
 * So if you combine both mods together, they will run in chain and the end result will be a 75% from original hit chance (hook register order doesn't matter in this case, if you use `set_sfall_arg` in both hooks).
 * 
 * The defines to use for the `hookID` are in **sfall.h**.
 * 
 */
export declare function register_hook_proc(hookID: number, procedure: any): void;

/**
 * Works the same as `register_hook_proc`, except that it registers the current script at the end of the hook script execution chain (i.e. the script will be executed after all previously registered scripts for the same hook, including the `hs_<name>.int` script). In addition, all scripts hooked to a single hook point with this function are executed in the exact order of how they were registered. In the case of using `register_hook` and `register_hook_proc` functions, scripts are executed in reverse order of how they were registered.
 * **The execution chain of script procedures for a hook is as follows:** 1. Procedures registered with `register_hook` and `register_hook_proc` functions (executed in reverse order of registration). 2. The `hs_<name>.int` script. 3. Procedures registered with the `register_hook_proc_spec` function (executed in the exact order of registration).
 */
export declare function register_hook_proc_spec(hookID: number, proc: Function): void;

// =============================================================================
// Interface
// =============================================================================


/**
 * `show_iface_tag`, `hide_iface_tag` and `is_iface_tag_active` relate to the boxes that appear above the interface such as SNEAK and LEVEL. You can use 0 for **SNEAK** (starting from sfall 4.4.4/3.8.44), 3 for **LEVEL**, 4 for **ADDICT**, and 5 to (4 + the value of BoxBarCount in `ddraw.ini`) for custom boxes. Remember to add your messages to `intrface.msg` and set up the font colours in `ddraw.ini` if you're going to use custom boxes. Starting from sfall 4.1/3.8.12, `is_iface_tag_active` can also be used to check 0 for **SNEAK**, 1 for **POISONED**, and 2 for **RADIATED**.
 * 
 */
export declare function hide_iface_tag(tag: number): void;

/**
 * `show_iface_tag`, `hide_iface_tag` and `is_iface_tag_active` relate to the boxes that appear above the interface such as SNEAK and LEVEL. You can use 0 for **SNEAK** (starting from sfall 4.4.4/3.8.44), 3 for **LEVEL**, 4 for **ADDICT**, and 5 to (4 + the value of BoxBarCount in `ddraw.ini`) for custom boxes. Remember to add your messages to `intrface.msg` and set up the font colours in `ddraw.ini` if you're going to use custom boxes. Starting from sfall 4.1/3.8.12, `is_iface_tag_active` can also be used to check 0 for **SNEAK**, 1 for **POISONED**, and 2 for **RADIATED**.
 * 
 */
export declare function is_iface_tag_active(tag: number): number;


/**
 * `show_iface_tag`, `hide_iface_tag` and `is_iface_tag_active` relate to the boxes that appear above the interface such as SNEAK and LEVEL. You can use 0 for **SNEAK** (starting from sfall 4.4.4/3.8.44), 3 for **LEVEL**, 4 for **ADDICT**, and 5 to (4 + the value of BoxBarCount in `ddraw.ini`) for custom boxes. Remember to add your messages to `intrface.msg` and set up the font colours in `ddraw.ini` if you're going to use custom boxes. Starting from sfall 4.1/3.8.12, `is_iface_tag_active` can also be used to check 0 for **SNEAK**, 1 for **POISONED**, and 2 for **RADIATED**.
 * 
 */
export declare function show_iface_tag(tag: number): void;


/**
 * Alternative form: `int sfall_func6("interface_overlay", int winType, 2, int x, int y, int width, int height)`.
 * 
 * Creates an additional drawing surface above the graphic layer of the specified interface window. All subsequent calls of `interface_art_draw` and `interface_print` functions will draw on it.
 * - `winType`: the type number of the interface window (see `WINTYPE_*` constants in **sfall.h**)
 * - `mode`: 1 - creates a new overlay surface
 *           2 - clears the overlay area or the specified rectangle defined by the `x`, `y`, `width`, `height` arguments
 *           0 - destroys the created overlay surface (frees up the memory allocated to the surface)
 * 
 */
export declare function interface_overlay(winType: number, mode: number): void;

// =============================================================================
// Inventory
// =============================================================================


/**
 * Returns the current AP cost to access the inventory in combat
 */
export declare function get_inven_ap_cost(): number;

export declare function set_inven_ap_cost(cost: number): void;



// =============================================================================
// Keys
// =============================================================================

export declare function key_pressed(dxScancode: number): number;

export declare function tap_key(dxScancode: number): void;

// =============================================================================
// Lists
// =============================================================================

/**
 * The `list_xxx` functions can be used to loop over all items on a map. `list_begin` takes an argument telling sfall what you want to list (defined in **sfall.h**). It returns a list pointer, which you iterate through with `list_next`. Finally, when you've finished with the list use `list_end` on it. Not calling `list_end` will result in a memory leak. Alternatively, use `list_as_array` to get the whole list at once as a temp array variable, which can be looped over using `len_array` and which you don't need to remember to free afterwards.
 */
export declare function list_begin(type: number): number;

/**
 * The `list_xxx` functions can be used to loop over all items on a map. `list_begin` takes an argument telling sfall what you want to list (defined in **sfall.h**). It returns a list pointer, which you iterate through with `list_next`. Finally, when you've finished with the list use `list_end` on it. Not calling `list_end` will result in a memory leak. Alternatively, use `list_as_array` to get the whole list at once as a temp array variable, which can be looped over using `len_array` and which you don't need to remember to free afterwards.
 */
export declare function list_end(listid: number): void;

/**
 * The `list_xxx` functions can be used to loop over all items on a map. `list_begin` takes an argument telling sfall what you want to list (defined in **sfall.h**). It returns a list pointer, which you iterate through with `list_next`. Finally, when you've finished with the list use `list_end` on it. Not calling `list_end` will result in a memory leak. Alternatively, use `list_as_array` to get the whole list at once as a temp array variable, which can be looped over using `len_array` and which you don't need to remember to free afterwards.
 */
export declare function list_next(listid: number): number;

// =============================================================================
// Map
// =============================================================================


/**
 * Returns an array of the player's position data (index: 0 - tile, 1 - elevation, 2 - rotation) when entering the map through exit grids. If entering from the world map, the tile value will be -1. Should be called in `map_enter_p_proc` procedure to get the correct position data.
 */
export declare function get_map_enter_position(): any[];

/**
 * Returns 1 if the player is looking at the world map, or 0 at any other time. Obviously this is only useful in global scripts, since normal scripts will never get the chance to run on the world map.
 */
export declare function in_world_map(): boolean;


/**
 * Adjusts how fast time passes while you're on the world map. It takes a single float as an argument, where 1 is the normal speed. This function works in addition to the `WorldMapTimeMod` setting in `ddraw.ini` and the Pathfinder perk, rather than overriding it, so calling `set_map_time_multi(0.5)` when the player has 2 levels of Pathfinder would result in time passing at 25% the normal speed on the world map.
 */
export declare function set_map_time_multi(multi: number): void;

/**
 * Returns first object blocking given tile using given blocking function or 0 if tile is clear.
 */
export declare function obj_blocking_tile(tileNum: number, elevation: number, blockingType: number): ObjectPtr;


/**
 * Returns an array of all objects at given tile. It will include any hidden, dead or system objects (like cursor), so make sure to check properly when iterating.
 */
export declare function tile_get_objs(tileNum: number, elevation: number): any[];

/**
 * Returns light intensity at the given tile in range from 0 to 65535.
 */
export declare function tile_light(elevation: number, tileNum: number): number;

export declare function tile_under_cursor(): number;

/**
 * The mapper manual lists the functions `world_map_x_pos` and `world_map_y_pos`, which supposedly return the player's x and y positions on the world map. `get_world_map_x/y_pos` are included here anyway, because I was unable to get those original functions to work, or even to find any evidence that they existed in game.
 */
export declare function get_world_map_x_pos(): number;

/**
 * The mapper manual lists the functions `world_map_x_pos` and `world_map_y_pos`, which supposedly return the player's x and y positions on the world map. `get_world_map_x/y_pos` are included here anyway, because I was unable to get those original functions to work, or even to find any evidence that they existed in game.
 */
export declare function get_world_map_y_pos(): number;

/**
 * The mapper manual lists the functions `world_map_x_pos` and `world_map_y_pos`, which supposedly return the player's x and y positions on the world map. `get_world_map_x/y_pos` are included here anyway, because I was unable to get those original functions to work, or even to find any evidence that they existed in game.
 */
export declare function set_world_map_pos(x: number, y: number): void;

// =============================================================================
// Message
// =============================================================================

export declare function create_message_window(message: string): void;

/**
 * Works exactly the same as message_str, except you get messages from files in `text/english/game` folder. Use `GAME_MSG_*` defines or `mstr_*` macros from **sfall.h** to use specific msg file
 * - Additional game msg files added by `ExtraGameMsgFileList` setting will have consecutive fileIds assigned beginning from 0x2000 to 0x2FFF. (e.g. if you set `ExtraGameMsgFileList=foo,bar` in `ddraw.ini`, `foo.msg` will be associated with 0x2000 and `bar.msg` with 0x2001.).
 * - If a file has a specific number assigned in `ExtraGameMsgFileList`, its fileId will be (0x2000 + assigned number). (e.g. with `ExtraGameMsgFileList=foo,bar:2,foobar` in `ddraw.ini`, `bar.msg` will be associated with 0x2002 and `foobar.msg` with 0x2003.)
 * 
 */
export declare function message_str_game(fileId: number, messageId: number): string;

/**
 * Creates a dialog box with text and returns the result of pressing the button: 0 - No (Escape), 1 - Yes/Done (Enter). Returns -1 if for some reason the dialog box cannot be created.
 * ```
 * - message: the text in the dialog box. Use the `\n` control character to move text to a new line (example: "Hello\nWorld!")
 * optional arguments:
 * - flags: mode flags (see `MSGBOX_*` constants in define_extra.h). Pass -1 to skip setting the flags (default flags are NORMAL and YESNO)
 * - color1/color2: the color index in the game palette. `color1` sets the text color for the first line, and `color2` for all subsequent lines of text (default color is 145)
 * ```
 * 
 */
export declare function message_box(message: string, flags: number, color1: number, color2: number): number;

// =============================================================================
// Objects
// =============================================================================



/**
 * Returns number of `itemObj` inside invenObj's inventory, note that both arguments are object pointers. useful when dealing with different stacks of same item (`obj_is_carrying_obj_pid` just returns total for all stacks of the same PID.)
 */
export declare function obj_is_carrying_obj(invenObj: ObjectPtr, itemObj: ObjectPtr): void;









/**
 * Returns first object which blocks direct linear path from `objFrom` to `tileTo` using selected blocking function (see `BLOCKING_TYPE_*` constants in **sfall.h**). If path is clear (no blocker was encountered by selected function) - returns 0. `objFrom` is always excluded from calculations, but is required to be a valid object.
 */
export declare function obj_blocking_line(objFrom: ObjectPtr, tileTo: number, blockingType: number): ObjectPtr;

// =============================================================================
// Party
// =============================================================================

/**
 * Returns an array of all current party members (0 - only critters that are alive and visible will be returned, 1 - all objects, including the car trunk, etc.)
 * The `list_xxx` functions can be used to loop over all items on a map. `list_begin` takes an argument telling sfall what you want to list (defined in **sfall.h**). It returns a list pointer, which you iterate through with `list_next`. Finally, when you've finished with the list use `list_end` on it. Not calling `list_end` will result in a memory leak. Alternatively, use `list_as_array` to get the whole list at once as a temp array variable, which can be looped over using `len_array` and which you don't need to remember to free afterwards.
 */
export declare function party_member_list(includeHidden: number): any[];

// =============================================================================
// Perks
// =============================================================================




/**
 * Similar to `get_unspent_ap_bonus`, but accounts for the extra AC granted by the H2H Evade perk. (The default value of this is also 4, equivalent to doubling the original bonus.
 */
export declare function get_unspent_ap_perk_bonus(): number;

/**
 * Similar to `set_unspent_ap_bonus`, but effects the extra AC granted by the H2H Evade perk. (The default value of this is also 4, equivalent to doubling the original bonus.
 */
export declare function set_unspent_ap_perk_bonus(multiplier: number): void;

/**
 * Restores the "select a perk" box to its default state.
 */
export declare function clear_selectable_perks(): void;

export declare function get_perk_available(perk: number): number;

export declare function get_perk_owed(): number;

/**
 * Returns the number of levels the player has of the perks with the given name or ID of extra perk.
 */
export declare function has_fake_perk(name: string): number;

/**
 * Prevent the "select a perk" box from displaying any of the original 119 perks.
 */
export declare function hide_real_perks(): void;

/**
 * Modifies what happens when a fake perk is selected from the perks dialog. It is treated as a set of flags - if bit 1 is set then it is added to the player's traits, if bit 2 is set it is added to the player's perks, and if bit 3 is set it is removed from the list of selectable perks. The default is 0x2.
 */
export declare function perk_add_mode(type: number): void;

/**
 * Sets the number of levels between each perk.
 */
export declare function seq_perk_freq(value: number): void;

/**
 * Used to add additional traits and perks to the character screen. They will be saved correctly when the player saves and reloads games, but by themselves they will have no further effect on the character. For perks, the allowed range for levels is between 0 and 100; setting the level to 0 removes that perk. For traits, the level must be 0 or 1. The image is a numeric ID that corresponds to an entry in `skilldex.lst`. The name is limited to 63 characters and the description to 255 characters by sfall, but internal Fallout limits may be lower.
 */
export declare function set_fake_perk(name: string, level: number, image: number, desc: string): void;

export declare function set_perk_agl(perkID: number, value: number): void;

export declare function set_perk_chr(perkID: number, value: number): void;

export declare function set_perk_desc(perkID: number, value: string): void;

export declare function set_perk_end(perkID: number, value: number): void;

/**
 * Sets the number of levels between each perk. Setting to 0 will reset it back to the default. This overrides the effects of the skilled trait. Not saved into the save game, so needs to be called once per reload. Be careful not to let the player obtain a perk when no perks are available to pick, or the game may crash.
 */
export declare function set_perk_freq(value: number): void;

export declare function set_perk_image(perkID: number, value: number): void;

export declare function set_perk_int(perkID: number, value: number): void;

export declare function set_perk_lck(perkID: number, value: number): void;

export declare function set_perk_level(perkID: number, value: number): void;

/**
 * Sets a modifier between +25 and -25 that is added/subtracted from the player's level for the purposes of deciding which perks can be chosen.
 */
export declare function set_perk_level_mod(levels: number): void;

export declare function set_perk_name(perkID: number, value: string): void;

export declare function set_perk_owed(value: number): void;

export declare function set_perk_per(perkID: number, value: number): void;

export declare function set_perk_ranks(perkID: number, value: number): void;

export declare function set_perk_skill1(perkID: number, value: number): void;

export declare function set_perk_skill1_mag(perkID: number, value: number): void;

export declare function set_perk_skill2(perkID: number, value: number): void;

export declare function set_perk_skill2_mag(perkID: number, value: number): void;

export declare function set_perk_str(perkID: number, value: number): void;

export declare function set_perk_type(perkID: number, value: number): void;

/**
 * Used to change the title of the "select a perk" box, or by using "" it will be set back to the default.
 */
export declare function set_perkbox_title(title: string): void;

/**
 * Used to add additional items to "select a perk" box by setting the 'active' parameter to 1, and to remove them again by setting it to 0.
 */
export declare function set_selectable_perk(name: string, active: number, image: number, desc: string): void;

/**
 * Reverts the effect os `hide_real_perks`.
 */
export declare function show_real_perks(): void;

// =============================================================================
// Player
// =============================================================================

export declare function set_hero_race(style: number): void;

export declare function set_hero_style(style: number): void;

export declare function hero_select_win(arg0: number): void;

// =============================================================================
// Proto
// =============================================================================

/**
 * Used to read the in-memory copies of the .pro files Fallout makes when they are loaded. The offset refers to the offset in memory from the start of the proto to the element you are reading.
 */
export declare function get_proto_data(pid: number, offset: number): number;

/**
 * Used to alter the in-memory copies of the .pro files Fallout makes when they are loaded. The offset refers to the offset in memory from the start of the proto to the element you are reading. Changes are not stored on disc, and are not permanent. If you modify the protos, and then Fallout subsequently reloads the file your changes will be lost.
 */
export declare function set_proto_data(pid: number, offset: number, value: number): void;

// =============================================================================
// Script
// =============================================================================

export declare function available_global_script_types(): number;

/**
 * Only has an effect on the script it is called from. Every global script needs its own `game_loaded` block to correctly set up repeat rate. Will have no effect if called on a non-global script.
 */
export declare function set_global_script_repeat(frames: number): void;

/**
 * Only has an effect on the script it is called from. Every global script needs its own `game_loaded` block to correctly set up the script type.
 */
export declare function set_global_script_type(type: number): void;

/**
 * - accepts a pointer to an object and returns its scriptID (line number in `scripts.lst`), or 0 if the object is unscripted.
 * - returns -1 on argument error.
 * 
 */
export declare function get_script(obj: ObjectPtr): number;

/**
 * Accepts a pointer to an object and will remove the script from that object.
 */
export declare function remove_script(obj: ObjectPtr): void;


/**
 * Accepts a pointer to an object and scriptID, and applies the given script to an object (scriptID accept the same values as `create_object_sid `from sfall 3.6). If used on an object that is already scripted, it will remove the existing script first; you cannot have multiple scripts attached to a single object. Calling `set_script` on `self_obj` will have all sorts of wacky side effects, and should be avoided. If you add 0x80000000 to the sid when calling `set_script`, `map_enter_p_proc` will be SKIPPED. The `start` proc will always be run.
 */
export declare function set_script(obj: ObjectPtr, scriptID: number): void;

// =============================================================================
// Strings
// =============================================================================

/**
 * Reads a string value from an ini file in the Fallout directory.
 * - If the file or key cannot be found, it returns an empty string.
 * - If the setting argument is in an invalid format, it returns -1 (integer).
 * 
 */
export declare function get_ini_string(setting: string): string;

/**
 * (DEPRECATED) Returns a pointer to a string variable or to a text
 * - __NOTE:__ this function is intended for use only in `HOOK_DESCRIPTIONOBJ`. Starting from sfall 4.4/3.8.40, you can return normal strings directly in the hook without calling the function
 * 
 */
export declare function get_string_pointer(text: string): number;



/**
 * Formats given values using standard syntax of C `printf` function (google "printf" for format details). However, it is limited to formatting up to 7 values.
 * - The format string is limited to 1024 characters
 * 
 */
export declare function string_format(format: string, val1: any, val2: any, arg3: any): string;

/**
 * Replaces all occurances of a given search string in a string with a given replacement string.
 */
export declare function string_replace(str: string, search: string, replace: string): string;

/**
 * Takes a string and a seperator, searches the string for all instances of the seperator, and returns a temp array filled with the pieces of the string split at each instance. If you give an empty string as the seperator, the string is split into individual characters. You can use this to search for a substring in a string like this: `strlen(get_array(string_split(haystack, needle), 0))`
 */
export declare function string_split(text: string, split: any): any[];

/**
 * Converts all letters in the given string to the specified case.
 * ```
 * toCase: 0 - lowercase, 1 - uppercase
 * ```
 * NOTE: this function works only for English letters of A-Z/a-z.
 * 
 */
export declare function string_to_case(text: string, toCase: number): string;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_write_bstring(id: number, data: string): void;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_write_string(id: number, data: string): void;

/**
 * These functions take a memory address as the parameter and can read arbitrary pieces of Fallout's address space.
 */
export declare function read_string(address: number): number;

/**
 * These functions take a memory address as the parameter and can write to arbitrary pieces of Fallout's address _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function write_string(address: number, value: string): void;

// =============================================================================
// World
// =============================================================================

/**
 * Can be called either from a global script while traveling on the world map, or from a normal script while on a local map. In either case the encounter occurs shortly after the next time the player moves on the world map. The player will not get an outdoorsman skill check.
 */
export declare function force_encounter(map: number): void;

/**
 * Does the same thing as force_encounter, but allows the specification of some extra options (see **sfall.h** for available flags).
 * Forcing a random encounter on a map that is not normally used for random encounters may cause the player to lose the car, if they have it. In this case use `force_encounter_with_flags` with the `ENCOUNTER_FLAG_NO_CAR` flag set.
 * 
 */
export declare function force_encounter_with_flags(map: number, flags: number): void;

// =============================================================================
// INI
// =============================================================================




/**
 * Reads an integer value from an ini file in the Fallout directory.
 * - It only takes a single argument; seperate the file name, section and key with a "\|" character; e.g. `myvar:=get_ini_setting("myini.ini|mysec|var1")`
 * - If the file or key cannot be found or the setting argument is in an invalid format, it returns -1.
 * - The file name is limited to 63 chars, including the extension.
 * - The section name is limited to 32 characters.
 * - It can also be used to get sfall settings by using **ddraw.ini** as the file name.
 * 
 */
export declare function get_ini_setting(setting: string): number;

/**
 * Returns the value of ModifiedIni setting in [Main] section of the INI.
 */
export declare function modified_ini(): number;


// =============================================================================
// Other
// =============================================================================

/**
 * Obsolete since sfall 2.1a. Always returns 0.
 */
export declare function eax_available(): number;

/**
 * Obsolete since sfall 2.1a. Has no effect.
 */
export declare function set_eax_environment(environment: number): void;

/**
 * Allows overriding the normal rules regarding which weapons are allowed to make aimed attacks. (e.g. weapons that cause explosive damage normally cannot normally make aimed shots.) stops a weapon from making aimed shots even if it normally coulld. Affects player and NPCs alike. The list of edited weapons is not saved over game loads, so you need to call the function once at each reload. Use a pid of 0 to represent unarmed.
 */
export declare function disable_aimed_shots(pid: number): void;

/**
 * Allows overriding the normal rules regarding which weapons are allowed to make aimed attacks. (e.g. weapons that cause explosive damage normally cannot normally make aimed shots.) Will allow a weapon to make aimed shots even if it normally couldn't. Affects player and NPCs alike. Does not override the effects of the fast shot trait. The list of edited weapons is not saved over game loads, so you need to call the function once at each reload. Use a pid of 0 to represent unarmed.
 */
export declare function force_aimed_shots(pid: number): void;

/**
 * Gets current critical table. For details see [critical hit tables](http://falloutmods.wikia.com/wiki/Critical_hit_tables). Requires `OverrideCriticalTable` to be enabled in `ddraw.ini` (already enabled by default).
 */
export declare function get_critical_table(crittertype: number, bodypart: number, level: number, valuetype: number): number;

/**
 * Will return the last critter to be deliberately attacked. Outside of combat always returns 0.
 */
export declare function get_last_target(critter: ObjectPtr): ObjectPtr;

/**
 * Resets the critical table to default (or to the contents of `CriticalOverrides.ini`, if it exists). For details see 'http://falloutmods.wikia.com/wiki/Critical_hit_tables'. Requires `OverrideCriticalTable` to be set to 1 in `ddraw.ini`. (Disabled by default, because it noticably increases loading times.)
 */
export declare function reset_critical_table(crittertype: number, bodypart: number, level: number, valuetype: number): void;

/**
 * Used for modifying the critical table. For details see [critical hit tables](http://falloutmods.wikia.com/wiki/Critical_hit_tables). Changes are not saved, and will reset to the defaults (or to the contents of `CriticalOverrides.ini`, if it exists) at each game reload. Requires `OverrideCriticalTable` to be enabled in `ddraw.ini` (already enabled by default).
 */
export declare function set_critical_table(crittertype: number, bodypart: number, level: number, valuetype: number, value: number): void;




/**
 * These functions require an __EXACTLY 8 characters long__, case sensitive string for the variable name. The variables behave the same as normal Fallout globals, except that they don't have to be declared beforehand in `vault13.gam`. Trying to get a variable which hasn't been set will always return 0. The functions are intended for use when a patch to a mod requires the addition of a new global variable, a case which would otherwise require the player to start a new game.
 */
export declare function get_sfall_global_float(varname: any): number;

/**
 * These functions require an __EXACTLY 8 characters long__, case sensitive string for the variable name. The variables behave the same as normal Fallout globals, except that they don't have to be declared beforehand in `vault13.gam`. Trying to get a variable which hasn't been set will always return 0. The functions are intended for use when a patch to a mod requires the addition of a new global variable, a case which would otherwise require the player to start a new game.
 */
export declare function get_sfall_global_int(varname: any): number;

/**
 * These functions require an __EXACTLY 8 characters long__, case sensitive string for the variable name. The variables behave the same as normal Fallout globals, except that they don't have to be declared beforehand in `vault13.gam`. Trying to get a variable which hasn't been set will always return 0. The functions are intended for use when a patch to a mod requires the addition of a new global variable, a case which would otherwise require the player to start a new game.
 */
export declare function set_sfall_global(varname: any, value: any): void;

/**
 * The graphics functions are only available if the user is using graphics mode 4 or 5. Use `graphics_funcs_available` to check; it returns 1 if you can use them or 0 if you can't. Calling graphics functions when `graphics_funcs_available` returns 0 will do nothing.
 */
export declare function set_palette(path: string): void;

/**
 * Gets the next argument from sfall. Each time it's called it returns the next argument, or otherwise it returns 0 if there are no more arguments left. You can arbitrarily get the value of any argument using the `sfall_func1("get_sfall_arg_at", argNum)` function.
 */
export declare function get_sfall_arg(): any;


/**
 * Returns all hook arguments as a new temp array.
 */
export declare function get_sfall_args(): number;

/**
 * Changes argument value. The argument number (`argNum`) is 0-indexed. This is useful if you have several hook scripts attached to one hook point (see `register_hook_proc`).
 */
export declare function set_sfall_arg(argNum: number, value: number): void;

/**
 * Used to return the new values from the script. Each time it's called it sets the next value, or if you've already set all return values it does nothing.
 */
export declare function set_sfall_return(value: any): void;

/**
 * Returns the number of the mouse button that is currently pressed (1 - left, 2 - right, 3 - left+right, 4 - middle, 0 otherwise).
 */
export declare function get_mouse_buttons(): number;

export declare function get_mouse_x(): number;

export declare function get_mouse_y(): number;

/**
 * The `type` value in the weapon knockback functions can be 0 or 1. If 0, the value becomes an absolute distance that targets will be knocked back. If 1, the value is multiplied by the distance they would normally have been knocked back. Weapon knockback modifiers are applied in the order weapon -> attacker -> target, so a x2 weapon wielded by an abs 6 attacker hitting a /2 target will knock the target back 3 squares. The knockback functions will not override the stonewall perk or knockdowns resulting from criticals. knockback values set on weapons or critters are not saved, and must be reset each time the player reloads.
 */
export declare function remove_target_knockback(CritterPtr: any): void;

/**
 * The `type` value in the weapon knockback functions can be 0 or 1. If 0, the value becomes an absolute distance that targets will be knocked back. If 1, the value is multiplied by the distance they would normally have been knocked back. Weapon knockback modifiers are applied in the order weapon -> attacker -> target, so a x2 weapon wielded by an abs 6 attacker hitting a /2 target will knock the target back 3 squares. The knockback functions will not override the stonewall perk or knockdowns resulting from criticals. knockback values set on weapons or critters are not saved, and must be reset each time the player reloads.
 */
export declare function set_target_knockback(CritterPtr: any, type: number, value: number): void;








/**
 * Absolute (positive) value of x.
 */
export declare function abs(): any;

/**
 * Arctangent of x. Pass 1 as y (don't ask...).
 */
export declare function arctan(x: number, y: number): number;

/**
 * Round x to the nearest integer that is not less than x.
 */
export declare function ceil(x: number): number;

/**
 * Cosine of x
 */
export declare function cos(x: number): number;

/**
 * Unsigned integer division. Use as a division operator, like `3 + (20 div 5)`.
 * If both dividend and divisor are integers, they will be treated as unsigned integers.
 * If one of them is a float, div will perform the signed division just like vanilla division operator.
 * 
 */
export declare function div(x: any, y: any): void;

/**
 * E^X
 */
export declare function exponent(x: number): number;


/**
 * Natural logarithm of x.
 */
export declare function log(x: number): number;

/**
 * Round x to the nearest integer.
 */
export declare function round(x: number): number;

/**
 * Sine of x
 */
export declare function sin(x: number): number;

/**
 * Square root of x.
 */
export declare function sqrt(x: number): number;

/**
 * Tangent of x
 */
export declare function tan(x: number): number;





/**
 * Overrides the script's `self_obj` for the next function call.
 * - It is primarily used to allow the calling of functions which take an implicit `self_obj` parameter (e.g. `drop_obj`) from global scripts, but it can also be used from normal scripts.
 * - `self_obj` will be reverted to its original value after the next function call.
 * - Calling `set_self(0)` will also revert `self_obj` to its original value. It is recommended to call this after each use of `set_self` in normal scripts in order to avoid unforeseen side effects.
 * - `source_obj`, `target_obj`, and similar functions will not work if preceded by `set_self`.
 * - __NOTE:__ for `use_obj`, `use_obj_on_obj` vanilla functions to work correctly, it is required to call `set_self` twice. You can also access the local variables in the script of an object after calling `set_self` twice.
 * 
 */
export declare function set_self(setObj: ObjectPtr): void;

export declare function active_hand(): number;

/**
 * Adds a timer event that calls the `timed_event_p_proc` procedure in the current global script
 * `time`: the number of ticks after which the event timer is triggered
 * `fixedParam`: the value that is passed to the `timed_event_p_proc` procedure for the `fixed_param` function
 * 
 */
export declare function add_g_timer_event(time: number, fixedParam: number): void;

/**
 * Creates new spatial script with given SID, at given tile, and radius.
 */
export declare function create_spatial(scriptID: number, tile: number, elevation: number, radius: number): ObjectPtr;

/**
 * Returns 1 the first time it is called after a new game or game load, and 0 any time after. It works on an individual basis for each script, so one script wont interfere with others. Its primary use is for global scripts, so that they know when to call `set_global_script_repeat`, but it can be called from normal scripts too.
 */
export declare function game_loaded(): number;

/**
 * A more flexible version of in_world_map. It will return a set of flags indicating which mode the game is currently in. These flags are the same as those used in the `set_shader_mode function`.
 */
export declare function get_game_mode(): number;

export declare function get_kill_counter(critterType: number): number;

/**
 * Returns ambient light level in range 0..65536. The value returned by get_light_level may not exactly match that set by `set_light_level`, as `set_light_level` applies modifiers from the Night Vision perk.
 */
export declare function get_light_level(): number;

/**
 * Gets the AC bonus you receive per unused action point at the end of your turn in combat. To allow for fractional values, the value given if divided by 4. (Hence the default value is 4 and not 1.)
 */
export declare function get_unspent_ap_bonus(): number;

/**
 * Sets the AC bonus you receive per unused action point at the end of your turn in combat. To allow for fractional values, the value given is divided by 4. (Hence the default value is 4 and not 1.) Use 0 to disable the bonus.
 */
export declare function set_unspent_ap_bonus(multiplier: number): void;

/**
 * Just a wrapper around the windows GetTickCount() function. It's useful for making time fade effects in shaders, since they already have access to the current tick count.
 */
export declare function get_uptime(): number;

export declare function get_viewport_x(): number;

export declare function get_viewport_y(): number;

export declare function get_year(): number;

/**
 * The input functions are only available if the user has the input hook turned on in `ddraw.ini`. Use `input_funcs_available` to check.
 */
export declare function input_funcs_available(): number;

export declare function mark_movie_played(id: number): void;

export declare function mod_kill_counter(critterType: number, amount: number): void;

/**
 * `nb_*` functions are reserved for the brotherhood tactical training mod, and should be avoided. Not implemented, always returns 0.
 */
export declare function nb_create_char(): number;

export declare function resume_game(): void;

export declare function set_base_hit_chance_mod(max: number, mod: number): void;

/**
 * Changes maximum chance of success and chance mod for each steal attempt. `max` will replace 95% success chance cap (so you can set 100% maximum chance, for instance). `mod` will add this much percent to each success chance. for example if your chance is 50% and `mod` is 20, you will get 70% actual success rate
 */
export declare function set_base_pickpocket_mod(max: number, mod: number): void;

export declare function set_df_model(name: string): void;

export declare function set_dm_model(name: string): void;

/**
 * Effects all critters rather than just the player and can set the maximum in range from 0 to 999.
 */
export declare function set_hit_chance_max(percentage: number): void;

export declare function set_hp_per_level_mod(mod: number): void;

export declare function set_movie_path(filename: string, movieid: number): void;

/**
 * Effects all critters rather than just the player and can set the maximum in range from 0 to 999.
 */
export declare function set_pickpocket_max(percentage: number): void;

/**
 * Sets the availability of the pipboy in the game. Use 0 to disable the pipboy, and 1 or 2 to enable it (value 2 does not mark the `VSUIT_MOVIE` movie as "played").
 */
export declare function set_pipboy_available(available: number): void;


export declare function set_viewport_x(view_x: number): void;

export declare function set_viewport_y(view_y: number): void;

export declare function set_xp_mod(percentage: number): void;


/**
 * Returns 1 if last sneak attempt (roll against skill) was successful, 0 otherwise. This calls an internal engine function which is used to determine the perception range of critters (which you can override using `HOOK_WITHINPERCEPTION`).
 */
export declare function sneak_success(): number;

export declare function stop_game(): void;

export declare function toggle_active_hand(): void;





export declare function apply_heaveho_fix(): void;

/**
 * Returns the number of levels the player has of the traits with the given name or ID of extra trait.
 */
export declare function has_fake_trait(name: string): number;

export declare function remove_trait(traitID: number): void;

/**
 * Used to add additional traits and perks to the character screen. They will be saved correctly when the player saves and reloads games, but by themselves they will have no further effect on the character. For perks, the allowed range for levels is between 0 and 100; setting the level to 0 removes that perk. For traits, the level must be 0 or 1. The image is a numeric ID that corresponds to an entry in `skilldex.lst`. The name is limited to 63 characters and the description to 255 characters by sfall, but internal Fallout limits may be lower.
 */
export declare function set_fake_trait(name: string, active: number, image: number, desc: string): void;

export declare function set_pyromaniac_mod(bonus: number): void;

export declare function set_swiftlearner_mod(bonus: number): void;


/**
 * Returns names of all currently available script functions.
 */
export declare function get_metarule_table(): any[];







export declare function get_available_skill_points(): number;

/**
 * Accepts a value of between -100 and 100, and modifies the number of skill points the player recieves when they level up. This is a modification of what would otherwise happen, rather than a replacement. The value is not saved into the save game, so should be reset in the `game_loaded` section of a script.
 */
export declare function mod_skill_points_per_level(value: number): void;

export declare function set_available_skill_points(value: number): void;

export declare function set_base_skill_mod(max: number): void;

/**
 * Can't be used to increase the skill cap above 300.
 */
export declare function set_skill_max(value: number): void;

/**
 * Returns ASCII code for the first character in given string.
 */
export declare function charcode(text: string): number;

/**
 * Returns string length.
 */
export declare function strlen(text: string): number;

/**
 * Cuts a substring from a string starting at "start" up to "length" characters. The first character position is 0 (zero).
 * - If start is negative - it indicates a position starting from the end of the string (for example `substr("test", -2, 2)` will return last 2 charactes: "st").
 * - If length is negative - it means so many characters will be omitted from the end of string (example: `substr("test", 0, -2)` will return string without last 2 characters: "te").
 * - If length is zero - it will return a string from the starting position to the end of the string. **New behavior** for sfall 4.2.2/3.8.22
 * 
 */
export declare function substr(text: string, start: number, length: number): string;

/**
 * Returns the shortest path to a given tile using given blocking function as an array of tile directions (0..5) to move on each step. Array length equals to a number of steps. Empty array means that specified target cannot be reached.
 */
export declare function path_find_to(objFrom: ObjectPtr, tileTo: number, blockingType: number): any[];

export declare function atof(text: string): number;

export declare function atoi(text: string): number;

/**
 * Formats given value using standart syntax of C `printf` function (google "printf" for format details). However, it is limited to formatting only 1 value.
 * - Can be used to get character by ASCII code ("%c").
 * 
 */
export declare function sprintf(format: string, value: any): string;

export declare function sfall_ver_build(): number;

export declare function sfall_ver_major(): number;

export declare function sfall_ver_minor(): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_copy(path: string, source: string): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_create(path: string, size: number): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_delete(id: number): void;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_find(path: string): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_pos(id: number): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_read_byte(id: number): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_read_float(id: number): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_read_int(id: number): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_read_short(id: number): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_resize(id: number, size: number): void;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_seek(id: number, pos: number): void;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_size(id: number): number;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_write_byte(id: number, data: number): void;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_write_float(id: number, data: number): void;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_write_int(id: number, data: number): void;

/**
 * The `fs_*` functions are used to manipulate a virtual file system. Files saved here should have paths relative to the data folder, and use backslashes as the directory separator. They will take precedence over files stored in the normal data folder. They will also be saved into save games if you set a flag for them using `fs_resize(fileId, -1)`, so be avoid creating large files. Using `fs_copy` followed by `fs_read_xxx`, you can read the contents of existing files.
 */
export declare function fs_write_short(id: number, data: number): void;

/**
 * Alternative form: `int sfall_func2("get_window_attribute", int winType, int attrType)`
 * Returns the attribute of the specified interface window by the `attrType` argument.
 * - `winType`: the type number of the interface window (see `WINTYPE_*` constants in **sfall.h**)
 * - `attrType`: `0` - checks and returns a value of 1 if the specified interface window is created by the game (same as without the argument)
 *               `1` - X position, `2` - Y position (relative to the top-left corner of the game screen)
 *               `3` - interface width size, `4` - interface height size
 *               `5` - window ID (to compare with the `get_window_under_mouse` function)
 *               `-1` - returns an associative array of keys (left, top, right, bottom) and values that define the position of the window rectangle
 *               (use standard syntax to access array values, e.g. `winRect.top`, `winRect.bottom`)
 * - returns -1 if the specified attribute cannot be obtained
 * 
 */
export declare function get_window_attribute(winType: number): number;

/**
 * Returns the internal ID of the top-most window under mouse cursor.
 */
export declare function get_window_under_mouse(): number;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_r0(address: number): number;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_r1(address: number, arg1: number): number;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_r2(address: number, arg1: number, arg2: number): number;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_r3(address: number, arg1: number, arg2: number, arg3: number): number;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_r4(address: number, arg1: number, arg2: number, arg3: number, arg4: number): number;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_v0(address: number): void;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_v1(address: number, arg1: number): void;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_v2(address: number, arg1: number, arg2: number): void;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_v3(address: number, arg1: number, arg2: number, arg3: number): void;

/**
 * Can be used to call arbitrary functions inside Fallout. Different versions are used to call functions with different numbers of arguments. _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function call_offset_v4(address: number, arg1: number, arg2: number, arg3: number, arg4: number): void;

/**
 * Calls script function with given name and no arguments.
 */
export declare function sfall_func0(funcName: string): any;

/**
 * Calls script function with given name and 1 argument.
 */
export declare function sfall_func1(funcName: string, arg1: any): any;

/**
 * Calls script function with given name and 2 arguments.
 */
export declare function sfall_func2(funcName: string, arg1: any, arg2: any): any;

/**
 * Calls script function with given name and 3 arguments.
 */
export declare function sfall_func3(funcName: string, arg1: any, arg2: any, arg3: any): any;

/**
 * Calls script function with given name and 4 arguments.
 */
export declare function sfall_func4(funcName: string, arg1: any, arg2: any, arg3: any, arg4: any): any;

/**
 * Calls script function with given name and 5 arguments.
 */
export declare function sfall_func5(funcName: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): any;

/**
 * Calls script function with given name and 6 arguments
 */
export declare function sfall_func6(funcName: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): any;

/**
 * Calls script function with given name and 7 arguments
 */
export declare function sfall_func7(funcName: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any): any;

/**
 * Calls script function with given name and 8 arguments
 */
export declare function sfall_func8(funcName: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any): any;

/**
 * These functions take a memory address as the parameter and can read arbitrary pieces of Fallout's address space.
 */
export declare function read_byte(address: number): number;

/**
 * These functions take a memory address as the parameter and can read arbitrary pieces of Fallout's address space.
 */
export declare function read_int(address: number): number;

/**
 * These functions take a memory address as the parameter and can read arbitrary pieces of Fallout's address space.
 */
export declare function read_short(address: number): number;

/**
 * These functions take a memory address as the parameter and can write to arbitrary pieces of Fallout's address _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function write_byte(address: number, value: number): void;

/**
 * These functions take a memory address as the parameter and can write to arbitrary pieces of Fallout's address _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function write_int(address: number, value: number): void;

/**
 * These functions take a memory address as the parameter and can write to arbitrary pieces of Fallout's address _None of these functions will work unless_ `AllowUnsafeScripting` _is enabled in_ `ddraw.ini`.
 */
export declare function write_short(address: number, value: number): void;

/**
 * Returns the type of a value. Use VALTYPE_* constants to check the result.
 * Note: Named `sfall_typeof` to avoid conflict with TypeScript's `typeof` keyword.
 * The TSSL transpiler will output this as `typeof` in the generated SSL.
 */
export declare function sfall_typeof(value: any): number;
