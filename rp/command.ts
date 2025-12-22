import { elevation, dude_obj, get_critter_stat, global_var } from "../base.d";
import { len_array } from "../sfall/sfall.d";
import { party_member_list_critters } from "../sfall/sfall";
import { STAT_ch } from "../sfall/define_lite";
import { GVAR_PLAYER_GOT_CAR } from "./global";
import type { Elevation } from "../index";

export function dude_elevation(): Elevation {
    return elevation(dude_obj);
}

/** @inline */
export function dude_charisma(): number {
    return get_critter_stat(dude_obj, STAT_ch);
}

/** @inline */
export function dude_has_car(): number {
    return global_var(GVAR_PLAYER_GOT_CAR);
}

/** Party size excluding dude_obj */
export function true_party_size(): number {
    return len_array(party_member_list_critters()) - 1;
}

export const TEAM_PLAYER = 0;
