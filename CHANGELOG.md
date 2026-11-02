# Changelog

## Unreleased

- Fix `intface_redraw`: the 0.5.0 change requiring a `winType` argument was wrong, and TS-level optional
  parameters/ternaries on these sfall wrappers don't compile through tssl anyway. `intface_redraw()` is back to
  no arguments (the engine's real interface redraw, as before 0.5.0); the `winType` form is now the separate
  `interface_redraw_win(winType)`/`interface_redraw_all()`, matching sfall.h's own macro names - they do a
  lighter "fake" redraw, not a substitute for `intface_redraw()`. Reported against fo2tweaks, which calls the
  no-argument form.
- Fix `set_unique_id`: dropped the 0.5.0 optional second argument (same compile problem); the unassign case is
  now the separate `unset_unique_id(obj)`, matching sfall.h's own `unset_unique_id` macro.
- Fix `create_win`: dropped the 0.5.0 optional `flags` argument (same compile problem); back to its original
  5-argument form, with `create_win_flag` (unchanged) for the 6-argument case.
- Fix `interface_art_draw`/`interface_print`: dropped the 0.5.0 optional trailing arguments (same compile
  problem, via default parameter values this time); back to their original forms, with the longer forms as the
  separate `interface_art_draw_frame`/`interface_art_draw_ex`/`interface_print_width`, matching sfall.h's own
  macro names.
- Fix `get_window_attribute`/`message_box`: both were bare declarations naming a dispatch key with no matching
  callable symbol, so neither ever compiled through tssl. `get_window_attribute` is now the separate
  `get_interface_rect`/`get_interface_x`/`get_interface_y`/`get_interface_width`/`get_interface_height`/
  `get_interface_id`/`intface_is_shown`, matching sfall.h's own macro names; `message_box` is removed in favor
  of the already-existing `message_box1`/`message_box2`/`message_box3`/`message_box4`.
- Fix several more declarations that were likewise bare and never compiled: `get_map_enter_position`,
  `get_metarule_table`, `get_inven_ap_cost`, `get_string_pointer`, `interface_overlay`, `seq_perk_freq`,
  `string_replace`, and the vanilla `animate_stand`/`animate_stand_reverse`/`animate_run_to_tile`/`reg_anim_end`
  (all four needed a real `self_obj`-composed body, not a bare declaration).
- Remove `div`: it's an SSL infix operator (`x div y`), not a callable procedure - no function declaration can
  represent it, and TSSL has no custom-operator mechanism either.
- Remove `animate_rotation`, `animate_set_frame`, `goto_xy`, `map_known`, `violence_level_setting`,
  `world_map_x_pos`, `world_map_y_pos`, `add_g_timer_event`, `string_format`, `string_to_case`: each was either
  non-existent (no evidence in sfall's sources, confirmed against a real mod's vanilla headers), a near-duplicate
  of an already-working function (`map_is_known`, `violence_filter_setting`, `get_world_map_x_pos`/`_y_pos`,
  `add_global_timer_event`, `string_format1..7`, `string_tolower`/`string_toupper`), or - for the two `animate_*`
  names - never a real function at all (`anim(obj, ANIMATE_ROTATION, dir)`/`anim(obj, ANIMATE_SET_FRAME, frame)`
  is the real form).
- Add a compile-check test (`pnpm test`) that calls every exported function through the real `@bgforge/tssl`
  compiler (via `pnpm dlx`, not a dependency), to catch a declaration tsc/eslint accept but tssl cannot compile -
  the root cause of every fix above.

## 0.5.0

- **Breaking:** `set_shader_mode` now takes a leading `ID` argument, matching its siblings `set_shader_float`,
  `set_shader_int` and `set_shader_texture`, all of which already took one.
- **Breaking:** `intface_redraw` now takes the required `winType` argument the engine always needed, instead of
  none.
- Add missing base engine declarations: `goto_xy`, `map_known`, `mark_area_known`, `reaction_influence`, the six
  `sfx_build_*` functions, `tile_in_tile_rect`, `violence_level_setting`, `world_map_x_pos`, `world_map_y_pos`.
- Add missing sfall declarations: `encounter_detection`, `hide_win`, `hide_window`, `opcode_exists`,
  `remove_wm_town_names`, `set_fo1_hit_chance`, `set_reaction_thresholds`, `show_win`, `show_window`,
  `string_compare_locale`.
- Fix return types: `number`, not `void` (`critter_heal`); `void`, not a value (`destroy_object`,
  `critter_stop_attacking`, `critter_mod_skill`, `critter_injure`, `gdialog_mod_barter`, `jam_lock`,
  `use_obj_on_obj`).
- Fix sfall signatures: `interface_art_draw` and `interface_print` were missing their optional trailing arguments
  and returning `void` instead of `number`; `set_unique_id`, `create_win` and `get_window_attribute` gained their
  optional trailing argument; `message_box`'s `flags`, `color1` and `color2` are now optional.
- Add the vanilla key (`AddKey`, `DeleteKey`), raw movie player (`MovieFlags`, `PlayMovie`, `PlayMovieRect`,
  `StopMovie`), legacy `Say*` dialogue, handle-based sound (`SoundPlay`, `SoundPause`, `SoundResume`, `SoundStop`,
  `SoundRewind`, `SoundDelete`) and low-level window (`CreateWin`, `AddButton*`, `AddRegion*`, `FillRect`, `print`,
  ...) declarations: a previously entirely-unchecked slice of the base engine function list.

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
