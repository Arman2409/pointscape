**A collection of functions for working with points in a 2D coordinate system, along with additional utility functions.**

## How to use

1. Installation
```bash
 npm install pointscape
```

2. Usage
```typescript
 import pointscape from "pointscape";
```

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
 import type { Point } from "pointscape";  
 
 // Working with points

 const point1: Point = {x: 0, y: 0}, point2: Point = {x: 10, y: 10};


 const distanceBetweenPoints = distance(point1, point2); 
 // result: 14.142135623730951


 const middlePoint = middle(point1, point2);
 // result: {x: 5, y: 5}


 const angleBetweenPoints = angle(point1, point2);
 // result: 0.7853981633974483
 

 const point3: Point = {x:0, y:10}, point4: Point = {x:10, y:0};

 const perimeterOfPoints = perimeter(
   [point1, point2, point3, point4 ]
 );
 // result: 48.2842712474619

```

The Point class can also be used for working with the points.
```typescript
 import { Point } from "pointscape";

 const point1 = new Point(0, 0);
 const point2 = new Point(1, 1);

 const distance = point1.distanceTo(point2);
 // result:  1.4142135623730951

 const angle = point1.angleTo(point2);
 // result:  0.7853981633974483
 
``` 

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
  (point1: Point, point2: Point, collisionDistance: number, [callback]: Function) => boolean
```

Returns a boolean indicating if the two points are closer than the given distance.

* <b id="collisioninarray">collisionInArray</b>
```typescript
  (point: Point, radius: number, points: Point[], [callback]: Function) => Point[]
```

Returns the points that are closer than the radius to the given point.

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
  (point: Point, points: Point[]) => Point
```

Returns the nearest point to the given point from the array.

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
  (radius): number => number
``` 

Returns the area of the circle.

* <b id="center">center</b>
```typescript
  (points: Point[]) => Point
```

Returns the center of given points.

* <b id="farest">farest</b>
```typescript
  (point: Point, points: Point[]) => Point
```

Returns the farest point to the given point from the array.

* <b id="rotate">rotate</b>
```typescript
  (point: Point, points: Point[], angleInRadians: number) => Point[]
```

Returns the points rotated around the given point.

* <b id="sort">sort</b>
```typescript
  (points: Point, [coordinate]: "x" | "y") => Point[]
```

Returns sorted array of the points.The coordinate parameter can be "x", "y", or none for sorting both for "x" and "y".

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

* <b id="square">square</b>
```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points  representing a shape of square.Takes  four parameters: starting coordinates (x and y), size of square side, and direction which should be one of the values "left", "right", "up",
"down".

* <b id="rectangle">rectangle(point, size, [direction])</b>
```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points  representing a shape of rectangle.Takes  same parameters as [square](#square) function.

* <b id="triangle">triangle(point, size, [direction])</b>
```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points  representing a shape of triangle.Takes  same parameters as [square](#square) function.

* <b id="pentagon">pentagon(point, size, [direction])</b>
```typescript
 (point: Point, size: number, [direction]: "left" | "right" | "down" | "up" ) => Point[]
```

Returns an array of points  representing a shape of pentagon.Takes  four parameters: starting coordinates (x and y), size of pentagon side, and the angle of pentagon's rotation.

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

* <b id="roundtoprecision">roundToPrecision)</b>
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

* <b id="intersection">intersection(</b>
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