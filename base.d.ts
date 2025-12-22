// Fallout 2 engine builtins (external - not bundled into output)

import type { ObjectPtr, CritterPtr, ItemPtr, DoorPtr, ContainerPtr, SkillID, ObjType, StatID, InvenSlot, TraitType, FloatMsgColor, PerkID, TraitID, PcStatID, CritterState } from "./index";

// =============================================================================
// Runtime Globals
// =============================================================================

/** Returns a pointer to the dude object (the player) */
export declare const dude_obj: CritterPtr;

/** Returns a pointer to the object connected to this script */
export declare const self_obj: ObjectPtr;

/** Returns a pointer to the source object (activator) for this action */
export declare const source_obj: ObjectPtr;

/** Returns a pointer to the target object for this action */
export declare const target_obj: ObjectPtr;

/** Returns a pointer to the object being used on another object */
export declare const obj_being_used_with: ObjectPtr;

/** Returns the current skill being used on a script object */
export declare const action_being_used: number;

/** Returns the value of the script's fixed parameter (used with add_timer_event) */
export declare const fixed_param: number;

/** Returns the action that has activated this script */
export declare const script_action: number;

// =============================================================================
// Map & Location Globals
// =============================================================================

/** Returns the index # of the current map */
export declare const cur_map_index: number;

/** Returns the number of days since this map was last visited, or -1 if never */
export declare const days_since_visited: number;

// =============================================================================
// Game Time Globals
// =============================================================================

/** Returns the current game time in ticks */
export declare const game_time: number;

/** Returns the current hour (e.g., 721 = 7:21 am) */
export declare const game_time_hour: number;

// =============================================================================
// Game State Globals
// =============================================================================

/** Returns true if the system is currently in combat mode */
export declare const combat_is_initialized: boolean;

/** Returns true if the game UI is currently disabled */
export declare const game_ui_is_disabled: boolean;

/** Returns the current Game difficulty level (0-2) */
export declare const difficulty_level: number;

/** Returns the current Combat difficulty level (0-2) */
export declare const combat_difficulty: number;

/** Returns the running-burning-guy setting */
export declare const running_burning_guy: number;

// =============================================================================
// Object Functions
// =============================================================================

/** Returns the subtype of an item object (weapon, armor, etc.) */
export declare function obj_item_subtype(obj: ItemPtr): number;

/** Returns the type of an object (Item, Wall, Scenery, Critter, etc.) */
export declare function obj_type(obj: ObjectPtr): ObjType;

/** Returns the prototype id # (pid) of an object */
export declare function obj_pid(obj: ObjectPtr): number;

/** Returns the name of an object */
export declare function obj_name(obj: ObjectPtr): string;

/** Returns the object's elevation (0-2) */
export declare function elevation(obj: ObjectPtr): number;

/** Returns the tile number of an object */
export declare function tile_num(obj: ObjectPtr): number;

/** Returns the fid # (art index) of an object */
export declare function obj_art_fid(obj: ObjectPtr): number;

/** Returns true if the object is currently visible on-screen */
export declare function obj_on_screen(obj: ObjectPtr): boolean;


/** Returns true if the object is locked */
export declare function obj_is_locked(obj: DoorPtr | ContainerPtr): boolean;

/** Returns true if the object is open */
export declare function obj_is_open(obj: DoorPtr | ContainerPtr): boolean;

/** Lock an object */
export declare function obj_lock(obj: DoorPtr | ContainerPtr): void;

/** Unlock an object */
export declare function obj_unlock(obj: DoorPtr | ContainerPtr): void;

/** Open an object */
export declare function obj_open(obj: DoorPtr | ContainerPtr): void;

/** Close an object */
export declare function obj_close(obj: DoorPtr | ContainerPtr): void;

/**
 * Sets the `OBJ_OFF` flag for an object (makes it not drawn).
 * Note: visibility arg is inverted - `set_obj_visibility(who, true)` makes object invisible.
 * Does not work when loading game.
 */
export declare function set_obj_visibility(obj: ObjectPtr, invisible: boolean): void;

/**
 * Set the light level for an object to a given intensity (0-100, percentage of maximum)
 * and distance of light in hexes (0-8).
 */
export declare function obj_set_light_level(obj: ObjectPtr, intensity: number, distance: number): void;

// =============================================================================
// Object Creation & Destruction
// =============================================================================

/**
 * Creates a new object of prototype (pid) at a given tile and elevation (0-2).
 * If sid is not -1, it overrides the default script with the specified script #.
 */
export declare function create_object_sid(pid: number, tile: number, elev: number, sid: number): ObjectPtr;

/**
 * Destroys an object, which will call its script in the destroy_proc section
 * if the object is NOT the calling object.
 */
export declare function destroy_object(obj: ObjectPtr): number;

/** Destroys count instances of an item object */
export declare function destroy_mult_objs(item: ItemPtr, count: number): number;

// =============================================================================
// Object Movement
// =============================================================================

/**
 * Immediately moves object to the given tile number and elevation (0-2) on the current map.
 * Using this to change elevations during loading an in-combat save will lead to a crash.
 * If called in `map_enter_p_proc`, wrap in `not_is_loading_game` to avoid the crash.
 */
export declare function move_to(obj: ObjectPtr, tile: number, elev: number): number;

/**
 * Attempts to place a critter at a given destination hex & elevation (0-2).
 * If it fails, it tries to find a nearby hex as near as possible to the start hex.
 */
export declare function critter_attempt_placement(who: CritterPtr, hex: number, elev: number): number;

// =============================================================================
// Object Perception
// =============================================================================

/**
 * Returns True if the source object has line-of-sight (LOS) with the destination object.
 * This also takes into account perception & stealth rolls if the objects are critters.
 */
export declare function obj_can_see_obj(src: ObjectPtr, dst: ObjectPtr): boolean;

/** Returns true if src_obj can hear dst_obj */
export declare function obj_can_hear_obj(src: ObjectPtr, dst: ObjectPtr): boolean;

// =============================================================================
// Critter Functions
// =============================================================================

/** Returns the state of a critter (dead, unconscious, etc.) */
export declare function critter_state(who: CritterPtr): CritterState;

/**
 * @deprecated Use `critter_inven_obj2` instead.
 * Returns a pointer to an object that is in a given spot (NULL if none).
 * The appropriate values for where are: `INVEN_TYPE_WORN`, `INVEN_TYPE_RIGHT_HAND`,
 * and `INVEN_TYPE_LEFT_HAND`.
 */
export declare function critter_inven_obj(who: CritterPtr, slot: InvenSlot): ItemPtr;

/** Returns a critter stat value */
export declare function get_critter_stat(who: CritterPtr, stat: StatID): number;

/**
 * DOES NOT SET THE STAT.
 * Modifies attribute `stat` in critter `who` by value `mod`.
 */
export declare function set_critter_stat(who: CritterPtr, stat: StatID, mod: number): number;

/** Returns true if the critter has its FLEE flag set */
export declare function critter_is_fleeing(who: CritterPtr): boolean;

/** Sets the FLEE flag on or off */
export declare function critter_set_flee_state(who: CritterPtr, flee: boolean): void;

/** Flags the critter as no longer wishing to be active in combat */
export declare function critter_stop_attacking(who: CritterPtr): number;

/**
 * Adds a particular trait of a given type to a critter.
 * Possible traits under the SPECIAL system are limited to Perks, Traits,
 * Object-instance information (such as team #'s, ai-packet #'s, etc.)
 */
export declare function critter_add_trait(who: CritterPtr, traitType: number, trait: number, amount: number): number;

/** Removes a trait from a critter */
export declare function critter_rm_trait(who: CritterPtr, traitType: number, trait: number, amount: number): number;

/**
 * Returns the value of a critter's trait of a given trait_type (see define.h).
 * Can be used to determine if the player has a particular Perk, AI Packet, team num,
 * current rotation, or Trait (finesse, bruiser, etc.)
 * Also works with TRAIT_OBJECT for any object.
 */
export declare function has_trait(traitType: TraitType, who: ObjectPtr, trait: number): number;

/**
 * Modifies a given skill in a critter by a given amount.
 * Note: Only works on dude_obj! Will not work on other critters.
 * For tagged skills, the amount will be rounded down to the closest even number.
 */
export declare function critter_mod_skill(who: CritterPtr, skill: SkillID, amount: number): number;

/** Returns the critter's poison level */
export declare function get_poison(who: CritterPtr): number;

/** Modifies the critter's poison level by amount (can be negative) */
export declare function poison(who: CritterPtr, amount: number): void;

/** Increments a critter's radiation counter */
export declare function radiation_inc(who: CritterPtr, amount: number): void;

/** Decrements a critter's radiation counter */
export declare function radiation_dec(who: CritterPtr, amount: number): void;

// =============================================================================
// Critter Damage & Healing
// =============================================================================

/**
 * Inflicts damage on a critter (who) of a given amount, killing it if necessary.
 * Use `DMG_*` flags to customize behaviour.
 */
export declare function critter_dmg(who: CritterPtr, amount: number, flags: number): void;

/**
 * Heals a critter for a given amount (if given a value above their MaxHP will go up to their maximum HP).
 * Note: can also input negative amounts, causing the critter to be hurt for that amount.
 * This is useful because it bypasses all resistances and thresholds.
 */
export declare function critter_heal(who: CritterPtr, amount: number): void;

/**
 * Injures a critter by crippling given limbs/body parts
 * (defined by DAM_CRIP_ARM_LEFT, DAM_BLIND, etc. in define.h).
 */
export declare function critter_injure(who: CritterPtr, how: number): number;

/**
 * Kills a critter outright, placing it in the chosen death frame.
 * Does NOT animate the critter and does NOT refresh the screen!
 * Meant to be used in scripts run when entering/exiting a map (map_init/map_exit).
 */
export declare function kill_critter(who: CritterPtr, deathFrame: number): void;

/**
 * Kills all critters of a given type (pid) outright.
 * NOTE: This can result in the 'frozen bodies' issue!
 * kill_critter should always be used instead if possible.
 */
export declare function kill_critter_type(pid: number): void;

// =============================================================================
// Inventory Functions
// =============================================================================

/**
 * Adds an object (item) to another object's (who's) inventory.
 * Note that this only works with objects of type Item.
 */
export declare function add_obj_to_inven(who: ObjectPtr, item: ItemPtr): void;

/** Adds count instances of an item to an object's inventory */
export declare function add_mult_objs_to_inven(who: ObjectPtr, item: ItemPtr, count: number): void;

/**
 * Removes an object from another object's inventory.
 * NOTE: this leaves the removed object at location (0,1) on the map!
 * You must call move_to(...) to place it back on the map.
 */
export declare function rm_obj_from_inven(who: ObjectPtr, item: ItemPtr): void;

/** Removes count items from inventory, returns actual count removed */
export declare function rm_mult_objs_from_inven(who: ObjectPtr, item: ItemPtr, count: number): number;

/** Moves all items from srcObj to destObj */
export declare function move_obj_inven_to_obj(src: ObjectPtr, dst: ObjectPtr): void;

/**
 * Returns an Object pointer to an instance of an object of type pid
 * if the object is carrying an object of that type.
 */
export declare function obj_carrying_pid_obj(who: ObjectPtr, pid: number): ItemPtr;

/** Returns the quantity of objects with matching pid in inventory */
export declare function obj_is_carrying_obj_pid(who: ObjectPtr, pid: number): number;

/** Returns the current caps total in an object's inventory */
export declare function item_caps_total(obj: ObjectPtr): number;

/**
 * Modifies the current caps count in an object by a given amount.
 * Can be positive or negative.
 */
export declare function item_caps_adjust(obj: ObjectPtr, amount: number): number;

// =============================================================================
// Wielding & Equipment
// =============================================================================

/**
 * Sets up an animation causing a critter to wield an object in that critter's inventory.
 * This puts that object in the critter's hand.
 */
export declare function wield_obj_critter(who: CritterPtr, obj: ItemPtr): void;

/** Causes self_obj to drop an object from inventory */
export declare function drop_obj(obj: ItemPtr): void;

/** Causes self_obj to animate and pick up an object */
export declare function pickup_obj(obj: ItemPtr): void;

// =============================================================================
// Proto Functions
// =============================================================================

/**
 * Returns the value (can be int or string) of a data-member of a given prototype (pid).
 */
export declare function proto_data(pid: number, field: number): number;


// =============================================================================
// Tile Functions
// =============================================================================

/** Returns the tile distance between two tiles */
export declare function tile_distance(tile1: number, tile2: number): number;

/** Returns the tile distance between two objects */
export declare function tile_distance_objs(obj1: ObjectPtr, obj2: ObjectPtr): number;

/**
 * Returns the tile number of a tile offset from a starting tile in a given direction
 * (0-5, the next tile in that direction).
 */
export declare function tile_num_in_direction(tile: number, direction: number, distance: number): number;

/** Returns true if a tile is currently visible on-screen */
export declare function tile_is_visible(tile: number): boolean;

/** Returns true if a tile contains an object with matching pid */
export declare function tile_contains_obj_pid(tile: number, elev: number, pid: number): boolean;

/** Returns the first object matching pid on a tile */
export declare function tile_contains_pid_obj(tile: number, elev: number, pid: number): ObjectPtr;

/**
 * Returns the rotation (0-5) to face a particular tile (destTile) from srcTile.
 */
export declare function rotation_to_tile(srcTile: number, destTile: number): number;

// =============================================================================
// Combat Functions
// =============================================================================

/**
 * Causes self_obj (must be a critter) to attack a critter with various parameters:
 * - calledShot: 0/1/specific means none/random/specific (head, torso, etc.)
 * - numAttacks: # of extra attacks self gets before the target
 * - bonus: bonus to hit the target on the first turn only
 * - minDamage/maxDamage: damage range for the first attack
 * - attackerResults: what state the attacker ends in after the first attack
 * - targetResults: what state the target ends in after the first attack
 */
export declare function attack_complex(
    who: CritterPtr,
    calledShot: number,
    numAttacks: number,
    bonus: number,
    minDamage: number,
    maxDamage: number,
    attackerResults: number,
    targetResults: number
): void;

/**
 * Sets up an attack from who on victim, without expecting this script to be involved.
 * Can be used to setup attacks on critters from the map script.
 */
export declare function attack_setup(who: CritterPtr, victim: CritterPtr): void;

/**
 * Tells the combat system to terminate prematurely. USE WITH CAUTION.
 * This doesn't prevent another (or even the SAME) script from re-starting combat,
 * so make sure you turn off any hostile flags, etc.
 */
export declare function terminate_combat(): void;

// =============================================================================
// Skill & Stat Checks
// =============================================================================

/**
 * Returns the level of the skill (0-17) of the target critter.
 * Returns 0-200 for Fallout 1, 0-300 for Fallout 2.
 */
export declare function has_skill(who: CritterPtr, skill: SkillID): number;

/** Returns a pc-only stat value (PCSTAT_*) */
export declare function get_pc_stat(stat: PcStatID): number;

/**
 * Performs a check/test-roll versus one of the basic traits (strength, perception, etc.).
 * Note: these cannot generate Critical Success or Critical Failure as they are a basic X==Y check.
 */
export declare function do_check(who: CritterPtr, check: number, modifier: number): number;

/**
 * Returns the value of a completed skill roll made upon an object's skill level,
 * modified by a given amount (may be zero). This value may then be passed to
 * is_success and is_critical to determine states, and how_much can be used to
 * determine the difference succeeded or failed by.
 */
export declare function roll_vs_skill(who: CritterPtr, skill: SkillID, modifier: number): number;

/** Returns the value of a completed skill vs skill contest */
export declare function skill_contest(skill: SkillID): number;

/** Returns true if the roll result is a success (including critical) */
export declare function is_success(rollResult: number): boolean;

/** Returns true if the roll result is a critical */
export declare function is_critical(rollResult: number): boolean;

/** Returns how much the rolls differed by */
export declare function how_much(val: number): number;

// =============================================================================
// Animation Functions
// =============================================================================

/**
 * Sets up a single-frame animation for the object that runs in the given direction.
 */
export declare function anim(who: ObjectPtr, anim: number, direction: number): void;

/** Returns the action frame of an art frame */
export declare function anim_action_frame(who: ObjectPtr, frame: number): number;

/**
 * Returns True if object is currently animating, otherwise False.
 * Can be used to determine if an object has completed an animation.
 */
export declare function anim_busy(who: ObjectPtr): boolean;

/**
 * Sets up an animation for a critter to walk to a given tile at a given speed (walk/run).
 * Speed can have a flag attached (see define.h) to force stopping current animation first.
 */
export declare function animate_move_obj_to_tile(who: CritterPtr, tile: number, speed: number): void;

/** Animate self_obj running to a tile */
export declare function animate_run_to_tile(tile: number): void;

/** Change self_obj's facing direction (0-5) */
export declare function animate_rotation(direction: number): void;

/** Change self_obj's animation frame */
export declare function animate_set_frame(frame: number): void;

/** Run self_obj's stand animation */
export declare function animate_stand(): void;

/** Run an object's stand animation */
export declare function animate_stand_obj(obj: ObjectPtr): void;

/** Run self_obj's stand animation in reverse */
export declare function animate_stand_reverse(): void;

/** Run an object's stand animation in reverse */
export declare function animate_stand_reverse_obj(obj: ObjectPtr): void;

// =============================================================================
// Registered Animation Functions
// =============================================================================

/** Low-level animation registration function */
export declare function reg_anim_func(cmd: number, arg: number | ObjectPtr): void;

/** Activate the animation sequence */
export declare function reg_anim_end(): void;

/**
 * Adds a single, in-place animation on an object to an animation sequence-list,
 * at a given delay from the previous animation (delay should always be -1).
 */
export declare function reg_anim_animate(obj: ObjectPtr, anim: number, delay: number): void;

/**
 * Adds a single, in-place animation to the sequence that will animate continuously
 * until something interrupts it. Delay should always be -1. Use very sparingly.
 */
export declare function reg_anim_animate_forever(obj: ObjectPtr, anim: number, delay: number): void;

/** Add a reversed animation to the sequence */
export declare function reg_anim_animate_reverse(obj: ObjectPtr, anim: number, delay: number): void;

/**
 * Adds an animation to cause a critter to attempt to walk to another object.
 * Delay should always be -1.
 */
export declare function reg_anim_obj_move_to_obj(who: CritterPtr, dest: ObjectPtr, delay: number): void;

/** Add a walk-to-tile animation */
export declare function reg_anim_obj_move_to_tile(who: CritterPtr, tile: number, delay: number): void;

/** Add a run-to-object animation */
export declare function reg_anim_obj_run_to_obj(who: CritterPtr, dest: ObjectPtr, delay: number): void;

/** Add a run-to-tile animation */
export declare function reg_anim_obj_run_to_tile(who: CritterPtr, tile: number, delay: number): void;

/**
 * Adds an animation to cause an object to play a sound effect at a given delay.
 */
export declare function reg_anim_play_sfx(who: ObjectPtr, sfx: string, delay: number): void;

// =============================================================================
// Timer Events
// =============================================================================

/**
 * Adds a timed event call to the queue at a given time offset to call an object's script.
 * Info is used to differentiate between timed event calls and is read back using fixed_param.
 * Note that time is in ticks (use game_ticks(seconds) to convert from seconds).
 */
export declare function add_timer_event(obj: ObjectPtr, ticks: number, info: number): void;

/**
 * Removes (clears) all timer events hooked to a given object's script.
 */
export declare function rm_timer_event(obj: ObjectPtr): void;

/** Returns game ticks for a number of seconds */
export declare function game_ticks(seconds: number): number;

/** Advances game time by ticks */
export declare function game_time_advance(ticks: number): void;

// =============================================================================
// Metarule Functions
// =============================================================================

/** Generic metarule function */
export declare function metarule(func: number, param: number): number;

/** Generic metarule3 function */
export declare function metarule3(func: number, param1: any, param2: any, param3: any): number;

/** Inventory commands function */
export declare function inven_cmds(obj: ObjectPtr, cmd: number, param: number): ObjectPtr;

// =============================================================================
// Variables
// =============================================================================

/**
 * Returns the value of a global variable by index.
 */
export declare function global_var(index: number): number;

/**
 * Sets the value of a global variable by index to a given value.
 */
export declare function set_global_var(index: number, value: number): void;

/**
 * Returns the value of a local variable by index.
 * Errors may occur if the script doesn't have local vars up to this number.
 */
export declare function local_var(index: number): number;

/**
 * Sets the value of a local variable by index to a given value.
 */
export declare function set_local_var(index: number, value: number): void;

/**
 * Returns the value of a map-global variable by index.
 */
export declare function map_var(index: number): number;

/** Sets a map variable value */
export declare function set_map_var(index: number, value: number): void;

// =============================================================================
// Party Functions
// =============================================================================

/**
 * Adds a critter into the list of party members.
 * This will also setup those objects so they will not be saved in maps, and certain other things.
 */
export declare function party_add(who: CritterPtr): void;

/**
 * Removes a critter from the list of party members.
 * This will also change those objects so that certain object- and map-level things will respond differently.
 */
export declare function party_remove(who: CritterPtr): void;

/**
 * Returns a CritterPtr to a party member that matches a given pid.
 * If that critter isn't currently a member of the party, returns NULL.
 */
export declare function party_member_obj(pid: number): CritterPtr;

// =============================================================================
// Dialogue Functions
// =============================================================================

/** Request the talk system for this object */
export declare function dialogue_system_enter(): void;

/**
 * Start the dialogue system focusing on a critter and in a given mood.
 * Sets up appropriate dialog windows, head art, etc.
 * Without this call, dialog windows will not come up, only grey boxes with text.
 *
 * Mood argument is unused in vanilla. Instead, LVAR 0 of the script is checked:
 * - LVAR > 10: good reaction (happy head)
 * - -10 > LVAR >= 10: neutral
 * - Else: angry head
 *
 * With sfall StartGDialogFix enabled, mood argument works:
 * - If mood == -1: use vanilla behaviour (check LVAR 0)
 * - Else: use argument value with same thresholds
 */
export declare function start_gdialog(msgFileNum: number, who: CritterPtr, mood: number, headNum: number, bgIdx: number): void;

/** End the dialogue system */
export declare function end_dialogue(): void;

/** Start a dialog sequence */
export declare function gSay_Start(): void;

/** End a dialog sequence */
export declare function gSay_End(varIndex: number): void;

/** Set up a reply (what the critter says) */
export declare function gSay_Reply(msgList: number, msgNum: number): void;

/**
 * Sets up a sayMessage, which is a reply with just a [Done] option.
 * The msg_list determines which message file to look in, and msg_num determines which line to use.
 */
export declare function gSay_Message(msgList: number, msgNum: number, reaction: number): void;

/**
 * Sets up an option-choice for a reply block, getting the string from the message file
 * and message number, which will cause a given reaction, and if chosen will jump to
 * the given target procedure.
 */
export declare function gSay_Option(msgList: number, msgNum: number, target: Function, reaction: number): void;

/**
 * Sets up an option-choice for a reply block if the player's IQ is >= iq_test,
 * getting the string from the message file and message number, which will cause a
 * given reaction, and if chosen will jump to the target procedure.
 * This is the only function that automatically accounts for Smooth Talker perk.
 */
export declare function giQ_Option(iqTest: number, msgList: number, msgNum: number, target: Function, reaction: number): void;

/** Set up a reaction animation */
export declare function dialogue_reaction(mood: number): void;

/** Switch to barter screen with modifier */
export declare function gdialog_mod_barter(modifier: number): number;

/** Set the barter modifier */
export declare function gdialog_set_barter_mod(modifier: number): void;

// =============================================================================
// Message Functions
// =============================================================================

/**
 * Returns a string from the message module for a given list and a given message number.
 */
export declare function message_str(list: number, msgNum: number): string;

/**
 * Displays a string on the in-game PDA display (lower-left hand corner).
 */
export declare function display_msg(message: string): void;

/**
 * Creates a floating-text message attached to an object using colors dictated by type.
 * There are two special types: WARNING is used to print a message centered on the screen
 * (such as for end-of-quest notifications), and SEQUENTIAL will cycle through the colors
 * to give critters different-colored messages to differentiate them.
 */
export declare function float_msg(who: ObjectPtr, message: string, color: FloatMsgColor): void;

/**
 * Prints a string to the debug monitor.
 * Should be used exclusively for debug information, instead of display_msg()!
 * The user will never see these messages unless they have debugging enabled and activated.
 * If they have debugging enabled and DEBUGLOG set, the messages will only show up in debug.log file.
 */
export declare function debug_msg(msg: string): void;

// =============================================================================
// Experience & Leveling
// =============================================================================

/**
 * Adds experience points to the player's total.
 * These points may then be used by the player to enhance skills, etc.
 */
export declare function give_exp_points(points: number): void;

/**
 * Tokenize a string at delimiters.
 * @param str The source string
 * @param offset Character offset to start from (use 0 or result of previous call)
 * @param delim Delimiter character
 * @returns The next token, or the offset position for next call
 */
export declare function tokenize(str: string, offset: number | string, delim: number | string): string | 0;

// =============================================================================
// Map & World Functions
// =============================================================================

/**
 * Loads a new map, removing all scripts currently running and passing on the
 * entrance location to the new map's map_init script. Can also use the number
 * representing the map in the map list (for example, between 0 to 64 in Fallout 1).
 */
export declare function load_map(mapName: string, startLocation: number): void;

/** Brings up the World Map screen */
export declare function world_map(): void;

/** Brings up the Town Map screen (Fallout 1 only) */
export declare function town_map(): void;

/** Sets the World Map coordinates for a town */
export declare function wm_area_set_pos(areaIdx: number, x: number, y: number): void;

/**
 * Sets the start location & rotation (0-5) for the next time this map is entered (loaded & run).
 */
export declare function set_map_start(x: number, y: number, elev: number, rot: number): void;

/**
 * Used when loading a new map, forces the player to start at a particular
 * location (x/y), elevation (0-2) and rotation (0-5) when first coming up.
 */
export declare function override_map_start(x: number, y: number, elev: number, rot: number): void;

/**
 * Sets all exit grids on a given elevation (markElev) to point to a destination
 * mapID (may be -1 to stay on this map), elevation, tileNum, and rotation.
 */
export declare function set_exit_grids(markElev: number, mapID: number, elev: number, tile: number, rot: number): void;

// =============================================================================
// UI Functions
// =============================================================================

/** Disables game UI input (must re-enable!) */
export declare function game_ui_disable(): void;

/** Re-enables game UI input */
export declare function game_ui_enable(): void;

/**
 * Does a palette fade to black. The time parameter is currently not actually used.
 */
export declare function gfade_out(time: number): void;

/**
 * Does a palette fade from black to the game palette.
 * The time parameter is currently not actually used.
 */
export declare function gfade_in(time: number): void;

/**
 * Sets the ambient light level (1-100). Range is Full Darkness to Full Daylight.
 * NOTE: level is NOT percentage, full darkness is not black screen.
 * set_light_level(0) corresponds to 25% brightness, and certain brightness levels cannot be set.
 */
export declare function set_light_level(level: number): void;

/** Sets the map background music */
export declare function set_map_music(mapID: number, soundPath: string): void;

// =============================================================================
// Sound Functions
// =============================================================================

/**
 * Starts a new sound effect to be played on the queue.
 */
export declare function play_sfx(sfxFileName: string): void;

// =============================================================================
// Movie Functions
// =============================================================================

/**
 * Plays one of the Fallout movies (full-screen, compressed, etc.).
 */
export declare function play_gmovie(movieNum: number): void;

/** Plays the endgame movie */
export declare function endgame_movie(): void;

/** Plays the endgame slideshow */
export declare function endgame_slideshow(): void;

// =============================================================================
// Lock Functions
// =============================================================================

/**
 * Jams a lock, preventing the player from picking it for approximately 24 hours.
 * Meant to be used when a player critically fails to pick a lock.
 */
export declare function jam_lock(obj: DoorPtr | ContainerPtr): number;

// =============================================================================
// Script Control
// =============================================================================

/** Sets the return value for C-engine node */
export declare function scr_return(): void;

/**
 * Tells the C-engine that the script will override default behavior for the object.
 * The C-engine will not attempt to do things it would normally do, expecting the script to handle them.
 * Commonly used for player actions on objects: looking at them, using them (opening doors),
 * or using items ON them (using a picklock or key on a door lock).
 */
export declare function script_overrides(): void;

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Returns a random value between min and max, inclusive.
 */
export declare function random(min: number, max: number): number;

/**
 * @deprecated Use `floor2` instead.
 * Works properly for positive values, but for negative ones functions like `ceil`
 * (rounds up instead of down).
 */
export declare function floor(value: number): number;

/** Returns the current day of the month */
export declare const get_day: number;

/** Returns the current month of the year */
export declare const get_month: number;

// =============================================================================
// Object Use Functions
// =============================================================================

/** Use a usable object */
export declare function use_obj(obj: ObjectPtr): void;

/**
 * Attempt to use an item object on a target object. This could be used to have a
 * critter use a Stimpack on the player, or to use a key on a door.
 */
export declare function use_obj_on_obj(item: ObjectPtr, target: ObjectPtr): ObjectPtr;

/** Returns true if an active skill is being used */
export declare function using_skill(who: CritterPtr, skill: SkillID): boolean;

// =============================================================================
// Named Events (sfall)
// =============================================================================

/** Adds a named event handler (fires once) */
export declare function AddNamedEvent(name: string, proc: Function): void;

/** Adds a named event handler (fires many times) */
export declare function AddNamedHandler(name: string, proc: Function): void;

/** Removes all handlers for a named event */
export declare function ClearNamed(event: string): void;

/** Signals a named event */
export declare function SignalNamed(event: string): void;

// =============================================================================
// Art Functions
// =============================================================================

/** Returns the animation type of a fid */
export declare function art_anim(fid: number): number;

// =============================================================================
// Explosion
// =============================================================================

/** Sets up an explosion at a tile */
export declare const explosion: number;
