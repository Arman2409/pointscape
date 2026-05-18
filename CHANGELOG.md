# Changelog

All notable changes to this project are documented in this file.

## [2.0.0] — 2026-05-18

### Breaking changes

- **`nearest`** now returns **`Point | null`**. When the points array is empty, it returns **`null`** instead of an invalid `{}` object. Update call sites that assumed a plain `Point` (use `if (found)` or optional chaining).
- **`collision`** behavior for the same numeric arguments can **change** versus 1.x: it now uses a **circular** radius (Euclidean distance). Games or tools that accidentally relied on the old axis-aligned “box” check may need to retune distances or switch to a dedicated AABB helper if you add one later.

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
