# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

- Tooling: GitHub Actions **CI** (test + production build); Dependabot updates; **`package-lock.json`** for **`npm ci`**; **`.nvmrc`** (+ **`engines`** `node >=18`); README overhaul (TOC, badges, install variants, tarball layout).

---

## [2.0.0] — 2026-05-18

This is a **major** release so that projects using **`^1.x`** are not surprised by type or collision behavior changes ([SemVer](https://semver.org/)).

### Breaking changes

- **`nearest`** returns **`Point | null`**. Empty input returns **`null`** instead of `{}`. Handle `null` everywhere you used to assume a `Point` (including **`Point.nearestFromPoints`**).
- **`collision`** and **`collisionInArray`** use **Euclidean (circular) radius**. The same numeric arguments can yield **different** `true`/`false` results than 1.x if you relied on the old axis-aligned **box** check; retune thresholds or add a dedicated AABB helper if you need that shape.

### Fixes

- **`collision`** now uses **Euclidean distance** (a true circular radius around each point). The previous implementation compared axis-aligned bounding boxes aligned to the second point, which incorrectly reported collisions near “corners” and did not match the documented behavior.
- **`collisionInArray`** no longer imports from the package barrel (`index`), removing a fragile **circular dependency** at build/load time.

### Improvements

- **`collision`** optional callback parameter is typed as **`() => void`** instead of `Function`.
- **`collision`** compares squared distance internally (same semantics, avoids `Math.sqrt`).
- **`Point.nearestFromPoints`** return type now matches **`nearest`** (`Point | null`).

---

## Earlier versions

Older releases did not maintain a changelog in this repository. Compare tags or git history on [GitHub](https://github.com/Arman2409/pointscape) for prior changes.
