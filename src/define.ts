// Bundleable implementations for functions that need to be defined in each script

import { debug_msg } from "./base.d";

// This will be set by the importing script
declare const SCRIPT_REALNAME: string;

/** Float constant 1.0 - use to force float division: FLOAT1 * a / b */
export const FLOAT1 = 1.0;

/**
 * Logs a message to debug.log. Requires `SCRIPT_REALNAME` define to be set.
 * @param msg log message
 * @inline
 */
export function ndebug(msg: string): void {
    debug_msg(SCRIPT_REALNAME + ": " + msg);
}
