// Scenery PIDs from scenepid.h
import { tile_contains_obj_pid } from "../base.d";
import type { Elevation } from "../index";

export const PID_BLOCKING_HEX = 33554499;
export const PID_BLOWN_ARROYO_CAVE_DOOR = 33555365;
export const PID_ARROYO_CAVE_DOOR = 33555366;
export const PID_TEMPLE_SKULL_POLE = 33555374;

// Navarro Door
export const PID_NS_NAVARRO_BUNKER_DOOR = 33554450;

// Sierra Base Entrance Door
export const PID_SIERRA_ENTRANCE_DOOR = 33555779;
export const PID_SIERRA_ENTRANCE_DOOR_EXP = 33555780;

// Enclave Puzzle Room Doors
export const PID_ENCLAVE_PUZZLE_DOOR_EW = 33556005;
export const PID_ENCLAVE_PUZZLE_DOOR_NS = 33556006;

// Klaxon Light
export const PID_EW_LIGHT = 33555259;
export const PID_NS_LIGHT = 33555260;
export const PID_EW_FLASHING_LIGHT = 33555339;
export const PID_NS_FLASHING_LIGHT = 33555340;

// Misc Trap Info
export const PID_CAVE_FLOOR_TRAP_VISIBLE = 33555383;
export const PID_CAVE_FLOOR_TRAP_DISARMED = 33555384;
export const PID_CAVE_FLOOR_TRAP_DEPRESSED = 33555385;
export const PID_METAL_FLOOR_TRAP_VISIBLE = 33555429;
export const PID_METAL_FLOOR_TRAP_DISARMED = 33555430;
export const PID_METAL_FLOOR_TRAP_DEPRESSED = 33555431;

// Mining Carts
export const PID_MINING_CART = 33555584;
export const PID_MINING_CART_PLANK = 33555585;
export const PID_MINING_CART_EXPLOSIVE = 33555586;
export const PID_MINING_CART_DESTROYED = 33556060;

// Military base entrance
export const PID_MB_DESTROYED_ROCKS_1 = 33556235;
export const PID_MB_DESTROYED_ROCKS_2 = 33556236;
export const PID_MB_DESTROYED_ROCKS_3 = 33556237;
export const PID_MB_DESTROYED_ROCKS_4 = 33556238;

// Force Fields
export const PID_NS_FORCE_FIELD = 33554921;
export const PID_EW_FORCE_FIELD = 33554922;
export const PID_NS_PAIN_FIELD = 33554923;
export const PID_EW_PAIN_FIELD = 33554924;
export const PID_EW_ANIM_FIELD = 33555980;
export const PID_NS_ANIM_FIELD = 33555981;

// Rocks Info
export const PID_LARGE_BLUE_ROCK_PILE = 33554513;
export const PID_CAVE_IN_ROCKS = 33554839;

// Grave site
export const PID_GRAVE_SITE = 33555444;
export const PID_GRAVE_HEADSTONE_1 = 33555445;
export const PID_GRAVE_HEADSTONE_2 = 33555446;
export const PID_GRAVE_HEADSTONE_3 = 33555447;
export const PID_GRAVE_HEADSTONE_4 = 33555448;

// Grave site crosses
export const PID_GRAVE_CROSS_1 = 33555669;
export const PID_GRAVE_CROSS_2 = 33555670;
export const PID_GRAVE_CROSS_3 = 33555671;
export const PID_GRAVE_CROSS_4 = 33555672;
export const PID_GRAVE_CROSS_5 = 33555673;
export const PID_GRAVE_CROSS_6 = 33555674;

// Car
export const PID_DRIVABLE_CAR = 33555441;

// Caravans
export const PID_EW_RED_CARAVAN = 33554959;
export const PID_EW_GREY_CARAVAN = 33554960;
export const PID_NS_RED_CARAVAN = 33554961;
export const PID_RED_CARAVAN_HANDLE = 33554962;
export const PID_NS_GREY_CARAVAN = 33554963;
export const PID_GREY_CARAVAN_HANDLE = 33554964;

// Broken Brain Bot
export const PID_BROKEN_BRAINBOT = 33555662;

// VDU (computer with a lot of monitors)
export const PID_VDU_WORKING = 33554488;
export const PID_VDU_NOT_WORKING = 33555233;
export const PID_VDU_NOT_WORKING2 = 33555232;

// Brahmin chunks
export const PID_BRAHMIN_CHUNK_1 = 33555731;
export const PID_BRAHMIN_CHUNK_2 = 33555732;
export const PID_BRAHMIN_CHUNK_3 = 33555733;
export const PID_BRAHMIN_CHUNK_4 = 33555734;
export const PID_BRAHMIN_CHUNK_5 = 33555735;
export const PID_BRAHMIN_CHUNK_6 = 33555736;

// Blood
export const PID_BLOOD_1 = 33555753;   // no bones
export const PID_BLOOD_2 = 33555754;
export const PID_BLOOD_3 = 33555755;
export const PID_BLOOD_4 = 33555756;
export const PID_BLOOD_5 = 33555757;
export const PID_BLOOD_6 = 33555758;
export const PID_BLOOD_7 = 33555759;   // bones
export const PID_BLOOD_8 = 33555760;
export const PID_BLOOD_9 = 33555761;

// Ghost Farm Stakes
export const PID_STAKE_1 = 33555648;   // with body
export const PID_STAKE_2 = 33555649;
export const PID_STAKE_3 = 33555650;
export const PID_STAKE_4 = 33555651;
export const PID_STAKE_5 = 33555652;
export const PID_STAKE_6 = 33555653;
export const PID_STAKE_7 = 33555654;   // with skull
export const PID_STAKE_8 = 33555655;
export const PID_STAKE_9 = 33555656;   // plain stake
export const PID_STAKE_10 = 33555657;
export const PID_STAKE_11 = 33555658;
export const PID_STAKE_12 = 33555659;

// Corn stalks
export const PID_CORN_1 = 33555395;
export const PID_CORN_2 = 33555396;
export const PID_CORN_3 = 33555397;
export const PID_CORN_4 = 33555398;
export const PID_CORN_5 = 33555399;
export const PID_CORN_6 = 33555400;

// Small goo
export const PID_SMALL_GOO_1 = 33555178;
export const PID_SMALL_GOO_2 = 33555179;
export const PID_SMALL_GOO_3 = 33555180;

// Radioactive goo
export const PID_RAD_GOO_1 = 33555417;
export const PID_RAD_GOO_2 = 33555418;
export const PID_RAD_GOO_3 = 33555419;
export const PID_RAD_GOO_4 = 33555420;

// Doors
export const PID_JAIL_DOOR_N_S = 33555013;

// Slagged Door
export const PID_SLAGGED_DOOR_BOTTOM = 33555810;
export const PID_SLAGGED_DOOR_TOP = 33555811;

// Out of business signs
export const PID_OUT_OF_BUSINESS_NORTH = 33555587;
export const PID_OUT_OF_BUSINESS_EAST = 33555588;

// Slot machines
export const PID_SLOT_FACING_2 = 33554898;
export const PID_SLOT_FACING_3 = 33554897;

// Scenery subtypes
export const PRODATA_SC_TYPE = 32;
export const SC_TYPE_DOOR = 0;
export const SC_TYPE_STAIRS = 1;
export const SC_TYPE_ELEVATOR = 2;
export const SC_TYPE_LADDER_TOP = 3;
export const SC_TYPE_LADDER_BOTTOM = 4;

export function tile_is_blocked(tile: number, elev: Elevation): boolean {
    return tile_contains_obj_pid(tile, elev, PID_BLOCKING_HEX);
}
