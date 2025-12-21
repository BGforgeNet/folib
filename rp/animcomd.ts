import type { ObjectPtr } from "../index";
import { reg_anim_func } from "../base.d";

// Animation registration command constants
export const REG_ANIM_BEGIN = 1;

// Death animation types
export const ANIM_electrified_to_nothing = 30;
export const ANIM_exploded_to_nothing = 31;
export const ANIM_electrified_to_nothing_sf = 58;
export const ANIM_exploded_to_nothing_sf = 59;
export const REG_ANIM_CLEAR = 2;
export const REG_ANIM_END = 3;
export const RB_UNRESERVED = 1;
export const RB_RESERVED = 2;

/**
 * Terminates all animations that are currently registered for a given object.
 * @param obj Object to clear animations for
 */
export function reg_anim_clear(obj: ObjectPtr): void {
    reg_anim_func(REG_ANIM_CLEAR, obj);
}

/**
 * Begin an unreserved animation sequence.
 * Must be followed by reg_anim_end() after registering animations.
 * @inline
 */
export function reg_anim_begin(): void {
    reg_anim_func(REG_ANIM_BEGIN, RB_UNRESERVED);
}
