---
description: Validate that a release is ready to ship, across whichever platform(s) are shipping.
argument-hint: [version]
---

Validate that the app is ready to ship version `$ARGUMENTS`.

1. Invoke `repo-analyst` to determine which platform(s) this release actually ships (react-native, iOS, Android, React web, or a combination).
2. Apply the shared `mobile-release-readiness` skill methodology via the `mobile-release-engineer` agent for the checklist mechanics (version bump, changelog, native/platform config diff, env vars per environment, store metadata, QA sign-off, rollback plan), citing `standards/shared/release-readiness.md`'s `REL-*` IDs.
3. Add platform-specific release validation for each shipping platform: React Native — JS bundle, native build, Expo/EAS if used, iOS/Android store readiness; iOS — Xcode scheme, signing, provisioning, TestFlight/App Store readiness, per `standards/ios/xcode-build-signing.md`; Android — Gradle variant, signing config, Play Console readiness, per `standards/android/gradle-build-signing.md`; React (web) — production build artifact and deploy target, no store-readiness section.
4. For perf sign-off, invoke each shipping platform's performance-reviewer agent (`rn-performance-reviewer` / `ios-performance-reviewer` / `android-performance-reviewer` / `react-performance-reviewer`) and populate one platform-tagged sign-off block per shipping platform.
5. Walk and populate `templates/release-checklist-template.md` in full, including the platform-specific release-validation section.
6. Produce a final go/no-go verdict.

An incomplete or unverifiable checklist item is a no-go by default — surface it to the human for a decision rather than waiving it yourself.
