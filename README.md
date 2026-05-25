**A collection of functions for working with points in a 2D coordinate system, along with additional utility functions.**

[![CI](https://github.com/Arman2409/pointscape/actions/workflows/ci.yml/badge.svg)](https://github.com/Arman2409/pointscape/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/pointscape.svg)](https://www.npmjs.com/package/pointscape)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**[Live demos →](https://arman2409.github.io/pointscape/)**

## Table of contents

- [What's new](#whats-new-21x)
- [How to use](#how-to-use) — install, imports, develops, publishes
- [Examples](#examples)
- [Point class](#point-class)
- [Function reference](#documentation-for-the-functions)
- [Changelog](./CHANGELOG.md)

---

## What's new (2.1.x)

- **`lerp(point1, point2, t)`** — linear interpolation between two points.
- **`Point` class** — methods that return a point now return a `Point` instance (chainable). New methods: `lerp`, `rotateAround`, `equals`, `clone`, `toString`, `Point.from`. See [Point class](#point-class) below.
- **Bug fixes** — `middle()` now returns absolute coordinates for non-origin inputs; `perimeter()` works correctly for polygons not anchored at the origin; `pentagon()` now applies the `angle` rotation argument.

**Upgrading from 1.x?** `nearest` returns **`null`** for an empty list and `collision` uses true circular (Euclidean) distance — retune thresholds if you relied on the old axis-aligned box check.

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

### What ships on npm

The published tarball contains only **`dist/`** (ESM + CJS + types), **README**, **CHANGELOG**, and **LICENSE**—see [`package.json` → `files`](./package.json). Import ESM with `import` or CommonJS with `require` per your bundler; types are exposed through [`exports`](./package.json) for both.

1. **Default import** — one object with every export (larger surface; fine for scripts).
```typescript
import pointscape from "pointscape";
```

2. **Named imports** (preferred for tree-shaking) — see [Types and imports](#types-and-imports-typescript) below.

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
2. **`npm login`** with an account that [**maintains** `pointscape**](https://www.npmjs.com/package/pointscape) on the public registry (`https://registry.npmjs.org/`).  
3. **`npm publish`** — the **`prepack`** script rebuilds **`dist/`** first.

Preview tarball contents locally: **`npm run publish:dry-run`**.

See also [npm `files` publish guide](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files) — only `dist/`, readme, changelog, and license are published.

## Examples

Most of the functions are designed for working with points in a 2D coordinate system.
```typescript
 import { 
    distance,
    middle,
    angle,
    center,
    perimeter
    } from "pointscape";
 
 const point1 = { x: 0, y: 0 };
 const point2 = { x: 10, y: 10 };

 // Plain { x, y } objects work for all point APIs


 const distanceBetweenPoints = distance(point1, point2); 
 // result: 14.142135623730951


 const middlePoint = middle(point1, point2);
 // result: {x: 5, y: 5}


 const angleBetweenPoints = angle(point1, point2);
 // result: 0.7853981633974483
 

 const point3 = { x: 0, y: 10 }, point4 = { x: 10, y: 0 };

 const perimeterOfPoints = perimeter(
   [point1, point2, point3, point4 ]
 );
 // result: 48.2842712474619

```

### Point class

The `Point` class wraps any `{ x, y }` and exposes all geometric operations as chainable methods. Every method that returns a point returns a `Point` instance, so calls can be chained.

```typescript
import { Point } from "pointscape";

const a = new Point(10, 20);
const b = new Point(50, 80);

// Basic methods
a.distanceTo(b);          // 72.11...
a.angleTo(b);             // number in radians
a.equals(b);              // false
a.clone();                // Point(10, 20)
a.toString();             // "Point(10, 20)"

// Factory — convert a plain { x, y } to a Point instance
const c = Point.from({ x: 0, y: 0 });

// Chainable — move() and lerp() return Point instances
a.move(5, -5)             // Point(15, 15)
 .lerp(b, 0.5)            // Point(32.5, 47.5)
 .distanceTo(b);          // number

// Rotate a point around a center
a.rotateAround({ x: 0, y: 0 }, Math.PI); // Point(-10, -20)

// Array-based methods — also return Point or Point | null
a.nearestFromPoints([b, c]);  // Point | null
a.farestFromPoints([b, c]);   // Point | null
```

Plain `{ x: number; y: number }` objects work for every function — you don't need to allocate a `Point` instance unless you want the method API.

There are other utility functions as well.
```typescript
 import { 
    inRange,
    chunk, 
    randomBoolean } from "pointscape";

 //  Helper functions for math 

 const isInTheRange = inRange(1, 0, 10);
 // result: true


 // Helper functions for arrays 

 const chunks = chunk([1, 1, 1, 1], 2);
 // result: [[1, 1], [1, 1]]


 // Helper functions for randomization 

 const randomBool = randomBoolean();
 // result: true or false

```
## The list of available functions

### Categories

- [Points](#points)
    - [Geometry](#geometry)
    - [Positioning](#positioning)
    - [Relationships](#relationships)
- [Math](#math)
- [Arrays](#arrays)
- [Randomization](#randomization)


#### Points

##### Geometry

[area](#area)

[perimeter](#perimeter)

[center](#center)

[square](#square)

[rectangle](#rectangle)

[pentagon](#pentagon)

[triangle](#triangle)

[circleArea](#circlearea)

[middle](#middle)


##### Positioning

[distance](#distance)

[positionInCircle](#positionincircle)

[angle](#angle)

[nearest](#nearest)

[randomPoint](#randompoint)

[randomPointInDistance](#randompointindistance)

[randomPoints](#randompoints)

[farest](#farest)

[rotate](#rotate)

[inLine](#inline)

[cross](#cross)

[move](#move)

[lerp](#lerp)


##### Relationships

[collision](#collision)

[collisionInArray](#collisioninarray)

[possibleConnections](#possibleconnections)

[sort](#sort)

[scale](#scale)

[pointWithoutCollision](#pointwithoutcollision)


#### Math

[degreesToRadians](#degreestodadians)

[radiansToDegrees](#radianstodegrees)

[inRange](#inrange)

[roundToPrecision](#roundtoprecision)

[average](#average)


#### Arrays

[intersection](#intersection)

[difference](#difference)

[chunk](#chunk)

[removeDuplicate](#removeDuplicates)

[sample](#sample)


#### Randomization

[randomNumber](#randomnumber)

[randomBoolean](#randomboolean)

[uniqueId](#uniqueid)


## Documentation for the functions 

### Points

* <b id="distance">distance</b>
```typescript
  interface Point {
    x: number
    y: number
  }

  (point1: Point, point2: Point) => number
```

Returns the distance beetween two points, each point is an object with x and y properties.

* <b id="area">area</b>
```typescript
  (points: Point[]) => number
```

Returns the area enclosed by the given points.
Takes an array of points as argument, where each point is an object with x and y properties.

* <b id="collision">collision</b>
```typescript
  (point1: Point, point2: Point, collisionDistance: number, [callback]?: () => void) => boolean
```

Returns **`true`** if the **Euclidean distance** between the two points is less than or equal to **`collisionDistance`** (treat **`collisionDistance` as a non-negative radius for a circle** around each position). Optionally invokes **`callback`** when a collision is detected.

* <b id="collisioninarray">collisionInArray</b>
```typescript
  (initialPoint: Point, points: Point[], radius: number) => Point[]
```

Returns every point in **`points`** whose distance to **`initialPoint`** is within **`radius`**, using the same circular rule as [`collision`](#collision).

* <b id="positionincircle">positionInCircle</b>
```typescript
  (point: Point, radius: number, angleInRadians: number) => Point
```

Returns the x and y coordinates for the current point in the circle, given its center point, radius, and angle.

* <b id="angle">angle</b>
```typescript
  (point1: Point, point2: Point) => number
```

Returns the angle formed by the connection of two points.

* <b id="middle">middle</b>
```typescript
  (point1: Point, point2: Point) => Point
```

Returns the midpoint between two points.

* <b id="nearest">nearest</b>
```typescript
  (point: Point, points: Point[]) => Point | null
```

Returns the nearest point to the given point from the array, or **`null`** if **`points`** is empty.

* <b id="perimeter">perimeter</b>
```typescript
  (points: Point[]) => number
```

Returns the perimeter of the figure formed by the given points.

* <b id="pointwithoutcollision">pointWithoutCollision(minX, maxX, minY, maxY, distance, points)</b>
```typescript
  interface Bounds {
    min: number
    max: number
  }

  (xBounds: Bounds, yBounds: Bounds, distance: number, points: Point[]) => Point | string
```

Returns a point that doesn't collide with any of the given points within the specified distance, if such a point exists, otherwise returns error string.

* <b id="randompoint">randomPoint</b>
```typescript
  ([xBounds]: Bounds, [yBounds]: Bounds) => Point
```
Returns a random point within the given dimensions, if provided, otherwise in 100  units on both axes.

* <b id="randompointindistance">randomPointInDistance</b>
```typescript
  (point: Point, distance: number) => Point
``` 
   
Returns a random point within the given distance from the specified point.

* <b id="randompoints">randomPoints</b>
```typescript
   ([xBounds]: Bounds, [yBounds]: Bounds, quantity: number,) => Point[]
```  

Returns a specified quantity of random points within the given dimensions, if dimensions are provided, otherwise in the range of 100.

* <b id="possibleconnections">possibleConnections</b>
```typescript
  (pointsCount: number) => number
``` 
   
Returns the quantity of possible connections among given quantity of points.

* <b id="circlearea">circleArea</b>
```typescript
  (radius: number) => number
``` 

Returns the area of the circle given its radius.

* <b id="center">center</b>
```typescript
  (points: Point[]) => Point
```

Returns the center of given points.

* <b id="farest">farest</b>
```typescript
  (point: Point, points: Point[]) => Point | null
```

Returns the farthest point from the given point among the given array; **`null`** if the array is empty.

* <b id="rotate">rotate</b>
```typescript
  (point: Point, points: Point[], angleInRadians: number) => Point[]
```

Returns the points rotated around the given point.

* <b id="sort">sort</b>
```typescript
  (points: Point[], coordinate?: "x" | "y") => Point[]
```

**Mutates `points`** in place (`Array.sort`) and returns the same array reference. Omit **`coordinate`** to sort primarily by **`x`**; **`"y"`** sorts by **`y`**.

* <b id="scale">scale</b>
```typescript
  (scaleFactorX: number, scaleFactorY: number, points: Point[]) => Point[]
```

Returns the scaled points.

* <b id="inline">inLine</b>
```typescript
  interface Line {
    start: Point
    end: Point
  }

  (point: Point, line: Line) => boolean
```

Returns boolean  value indicating whether or not the given coordinates are on line defined by two other points.

* <b id="cross">cross</b>
```typescript
 (line1: Line, line2: Line) => boolean
```

Returns boolean value indicating if two lines each defined  by two points intersect.

* <b id="move">move</b>
```typescript
 (point: Point, xStep: number, yStep: number) => Point
```

Returns a point of with the new coordinates.

* <b id="lerp">lerp</b>
```typescript
 (point1: Point, point2: Point, t: number) => Point
```

Returns the linearly interpolated point between **`point1`** and **`point2`** at parameter **`t`** (0 = `point1`, 1 = `point2`, 0.5 = midpoint). Values of `t` outside `[0, 1]` extrapolate beyond the two points.

* <b id="square">square</b>
```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points  representing a shape of square.Takes  four parameters: starting coordinates (x and y), size of square side, and direction which should be one of the values "left", "right", "up",
"down".

* <b id="rectangle">rectangle(point, width, height, [direction])</b>
```typescript
 (point: Point, width: number, height: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns vertices of a rectangle starting at **`point`**, advancing **`width`** then **`height`** along the directional path (same directional convention as [square](#square)).

* <b id="triangle">triangle(point, size, [direction])</b>
```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points  representing a shape of triangle.Takes  same parameters as [square](#square) function.

* <b id="pentagon">pentagon(center, radius, [angle])</b>
```typescript
 (centerPoint: Point, radius: number, angle?: number) => Point[]
```

Returns vertices of a pentagon around **`centerPoint`** with **`radius`** and rotation **`angle`** (degrees, default **`0`**).

### Math

* <b id="degreestoradians">degreesToRadians</b>
```typescript
 (degrees: number) => number
```

Converts degrees to radians.

* <b id="radianstodegrees">radiansToDegrees</b>
```typescript
 (radians: number) => number
```

Converts radians to degrees.

* <b id="inrange">inRange</b>
```typescript
 (number: number, min: number, max: number) => boolean
```

Returns true if the given number is within the specified range.

* <b id="roundtoprecision">roundToPrecision</b>
```typescript
 (number: number, precision: -100 | -10 | 0 | 10 | 100 | number) => number
```

Rounds the number to the given precision.

* <b id="average">average</b>
```typescript
 (numbers: number[]) => number
```

Returns the average of all numbers in an array.

### Arrays

* <b id="intersection">intersection</b>
```typescript
 (arr1: any[], arr2: any[]) => any[]
```

Returns the array of intersection of two arrays.

* <b id="difference">difference</b>
```typescript
 (arr1: any[], arr2: any[]) => any[]
```

Returns the array of difference of two arrays.
   
* <b id="chunk">chunk</b>
```typescript
 (arr: any[], perArr: number) => any[][]
```

Returns an array splited into chunks based on elements count per chunk.

* <b id="removeDuplicates">removeDuplicates(arr)</b>
```typescript
 (arr: any[]) => any[]
```

Returns the array without duplicates.

* <b id="sample">sample</b>
```typescript
  (arr: any[], [size]: number[]) => any[]
```

Returns a random  sample from an array with optional size argument for sampling length. If not specified, it returns only one element.

### Randomization

* <b id="randomnumber">randomNumber</b>
```typescript
  (min: number, max: number) => number
```

Returns a random number within the given range.

* <b id="randomboolean">randomBoolean</b>
```typescript
  () => boolean
```

Returns a random boolean value.

* <b id="uniqueid">uniqueId</b>
```typescript
  ([other ids]: string[]) => string 
```

Returns a unique ID that's different from the provided IDs, or a random ID if no other IDs are given.