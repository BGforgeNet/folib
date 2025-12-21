import { global_var } from "../base.d";
import { bit_1 } from "../sfall/define_lite";
import { GVAR_MODOC_GENERIC_FLAG_1 } from "./global";

/** @inline */
export function shitter_has_blown(): boolean {
    return (global_var(GVAR_MODOC_GENERIC_FLAG_1) & bit_1) != 0;
}

export const SCRIPT_MISHTRKS = 208;
