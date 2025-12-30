/**
 * Sfall array library functions
 * Converted from headers/sfall/lib.arrays.h
 * @author phobos2077
 */
import { random } from "../base.d";
import {
    len_array, resize_array, set_array, get_array, array_key,
    fix_array, temp_array, load_array, save_array, free_array
} from "./sfall.d";
import { temp_array_list, temp_array_map, array_is_map } from "./sfall";

/** Check if key exists in map array */
export function map_contains_key(arrayMap: any[], key: any): boolean {
    for (let i = 0; i < len_array(arrayMap); i++) {
        if (array_key(arrayMap, i) == key) return true;
    }
    return false;
}

/** Returns first index of zero value in a list array */
export function get_empty_array_index(array: any[]): number {
    let i = 0;
    while (i < len_array(array)) {
        if (get_array(array, i) == 0) {
            return i;
        }
        i++;
    }
    return i;
}

/** Push item to end of list array, returns the array */
export function array_push(array: any[], item: any): any[] {
    const n = len_array(array);
    resize_array(array, n + 1);
    set_array(array, n, item);
    return array;
}

/** Remove and return last item from list array */
export function array_pop(array: any[]): any {
    const n = len_array(array) - 1;
    if (n >= 0) {
        const ret = get_array(array, n);
        resize_array(array, n);
        return ret;
    }
    return 0;
}

/** Returns a temp list of keys from a given array */
export function array_keys(array: any[]): any[] {
    const len = len_array(array);
    const tmp = temp_array_list(len);
    for (let i = 0; i < len; i++) {
        set_array(tmp, i, array_key(array, i));
    }
    return tmp;
}

/** Returns a temp list of values from a given array */
export function array_values(array: any[]): any[] {
    const len = len_array(array);
    const tmp = temp_array_list(len);
    for (let i = 0; i < len; i++) {
        set_array(tmp, i, get_array(array, array_key(array, i)));
    }
    return tmp;
}

/** Makes array permanent and returns it */
export function array_fixed(array: any[]): any[] {
    fix_array(array);
    return array;
}

/** Returns a slice of list array as new temp array */
export function array_slice(array: any[], index: number, count: number): any[] {
    const n = len_array(array);
    if (n <= 0) return temp_array_list(0);
    if (index < 0) index = n + index;
    if (count < 0) count = n - index + count;
    else if (index + count > n) count = n - index;
    const tmp = temp_array_list(count);
    for (let i = 0; i < count; i++) {
        set_array(tmp, i, get_array(array, index + i));
    }
    return tmp;
}

/** Remove a slice from list array and return it */
export function array_cut(array: any[], index: number, count: number): any[] {
    const n = len_array(array);
    if (n <= 0) return array;
    if (index < 0) index = n + index;
    if (count < 0) count = n - index + count;
    else if (index + count > n) count = n - index;
    for (let i = index; i < n - count; i++) {
        set_array(array, i, get_array(array, i + count));
    }
    resize_array(array, n - count);
    return array;
}

/** Copy a slice of one array into another (will not resize) */
export function copy_array(src: any[], srcPos: number, dest: any[], dstPos: number, size: number): void {
    const srcLen = len_array(src);
    if (srcPos + size > srcLen) size = srcLen - srcPos;
    for (let i = 0; i < size; i++) {
        set_array(dest, dstPos + i, get_array(src, srcPos + i));
    }
}

/** Create a shallow copy of array as new temp array */
export function clone_array(array: any[]): any[] {
    const len = len_array(array);
    let newArr: any[];
    if (array_is_map(array)) {
        newArr = temp_array_map();
    } else {
        newArr = temp_array_list(len);
    }
    for (let i = 0; i < len; i++) {
        const k = array_key(array, i);
        set_array(newArr, k, get_array(array, k));
    }
    return newArr;
}

/** Compare two arrays for equality */
export function arrays_equal(arr1: any[], arr2: any[]): boolean {
    if (array_is_map(arr1) != array_is_map(arr2)) return false;
    const n = len_array(arr1);
    if (n != len_array(arr2)) return false;
    for (let i = 0; i < n; i++) {
        const k1 = array_key(arr1, i);
        const k2 = array_key(arr2, i);
        if (k1 != k2) return false;
        if (get_array(arr1, k1) != get_array(arr2, k2)) return false;
    }
    return true;
}

/** Returns maximum element in array */
export function array_max(arr: any[]): any {
    let max: any = 0;
    const len = len_array(arr);
    for (let i = 0; i < len; i++) {
        const v = get_array(arr, array_key(arr, i));
        if (max == 0 || v > max) max = v;
    }
    return max;
}

/** Returns minimum element in array */
export function array_min(arr: any[]): any {
    let min: any = 0;
    const len = len_array(arr);
    for (let i = 0; i < len; i++) {
        const v = get_array(arr, array_key(arr, i));
        if (min == 0 || v < min) min = v;
    }
    return min;
}

/** Returns sum of array elements */
export function array_sum(arr: any[]): any {
    let sum: any = 0;
    const len = len_array(arr);
    for (let i = 0; i < len; i++) {
        sum += get_array(arr, array_key(arr, i));
    }
    return sum;
}

/** Returns a random value from list array */
export function array_random_value(arr: any[]): any {
    const len = len_array(arr);
    return get_array(arr, array_key(arr, random(0, len - 1)));
}

const ARRAY_SET_BLOCK_SIZE = 10;

/** Add item to set (list array with unique values). Returns true if added. */
export function add_array_set(array: any[], item: any): boolean {
    let i = 0;
    const len = len_array(array);
    let exist = false;
    let zeroIdx = -1;

    while (i < len) {
        const val = get_array(array, i);
        if (val == 0 && zeroIdx == -1) {
            zeroIdx = i;
        } else if (val == item) {
            exist = true;
        }
        i++;
    }

    if (!exist) {
        if (zeroIdx == -1) {
            resize_array(array, len + ARRAY_SET_BLOCK_SIZE);
            zeroIdx = len;
        }
        set_array(array, zeroIdx, item);
        return true;
    }
    return false;
}

/** Remove item from set. Returns true if removed. */
export function remove_array_set(array: any[], item: any): boolean {
    let i = 0;
    const len = len_array(array);
    let foundAt = -1;
    let lastNonZero = 0;

    while (i < len) {
        const val = get_array(array, i);
        if (val == item) foundAt = i;
        if (val != 0) lastNonZero = i;
        i++;
    }

    if (foundAt != -1) {
        set_array(array, foundAt, get_array(array, lastNonZero));
        set_array(array, lastNonZero, 0);
        return true;
    }
    return false;
}

/** Fill array with value */
export function array_fill(arr: any[], pos: number, count: number, value: any): any[] {
    const len = len_array(arr);
    if (count == -1 || pos + count > len) count = len - pos;
    for (let i = 0; i < count; i++) {
        set_array(arr, pos + i, value);
    }
    return arr;
}

/** Append all items from arr2 to arr1 */
export function array_append(arr1: any, arr2: any): any {
    if (array_is_map(arr1)) {
        const len2 = len_array(arr2);
        for (let i = 0; i < len2; i++) {
            const k = array_key(arr2, i);
            set_array(arr1, k, get_array(arr2, k));
        }
    } else {
        const arr1Len = len_array(arr1);
        const arr2Len = len_array(arr2);
        resize_array(arr1, arr1Len + arr2Len);
        copy_array(arr2, 0, arr1, arr1Len, arr2Len);
    }
    return arr1;
}

/** Concat arrays into new temp array */
export function array_concat(arr1: any, arr2: any): any {
    return array_append(clone_array(arr1), arr2);
}

/** Load saved array, create if doesn't exist */
export function load_create_array(name: string, size: number): any[] {
    let arr = load_array(name);
    if (arr == 0) {
        arr = temp_array(size, 0);
        fix_array(arr);
        save_array(name, arr);
    }
    return arr;
}

/** Load saved array map, create if doesn't exist */
export function load_create_array_map(name: string): any[] {
    return load_create_array(name, -1);
}

/** Create new saved array, free old one if exists */
export function get_saved_array_new(name: string, size: number): any[] {
    let arr = load_array(name);
    if (arr) free_array(arr);
    arr = temp_array(size, 0);
    fix_array(arr);
    save_array(name, arr);
    return arr;
}

/** Create new saved array map, free old one if exists */
export function get_saved_array_new_map(name: string): any[] {
    return get_saved_array_new(name, -1);
}
