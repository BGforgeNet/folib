// Runtime constants for union types

import type { Hand, Difficulty, Elevation, Direction, HitResult, ObjectPtr } from './types.d';

/** Active hand: left */
export const LEFT_HAND: Hand = 0;
/** Active hand: right */
export const RIGHT_HAND: Hand = 1;

/** Difficulty level: easy */
export const DIFFICULTY_EASY: Difficulty = 0;
/** Difficulty level: normal */
export const DIFFICULTY_NORMAL: Difficulty = 1;
/** Difficulty level: hard */
export const DIFFICULTY_HARD: Difficulty = 2;

/** Elevation level 0 (ground floor) */
export const ELEVATION_0: Elevation = 0;
/** Elevation level 1 */
export const ELEVATION_1: Elevation = 1;
/** Elevation level 2 */
export const ELEVATION_2: Elevation = 2;
/** Special value for set_can_rest_on_map to apply to all elevations */
export const ELEVATION_ALL = -1;

/** Direction: Northeast */
export const DIRECTION_NE: Direction = 0;
/** Direction: East */
export const DIRECTION_E: Direction = 1;
/** Direction: Southeast */
export const DIRECTION_SE: Direction = 2;
/** Direction: Southwest */
export const DIRECTION_SW: Direction = 3;
/** Direction: West */
export const DIRECTION_W: Direction = 4;
/** Direction: Northwest */
export const DIRECTION_NW: Direction = 5;

/** Hit result: critical miss */
export const HITRESULT_CRITICAL_MISS: HitResult = 0;
/** Hit result: miss */
export const HITRESULT_MISS: HitResult = 1;
/** Hit result: hit */
export const HITRESULT_HIT: HitResult = 2;
/** Hit result: critical hit */
export const HITRESULT_CRITICAL_HIT: HitResult = 3;

/** Null pointer - compatible with all pointer types (ObjectPtr, CritterPtr, ItemPtr, etc.) */
export const NullPtr = 0 as ObjectPtr<never>;
