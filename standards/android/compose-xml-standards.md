# Compose / XML Standards

## Purpose & Scope

These standards govern the Android UI layer — Jetpack Compose, XML/View-based UI (ViewBinding/DataBinding, Fragments, Activities), RecyclerView-backed lists, and resource usage. They are implemented by `android-feature-developer` via `/implement-task` and reviewed by `android-code-reviewer` via `/review-code`. Each bullet carries a stable `AND-UI-*` ID. This list is a baseline, not exhaustive. **Which subsection applies depends on the surface the task touches:** a Compose screen applies `AND-UI-COMPOSE-*`, an XML/Fragment screen applies `AND-UI-XML-*`, and a mixed project applies whichever matches each changed surface. Do not migrate a surface from XML to Compose (or the reverse) unless the DD explicitly approves it. Follow the repository's existing design-system components, theme, and tokens rather than introducing new ones.

## Jetpack Compose

- `AND-UI-COMPOSE-1` Composables use the repository's existing design-system components and theme tokens (colors, typography, spacing) rather than hardcoded values or ad-hoc `Modifier` dimensions.
- `AND-UI-COMPOSE-2` Composables are stateless where practical; state is hoisted to the level the repo hoists it to (ViewModel or a caller), and business logic is not performed inside a `@Composable`.
- `AND-UI-COMPOSE-3` `LazyColumn`/`LazyRow` items declare a stable, unique `key`; item content does not rely on composition position for identity.
- `AND-UI-COMPOSE-4` `remember`, `rememberSaveable`, and `derivedStateOf` are used intentionally — expensive computations are `remember`ed with correct keys, and state that must survive recomposition vs. configuration change uses the matching API.
- `AND-UI-COMPOSE-5` Side-effect APIs (`LaunchedEffect`, `DisposableEffect`, `SideEffect`, `produceState`) use correct keys so effects restart when — and only when — their inputs change; `DisposableEffect` cleans up in `onDispose`.
- `AND-UI-COMPOSE-6` Unnecessary recomposition is avoided: unstable lambdas/objects passed to children are hoisted or remembered, and state reads are scoped as narrowly as the layout allows rather than read high in the tree.
- `AND-UI-COMPOSE-7` Accessibility semantics are preserved — `contentDescription`/`Modifier.semantics`, merged semantics for grouped rows, correct roles and state — per `standards/shared/accessibility.md` (`A11Y-*`).
- `AND-UI-COMPOSE-8` `@Preview` composables are added only if the project already uses previews, and previews do not perform real I/O or require live dependencies.

## XML, Views, Fragments & Activities

- `AND-UI-XML-1` View access uses the binding mechanism already in the repo (ViewBinding or DataBinding); `findViewById` is not reintroduced into a project that has moved to binding.
- `AND-UI-XML-2` A Fragment's binding reference is cleared in `onDestroyView` (the `_binding = null` pattern) so the view hierarchy is not leaked past the fragment-view lifecycle.
- `AND-UI-XML-3` Views, Activities, and Fragments are not retained beyond their lifecycle — listeners, observers, and callbacks registered on them are removed/scoped so they do not outlive the view.
- `AND-UI-XML-4` Observers and flow collectors in a Fragment use `viewLifecycleOwner` (not the Fragment itself) and a lifecycle-aware scope, so they stop when the view is destroyed.
- `AND-UI-XML-5` Layouts reuse existing styles, themes, dimensions, drawables, and design-system components; equivalent resources are not duplicated.
- `AND-UI-XML-6` View hierarchies are kept shallow (`ConstraintLayout`/merge where appropriate) to avoid deep nesting and overdraw; a new deeply-nested hierarchy is not added where a flatter one is idiomatic in the repo.
- `AND-UI-XML-7` State is preserved across configuration change per the feature's needs (via the ViewModel and, where relevant, `onSaveInstanceState`), not dropped on rotation.

## RecyclerView & Lists

- `AND-UI-LIST-1` Existing adapters and item models are reused where appropriate rather than creating a parallel adapter for the same item type.
- `AND-UI-LIST-2` List updates use `DiffUtil`/`ListAdapter` (or the repo's established diffing) rather than calling `notifyDataSetChanged()` for a full refresh when only some items changed.
- `AND-UI-LIST-3` `setHasStableIds(true)` is used only when items genuinely have stable, unique IDs; otherwise stable IDs are not claimed.
- `AND-UI-LIST-4` Recycled-view state does not leak between bindings — every `onBindViewHolder` fully sets each mutable view property (no reliance on a previous binding's leftover state).
- `AND-UI-LIST-5` Empty, loading, error, and pagination states are handled explicitly for the list per the DD, not left as a silently blank view.
- `AND-UI-LIST-6` List rows expose correct accessibility semantics and focus order per `standards/shared/accessibility.md` (`A11Y-*`).

## Resources, Localization & RTL

- `AND-UI-RES-1` No hardcoded user-visible strings in code or layouts — all user-facing text comes from string resources, tying to `standards/shared/i18n-rtl.md` (`I18N-COPY-*`).
- `AND-UI-RES-2` Layouts use start/end attributes (`layout_marginStart`/`End`, `paddingStart`/`End`, `layout_constraintStart`/`End`) rather than left/right, so they mirror correctly under RTL (`I18N-RTL-*`).
- `AND-UI-RES-3` Direction-implying icons/imagery are mirrored for RTL (`autoMirrored`/RTL-aware drawables) rather than assuming LTR.
- `AND-UI-RES-4` Resource names are semantic (`ic_back`, `spacing_medium`), and dimensions/colors/typography reuse the existing token resources rather than duplicating near-identical values.
- `AND-UI-RES-5` No PII or placeholder personal data is hardcoded into layouts, previews, or sample data shipped in the build.

## References

- Jetpack Compose guidance and the Android Views/Fragments lifecycle documentation (developer.android.com).
- Accessibility and i18n/RTL rules are owned by `standards/shared/accessibility.md` and `standards/shared/i18n-rtl.md`; this document points at them rather than restating them.
- This document is a living baseline; flag standards gaps found during implementation or review rather than working around them silently.
