# Changelog

## 0.4.1

- Fix `SfallMap` mapped type: widen literal key types to base type (`number`/`string`) via distributive conditional, so `SfallMap<16777278 | 16777295, V>` is assignable to `SfallMap<number, V>`.

## 0.4.0

- **Breaking:** `SfallMap<K, V>` now requires `K extends string | number` and uses a mapped type instead of open index signatures. This enforces type-safe key access — a `SfallMap<number, V>` no longer silently accepts string keys.
- **Breaking:** All generic functions accepting `SfallMap` (`map_contains_key`, `array_keys`, `array_values`, `clone_array`, `array_append`, `array_concat`, `create_array_map`, `temp_array_map`, `create_lookup_map`, `temp_lookup_map`) now constrain `K extends string | number`.
- Add no-arg overloads for `list<T>()` and `map<K, V>()` to create empty typed collections.

## 0.3.0

- **Breaking:** Rename `folib/rp/*` to `folib/rpu/*` (Restoration Project, updated).

## 0.2.4

- Fix eslint config publish.

## 0.2.0

- Add eslint config.

## 0.1.2

- Export RPU headers.
- Add documentation site.

## 0.1.1

- Convert some constants to enums.
- Split files for ease of management.
- Consistency and JSDoc improvements.

## 0.1.0

Initial release.
