# React Native Performance Standards

## Purpose & Scope

These standards apply to React Native app code audited by the `rn-performance-reviewer` agent via `/review-code` (diff-scoped) and `/prepare-mobile-release` (release-scoped). Extracted from `rn-performance-reviewer`'s prior inline instructions so findings can cite a stable ID instead of restating the concern as prose each time. Each bullet below carries a stable `RN-PERF-*` ID. This is a baseline, not exhaustive — flag suspected issues that need profiling to confirm as such, rather than stating a guess as a confirmed Blocking finding.

## Re-renders

- `RN-PERF-RERENDER-1` Expensive components are memoized (`React.memo`, `useMemo`, `useCallback`) where profiling or clear inspection shows unnecessary re-render cost — not applied reflexively everywhere.
- `RN-PERF-RERENDER-2` Inline callbacks/objects passed as props to expensive children are stabilized (e.g. `useCallback`, hoisted constants) rather than recreated every render.

## List Virtualization

- `RN-PERF-LIST-1` Large or unbounded lists use `FlatList`/`FlashList` with a correct `keyExtractor` (and `getItemLayout` where applicable) rather than `ScrollView.map`, which renders every item unconditionally.

## JS-Thread Blocking

- `RN-PERF-JSTHREAD-1` Heavy synchronous work on the JS thread (large loops, JSON parsing of big payloads, synchronous crypto) is batched, debounced, or moved off-thread rather than blocking interaction.

## Image Handling

- `RN-PERF-IMAGE-1` Images set an explicit `resizeMode` and are sized/optimized for their display context — thumbnails do not load full-resolution source assets.

## Bundle Size

- `RN-PERF-BUNDLE-1` Large or duplicate dependencies are not added without justification; a dependency addition that meaningfully grows bundle size is called out explicitly rather than passing silently.

## References

- This document is a living baseline; reviewers should flag standards gaps found during review rather than working around them silently.
- Extracted from `agents/rn-performance-reviewer.md`'s prior inline process description as part of the mobile-division plugin migration.
