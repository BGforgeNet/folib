/**
 * Sfall string library functions
 * Converted from headers/sfall/lib.strings.h
 * @author phobos2077
 */
import { len_array, resize_array, set_array, get_array, string_split, atoi, atof } from "./sfall.d";
import { temp_array_list, string_find } from "./sfall";

/** Check if str contains sub anywhere */
export function string_contains(str: string, sub: string): boolean {
    return string_find(str, sub) != -1;
}

/** Check if str starts with sub */
export function string_starts_with(str: string, sub: string): boolean {
    return string_find(str, sub) == 0;
}

/** Join array of strings with delimiter */
export function string_join(array: any[], join: string): string {
    let str = "";
    const len = len_array(array);
    if (len > 0) {
        str = get_array(array, 0);
        for (let i = 1; i < len; i++) {
            str += join + get_array(array, i);
        }
    }
    return str;
}

/** Create string by repeating str count times */
export function string_repeat(str: string, count: number): string {
    let out = "";
    for (let i = 0; i < count; i++) {
        out += str;
    }
    return out;
}

/** Split string and convert parts to integers */
export function string_split_ints(str: string, split: string): any[] {
    if (str == "") return temp_array_list(0);

    const list = string_split(str, split);
    const result = temp_array_list(0);
    let n = 0;
    const len = len_array(list);
    for (let i = 0; i < len; i++) {
        const val = get_array(list, i);
        if (val != "") {
            resize_array(result, n + 1);
            set_array(result, n, atoi(val));
            n++;
        }
    }
    return result;
}

/** atoi wrapper for use as delegate */
export function string_to_int(str: string): number {
    return atoi(str);
}

/** atof wrapper for use as delegate */
export function string_to_float(str: string): number {
    return atof(str);
}

/** Convert value to string */
export function to_string(val: any): string {
    return "" + val;
}

/** Check if string is null or empty */
export function string_null_or_empty(str: string): boolean {
    return str == null || str == "";
}

import { tokenize } from "../base.d";
import { atoi as base_atoi } from "./sfall.d";

/** ASCII code for '%' - use as delimiter in tokenize() */
const CHAR_PERCENT = 37;

/**
 * Parse string template with %1% and %2% placeholders.
 * Example: parse_str_2("Hello, %2%. I have $%1%.", 100, "World") -> "Hello, World. I have $100."
 */
export function parse_str_2(str: string, x1: any, x2: any): string {
    let token: string;
    let line: string;
    let result: string;
    let n: number;

    line = tokenize(str, 0, CHAR_PERCENT);
    result = line;
    while (line != str) {
        token = tokenize(str, line, CHAR_PERCENT);
        line += "%" + token;
        if (token == "") {
            result += "%";
        } else {
            n = base_atoi(token);
            if (n == 1) result += x1;
            else if (n == 2) result += x2;
        }
        const rest = tokenize(str, line, CHAR_PERCENT);
        if (rest as any != 0) {
            line += "%" + rest;
            result += rest;
        }
    }
    return result;
}
