// Miscellaneous helper functions from lib.misc.h

import { key_pressed } from "./sfall.d";

/**
 * Checks if a given shortcut is currently pressed (see parse_hotkey).
 * @param n - hotkey data parsed with parse_hotkey
 */
export function hotkey_pressed(n: number): boolean {
  if (n < 0x10000) {
    return key_pressed(n);
  } else {
    return key_pressed(n & 0xFFFF) && key_pressed((n & 0xFFFF0000) / 0x10000);
  }
}

/**
 * Checks if a shortcut is currently pressed, given that key is already pressed.
 * @param n - hotkey data parsed with parse_hotkey
 * @param key - DX scancode
 */
export function hotkey_pressed_now(n: number, key: number): boolean {
  if (n < 0x10000) {
    return key == n;
  } else {
    const k1 = n & 0xFFFF;
    const k2 = (n & 0xFFFF0000) / 0x10000;
    if (k1 == key) {
      if (key_pressed(k2)) return true;
    } else if (k2 == key) {
      if (key_pressed(k1)) return true;
    }
    return false;
  }
}
