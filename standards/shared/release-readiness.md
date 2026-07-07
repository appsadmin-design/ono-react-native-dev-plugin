# Release Readiness Standards

## Purpose & Scope

These standards apply to any mobile-division release validated via `/prepare-mobile-release`, regardless of platform — extracted from the `mobile-release-readiness` skill's checklist so findings can cite a stable ID instead of restating the criterion as prose each time. Each bullet below carries a stable `REL-*` ID. Platform-specific release validation (native config specifics, store submission mechanics) is covered by each platform's own standards (`standards/react-native/*`, `standards/ios/xcode-build-signing.md`, `standards/android/gradle-build-signing.md`, `standards/react/*`); this document covers only the checklist criteria common to every platform.

## Version Bump & Changelog

- `REL-VERSION-1` The app/package version and native build numbers are bumped for this release.
- `REL-VERSION-2` A matching changelog entry exists describing what's shipping.

## Native Config Diff

- `REL-NATIVECONFIG-1` Native/platform config (e.g. `Info.plist`, `AndroidManifest.xml`, `build.gradle`, entitlements, or the equivalent for the platform shipping) is diffed against the last release; every change is attributable to a reviewed PR.
- `REL-NATIVECONFIG-2` An unexplained native/platform config diff is treated as a blocker, not a note.

## Environment Variables

- `REL-ENV-1` Dev/staging/prod environment variables are set for anything the release needs.
- `REL-ENV-2` No real secrets are committed to the repo among env vars — cross-reference `SEC-SECRETS-*` in `standards/shared/mobile-security.md`.

## Store / Distribution Metadata

- `REL-STORE-1` Any store or distribution-target listing changes (screenshots, description, release notes, permission declarations, or the web equivalent — deploy target/hosting changes) are noted for this version.

## Performance Sign-off

- `REL-PERF-1` A performance sign-off (bundle size delta, re-renders, virtualization, main-thread/JS-thread blocking, images — per whichever platform's performance standards apply) is pulled from the relevant platform performance-reviewer agent(s) for changes going into this release.

## QA Sign-off

- `REL-QA-1` A completed `qa-handoff-template.md` exists for every feature going into this release; a feature without QA handoff notes is a blocker.

## Rollback Plan

- `REL-ROLLBACK-1` A rollback plan with concrete steps (revert commit/tag, halt a staged rollout, reverse any backend/migration dependency) is documented before shipping.

## Verdict

- `REL-VERDICT-1` An incomplete or unverifiable checklist item defaults to No-Go — it is surfaced to the human for a decision rather than waived by the release agent itself.

## References

- This document is a living baseline; reviewers should flag standards gaps found during release validation rather than working around them silently.
- Extracted from the `mobile-release-readiness` skill's checklist as part of the mobile-division plugin migration.
