**A collection of functions for working with points in a 2D coordinate system, along with additional utility functions.**

[![CI](https://github.com/Arman2409/pointscape/actions/workflows/ci.yml/badge.svg)](https://github.com/Arman2409/pointscape/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/pointscape.svg)](https://www.npmjs.com/package/pointscape)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**[Live demos →](https://arman2409.github.io/pointscape/)**

## Table of contents

- [What's new](#whats-new-23x)
- [How to use](#how-to-use) — install, imports, develops, publishes
- [Examples](#examples)
- [Point class](#point-class)
- [Function reference](#the-list-of-available-functions)
- [Changelog](./CHANGELOG.md)

---

## What's new (2.3.0)

- **`scale` and `rotate` argument order** — points array comes first: `scale(points, factorX, factorY)` and `rotate(points, center, angle)`.
- **Source maps** — published builds include `.map` files for easier debugging.

**Upgrading from 2.2.x?** Swap argument order for `scale` and `rotate` (see [CHANGELOG](./CHANGELOG.md#230--2026-05-29)).

See **[CHANGELOG.md](./CHANGELOG.md)** for full notes.

---

## How to use

Use **Node 18+**. The repo pins **Node 20** for development (**[`.nvmrc`](./.nvmrc)** — `nvm use` recommended).

### Install

npm:

```bash
npm install pointscape
```

pnpm / Yarn:

```bash
pnpm add pointscape
# or
yarn add pointscape
```

## Examples

Most functions work with plain `{ x, y }` objects — no class allocation needed.

### Collision detection

```typescript
import { collision, collisionInArray } from "pointscape";

const player = { x: 0, y: 0 };
const enemy  = { x: 3, y: 4 };  // exactly 5 units away

collision(player, enemy, 5);  // true  — within radius
collision(player, enemy, 4);  // false — outside radius

// Optional callback fires on hit
collision(player, enemy, 5, () => console.log("hit!"));

// Batch: all targets within radius 3 of origin
const targets = [{ x: 1, y: 0 }, { x: 5, y: 0 }, { x: 3, y: 0 }];
collisionInArray({ x: 0, y: 0 }, targets, 3);
// [{ x: 1, y: 0 }, { x: 3, y: 0 }]
```

### Nearest & farthest

```typescript
import { nearest, farthest } from "pointscape";

const origin = { x: 0, y: 0 };
const pts    = [{ x: 5, y: 0 }, { x: 1, y: 0 }, { x: 10, y: 0 }];

nearest(origin, pts);   // { x: 1, y: 0 }
farthest(origin, pts);  // { x: 10, y: 0 }
nearest(origin, []);    // null
```

### Movement & interpolation

```typescript
import { move, lerp } from "pointscape";

move({ x: 5, y: 5 }, 3, -2);
// { x: 8, y: 3 }

// 25 % of the way from A to B — useful for smooth animation
lerp({ x: 0, y: 0 }, { x: 20, y: 40 }, 0.25);
// { x: 5, y: 10 }

// Midpoint (equivalent to middle())
lerp({ x: 0, y: 0 }, { x: 20, y: 40 }, 0.5);
// { x: 10, y: 20 }
```

### Point geometry

```typescript
import { distance, middle, angle, center, perimeter } from "pointscape";

const a = { x: 0, y: 0 };
const b = { x: 10, y: 10 };

distance(a, b);   // 14.142135623730951
middle(a, b);     // { x: 5, y: 5 }
angle(a, b);      // 0.7853981633974483  (π/4 radians)

const points = [a, b, { x: 0, y: 10 }, { x: 10, y: 0 }];
center(points);    // { x: 5, y: 5 }
perimeter(points); // 48.2842712474619
```

### Rotation & scaling

_Argument order changed in **2.3.0** — points array is always first._

```typescript
import { rotate, scale, degreesToRadians } from "pointscape";

const box = [{ x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }, { x: 0, y: 0 }];

// Rotate 90 ° around the origin
rotate(box, { x: 0, y: 0 }, degreesToRadians(90));
// Each vertex rotated — e.g. { x: 10, y: 0 } becomes { x: 0, y: 10 }

// Double width, halve height
scale(box, 2, 0.5);
// [{ x: 20, y: 0 }, { x: 20, y: 5 }, { x: 0, y: 5 }, { x: 0, y: 0 }]
```

### Area calculations

```typescript
import { area, triangleArea, circleArea } from "pointscape";

// Polygon area — rectangle 4 × 3
area([{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }, { x: 0, y: 3 }]);
// 12

triangleArea({ x: 0, y: 0 }, { x: 6, y: 0 }, { x: 3, y: 4 });
// 12

circleArea(5);
// 78.53981633974483
```

### Shape generators

```typescript
import { square, rectangle, triangle, pentagon } from "pointscape";

// 4 vertices of a 10-unit square (clockwise from origin)
square({ x: 0, y: 0 }, 10);
// [{ x:0,y:0 }, { x:10,y:0 }, { x:10,y:-10 }, { x:0,y:-10 }]

// Rectangle 10 wide × 5 tall
rectangle({ x: 0, y: 0 }, 10, 5);
// [{ x:0,y:0 }, { x:10,y:0 }, { x:10,y:-5 }, { x:0,y:-5 }]

// Triangle vertices, size 10, default direction "left"
triangle({ x: 0, y: 0 }, 10);

// Pentagon centred at (50, 50) with radius 30
pentagon({ x: 50, y: 50 }, 30);  // 5 evenly-spaced vertices
```

### Point class

The `Point` class wraps any `{ x, y }` and exposes all geometric operations as chainable methods. Every method that returns a point returns a `Point` instance, so calls can be chained.

```typescript
import { Point } from "pointscape";

const a = new Point(10, 20);
const b = new Point(50, 80);

// Basic methods
a.distanceTo(b);  // 72.11...
a.angleTo(b);     // number in radians
a.equals(b);      // false
a.clone();        // Point(10, 20)
a.toString();     // "Point(10, 20)"

// Factory — convert a plain { x, y } to a Point instance
const c = Point.from({ x: 0, y: 0 });

// Chainable — move() and lerp() return Point instances
a.move(5, -5)       // Point(15, 15)
    .lerp(b, 0.5)   // Point(32.5, 47.5)
    .distanceTo(b); // number

// Rotate a point around a center
a.rotateAround({ x: 0, y: 0 }, Math.PI); // Point(-10, -20)

// Array-based methods — return Point or Point | null
a.nearestFromPoints([b, c]);  // Point | null
a.farthestFromPoints([b, c]); // Point | null
```

Plain `{ x: number; y: number }` objects work for every function — you don't need to allocate a `Point` instance unless you want the method API.

### Lines & circular positioning

```typescript
import { inLine, cross, positionInCircle } from "pointscape";

// Is (5, 5) on the line from (0, 0) to (10, 10)?
inLine({ x: 5, y: 5 }, { start: { x: 0, y: 0 }, end: { x: 10, y: 10 } });
// true

// Do two diagonals intersect?
cross(
    { start: { x: 0, y: 0 },  end: { x: 10, y: 10 } },
    { start: { x: 0, y: 10 }, end: { x: 10, y: 0 } }
);
// true

// Point on a circle of radius 10 at angle 0 (rightmost)
positionInCircle({ x: 0, y: 0 }, 10, 0);
// { x: 10, y: 0 }
```

### Sorting points

```typescript
import { sort } from "pointscape";

const pts = [{ x: 3, y: 1 }, { x: 1, y: 3 }, { x: 2, y: 2 }];

sort([...pts]);        // by x → [{ x:1,y:3 }, { x:2,y:2 }, { x:3,y:1 }]
sort([...pts], "y");   // by y → [{ x:3,y:1 }, { x:2,y:2 }, { x:1,y:3 }]
// Note: sort mutates the array in place.
```

### Math utilities

```typescript
import { degreesToRadians, radiansToDegrees, roundToPrecision, average, inRange } from "pointscape";

degreesToRadians(180);      // 3.141592653589793
radiansToDegrees(Math.PI);  // 180

roundToPrecision(3.14159, 2);  // 3.14
roundToPrecision(3.14159, 0);  // 3

average([10, 20, 30, 40]);  // 25

inRange(5, 0, 10);   // true
inRange(15, 0, 10);  // false
```

### Array utilities

```typescript
import { intersection, difference, removeDuplicates, chunk, sample } from "pointscape";

intersection([1, 2, 3, 4], [3, 4, 5, 6]);  // [3, 4]
difference([1, 2, 3, 4], [3, 4, 5, 6]);    // [1, 2]
removeDuplicates([1, 1, 2, 3, 3, 4]);      // [1, 2, 3, 4]
chunk([1, 2, 3, 4, 5, 6], 2);              // [[1, 2], [3, 4], [5, 6]]

sample([10, 20, 30, 40, 50]);     // one random element, e.g. 30
sample([10, 20, 30, 40, 50], 3);  // 3 consecutive elements, e.g. [20, 30, 40]
```

### Randomization

```typescript
import { randomNumber, randomBoolean, uniqueId } from "pointscape";

randomNumber(1, 10);   // random integer in [1, 10], e.g. 7
randomBoolean();       // true or false

uniqueId();                       // e.g. "110e8400-e29b-41d4-a716-446655440000"
uniqueId(["id-1", "id-2"]);       // UUID guaranteed not to collide with the provided ids
```

## The list of available functions

### Function Categories

- [Points](#points)
    - [Geometry](#geometry)
    - [Positioning](#positioning)
    - [Relationships](#relationships)
- [Math](#math)
- [Arrays](#arrays)
- [Randomization](#randomization)

#### Points

##### Geometry

[area](#geometry)

[triangleArea](#geometry)

[perimeter](#geometry)

[center](#geometry)

[square](#geometry)

[rectangle](#geometry)

[pentagon](#geometry)

[triangle](#geometry)

[circleArea](#geometry)

[middle](#geometry)

##### Positioning

[distance](#positioning)

[positionInCircle](#positioning)

[angle](#positioning)

[nearest](#positioning)

[randomPoint](#positioning)

[randomPointInDistance](#positioning)

[randomPoints](#positioning)

[farthest](#positioning)

[rotate](#positioning)

[inLine](#positioning)

[cross](#positioning)

[move](#positioning)

[lerp](#positioning)

##### Relationships

[collision](#relationships)

[collisionInArray](#relationships)

[possibleConnections](#relationships)

[sort](#relationships)

[scale](#relationships)

[pointWithoutCollision](#relationships)

#### Math

[degreesToRadians](#math)

[radiansToDegrees](#math)

[inRange](#math)

[roundToPrecision](#math)

[average](#math)

#### Arrays

[intersection](#arrays)

[difference](#arrays)

[chunk](#arrays)

[removeDuplicate](#arrays)

[sample](#arrays)

#### Randomization

[randomNumber](#randomization)

[randomBoolean](#randomization)

[uniqueId](#randomization)

## Function documentation

### Points

- <b id="distance">distance</b>

```typescript
interface Point {
    x: number;
    y: number;
}

(point1: Point, point2: Point) => number;
```

Returns the distance beetween two points, each point is an object with x and y properties.

- <b id="area">area</b>

```typescript
(points: Point[]) => number;
```

Returns the area enclosed by the given points.
Takes an array of points as argument, where each point is an object with x and y properties.

- <b id="trianglearea">triangleArea</b>

```typescript
(point1: Point, point2: Point, point3: Point) => number;
```

Returns the area of the triangle formed by three points.

- <b id="collision">collision</b>

```typescript
(
    point1: Point,
    point2: Point,
    collisionDistance: number,
    [callback]?: () => void
) => boolean;
```

Returns **`true`** if the **Euclidean distance** between the two points is less than or equal to **`collisionDistance`** (treat **`collisionDistance` as a non-negative radius for a circle** around each position). Optionally invokes **`callback`** when a collision is detected.

- <b id="collisioninarray">collisionInArray</b>

```typescript
  (initialPoint: Point, points: Point[], radius: number) => Point[]
```

Returns every point in **`points`** whose distance to **`initialPoint`** is within **`radius`**, using the same circular rule as [`collision`](#collision).

- <b id="positionincircle">positionInCircle</b>

```typescript
(point: Point, radius: number, angleInRadians: number) => Point;
```

Returns the x and y coordinates for the current point in the circle, given its center point, radius, and angle.

- <b id="angle">angle</b>

```typescript
(point1: Point, point2: Point) => number;
```

Returns the angle formed by the connection of two points.

- <b id="middle">middle</b>

```typescript
(point1: Point, point2: Point) => Point;
```

Returns the midpoint between two points.

- <b id="nearest">nearest</b>

```typescript
(point: Point, points: Point[]) => Point | null;
```

Returns the nearest point to the given point from the array, or **`null`** if **`points`** is empty.

- <b id="perimeter">perimeter</b>

```typescript
(points: Point[]) => number;
```

Returns the perimeter of the figure formed by the given points.

- <b id="pointwithoutcollision">pointWithoutCollision(minX, maxX, minY, maxY, distance, points)</b>

```typescript
interface Bounds {
    min: number;
    max: number;
}

(xBounds: Bounds, yBounds: Bounds, distance: number, points: Point[]) =>
    Point | null;
```

Returns a point that doesn't collide with any of the given points within the specified distance, or `null` if no such point could be found within the retry budget.

- <b id="randompoint">randomPoint</b>

```typescript
([xBounds]: Bounds, [yBounds]: Bounds) => Point;
```

Returns a random point within the given dimensions, if provided, otherwise in 100 units on both axes.

- <b id="randompointindistance">randomPointInDistance</b>

```typescript
(point: Point, distance: number) => Point;
```

Returns a random point within the given distance from the specified point.

- <b id="randompoints">randomPoints</b>

```typescript
   ([xBounds]: Bounds, [yBounds]: Bounds, quantity: number,) => Point[]
```

Returns a specified quantity of random points within the given dimensions, if dimensions are provided, otherwise in the range of 100.

- <b id="possibleconnections">possibleConnections</b>

```typescript
(pointsCount: number) => number;
```

Returns the quantity of possible connections among given quantity of points.

- <b id="circlearea">circleArea</b>

```typescript
(radius: number) => number;
```

Returns the area of the circle given its radius.

- <b id="center">center</b>

```typescript
(points: Point[]) => Point;
```

Returns the center of given points.

- <b id="farthest">farthest</b>

```typescript
(point: Point, points: Point[]) => Point | null;
```

Returns the farthest point from the given point among the given array; **`null`** if the array is empty.

- <b id="rotate">rotate</b>

```typescript
  (points: Point[], centerPoint: Point, angleInRadians: number) => Point[]
```

Returns the points rotated around the given center point.

- <b id="sort">sort</b>

```typescript
  (points: Point[], coordinate?: "x" | "y") => Point[]
```

**Mutates `points`** in place (`Array.sort`) and returns the same array reference. Omit **`coordinate`** to sort primarily by **`x`**; **`"y"`** sorts by **`y`**.

- <b id="scale">scale</b>

```typescript
  (points: Point[], scaleFactorX: number, scaleFactorY: number) => Point[]
```

Returns the scaled points.

- <b id="inline">inLine</b>

```typescript
interface Line {
    start: Point;
    end: Point;
}

(point: Point, line: Line) => boolean;
```

Returns boolean value indicating whether or not the given coordinates are on line defined by two other points.

- <b id="cross">cross</b>

```typescript
(line1: Line, line2: Line) => boolean;
```

Returns boolean value indicating if two lines each defined by two points intersect.

- <b id="move">move</b>

```typescript
(point: Point, xStep: number, yStep: number) => Point;
```

Returns a point of with the new coordinates.

- <b id="lerp">lerp</b>

```typescript
(point1: Point, point2: Point, t: number) => Point;
```

Returns the linearly interpolated point between **`point1`** and **`point2`** at parameter **`t`** (0 = `point1`, 1 = `point2`, 0.5 = midpoint). Values of `t` outside `[0, 1]` extrapolate beyond the two points.

- <b id="square">square</b>

```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points representing a shape of square.Takes four parameters: starting coordinates (x and y), size of square side, and direction which should be one of the values "left", "right", "up",
"down".

- <b id="rectangle">rectangle(point, width, height, [direction])</b>

```typescript
 (point: Point, width: number, height: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns vertices of a rectangle starting at **`point`**, advancing **`width`** then **`height`** along the directional path (same directional convention as [square](#square)).

- <b id="triangle">triangle(point, size, [direction])</b>

```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points representing a shape of triangle.Takes same parameters as [square](#square) function.

- <b id="pentagon">pentagon(center, radius, [angle])</b>

```typescript
 (centerPoint: Point, radius: number, angle?: number) => Point[]
```

Returns vertices of a pentagon around **`centerPoint`** with **`radius`** and rotation **`angle`** (degrees, default **`0`**).

### Math

- <b id="degreestoradians">degreesToRadians</b>

```typescript
(degrees: number) => number;
```

Converts degrees to radians.

- <b id="radianstodegrees">radiansToDegrees</b>

```typescript
(radians: number) => number;
```

Converts radians to degrees.

- <b id="inrange">inRange</b>

```typescript
(number: number, min: number, max: number) => boolean;
```

Returns true if the given number is within the specified range.

- <b id="roundtoprecision">roundToPrecision</b>

```typescript
(number: number, precision: -100 | -10 | 0 | 10 | 100 | number) => number;
```

Rounds the number to the given precision.

- <b id="average">average</b>

```typescript
(numbers: number[]) => number;
```

Returns the average of all numbers in an array.

### Arrays

- <b id="intersection">intersection</b>

```typescript
 <T>(arr1: T[], arr2: T[]) => T[]
```

Returns the array of intersection of two arrays.

- <b id="difference">difference</b>

```typescript
 <T>(arr1: T[], arr2: T[]) => T[]
```

Returns the array of difference of two arrays.

- <b id="chunk">chunk</b>

```typescript
 <T>(arr: T[], perArr: number) => T[][]
```

Returns an array splited into chunks based on elements count per chunk.

- <b id="removeDuplicates">removeDuplicates(arr)</b>

```typescript
 <T>(arr: T[]) => T[]
```

Returns the array without duplicates.

- <b id="sample">sample</b>

```typescript
  <T>(arr: T[], size?: number) => T | T[]
```

Returns a random sample from an array with optional size argument for sampling length. If not specified, it returns only one element.

### Randomization

- <b id="randomnumber">randomNumber</b>

```typescript
(min: number, max: number) => number;
```

Returns a random number within the given range.

- <b id="randomboolean">randomBoolean</b>

```typescript
() => boolean;
```

Returns a random boolean value.

- <b id="uniqueid">uniqueId</b>

```typescript
  ([other ids]: string[]) => string
```

Returns a unique ID that's different from the provided IDs, or a random ID if no other IDs are given.

### Types and imports (TypeScript)

Use **named imports** so bundlers can tree-shake unused functions:

```typescript
import { distance, collision, nearest, Point } from "pointscape";
import type { Bounds, Line, PointType } from "pointscape";
```

Functions take any **`{ x: number; y: number }`**; you do **not** have to allocate a `Point` class instance. **`PointType`** matches instances of **`Point`** (the class exported from this package).

### Developing

Open a PR against the default branch; **CI** runs **`npm ci`**, **tests**, and **`npm run build`** on every push/PR (see **[`.github/workflows/ci.yml`](./.github/workflows/ci.yml)**).

```bash
git clone https://github.com/Arman2409/pointscape.git
cd pointscape
nvm use   # optional: picks Node from .nvmrc
npm ci
npm test
npm run build
```

### Publishing on npm

1. Bump **`version`** in `package.json` and update **`CHANGELOG.md`**.
2. **`npm login`** with an account that [**maintains** `pointscape\*\*](https://www.npmjs.com/package/pointscape) on the public registry (`https://registry.npmjs.org/`).
3. **`npm publish`** — the **`prepack`** script rebuilds **`dist/`** first.

Preview tarball contents locally: **`npm run publish:dry-run`**.

See also [npm `files` publish guide](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files) — only `dist/`, readme, changelog, and license are published.