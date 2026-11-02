# Changelog

## Unreleased

- Add missing base engine declarations: `goto_xy`, `map_known`, `mark_area_known`, `reaction_influence`, the six
  `sfx_build_*` functions, `tile_in_tile_rect`, `violence_level_setting`, `world_map_x_pos`, `world_map_y_pos`.
- Add missing sfall declarations: `encounter_detection`, `hide_win`, `hide_window`, `opcode_exists`,
  `remove_wm_town_names`, `set_fo1_hit_chance`, `set_reaction_thresholds`, `show_win`, `show_window`,
  `string_compare_locale`.
- Fix return types: `number`, not `void` (`critter_heal`); `void`, not a value (`destroy_object`,
  `critter_stop_attacking`, `critter_mod_skill`, `critter_injure`, `gdialog_mod_barter`, `jam_lock`,
  `use_obj_on_obj`).
- Fix sfall signatures: `set_shader_mode` was missing its `ID` argument; `interface_art_draw` and `interface_print`
  were missing their optional trailing arguments and returning `void` instead of `number`; `intface_redraw` now
  takes the required `winType` argument instead of none; `set_unique_id`, `create_win` and `get_window_attribute`
  gained their optional trailing argument; `message_box`'s `flags`, `color1` and `color2` are now optional.

## 0.4.4

- Add `art_change_fid_num` and `weapon_is_unusable`.

## 0.4.3

- Fix `obj_is_carrying_obj`, `get_stat_min` and `get_stat_max` return types: `number`, not `void`. The `who` argument of `get_stat_min`/`get_stat_max` is optional.

## 0.4.2

Uninline `map_first_run`, `inven_count`, `shitter_has_blown`.

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
