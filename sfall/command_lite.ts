// Command macros from command_lite.h

import { ObjectPtr } from "../index";
import { dude_obj, self_obj, tile_num, elevation, obj_name } from "../base.d";

/** @inline */
export function dude_tile(): number {
    return tile_num(dude_obj);
}

/** @inline */
export function dude_elevation(): number {
    return elevation(dude_obj);
}

/** @inline */
export function dude_name(): string {
    return obj_name(dude_obj);
}

/** @inline */
export function self_tile(): number {
    return tile_num(self_obj);
}

/** @inline */
export function self_elevation(): number {
    return elevation(self_obj);
}
