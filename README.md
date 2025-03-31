Simplify point manipulation and interactions in your 2D projects with this versatile toolkit.Effortlessly calculate distances, areas, collision detection, and more with this collection of handy functions.

## How to use

1. Installation
```javascript
 npm install pointscape
```

2. Usage
```javascript
 import pointscape from "pointscape";
```

## Examples

```javascript
 import { 
    distance,
    triangle,
    center, 
    inRange,
    chunk, 
    randomBoolean } from "pointscape";


 const distanceBetweenPoints = distance({x: 0, y: 0}, {x: 10, y: 10});
 console.log(distanceBetweenPoints); 
 // output: 14.142135623730951


 const pointsForTriangle = triangle({x: 0, y: 0}, 10);
 console.log(pointsForTriangle); 
 // output: [ { x: 0, y: 0 }, { x: -10, y: 0 }, { x: -5, y: 8.660254037844386 } ]


 const centralPoint = center(
   [{x:0, y: 0}, {x:0, y:10}, {x:10, y:10}, {x:10, y:0}]
 );
 console.log(centralPoint);
 // output: { x: 5, y: 5 }


 const isInTheRange = inRange(1, 0, 10);
 console.log(isInTheRange);
 // output: true


 const chunks = chunk([1, 1, 1, 1], 2);
 console.log(chunks);
 // output: [[1, 1], [1, 1]]


 const randomBool = randomBoolean();
 console.log(randomBool)
 // output: true or false

```

## Functions

#### Actions with points in XY coordinate system
[distance](#distance)

[area](#area)

[collision](#collision)

[collisionInArray](#collisioninarray)

[positionInCircle](#positionincircle)

[angle](#angle)

[middle](#middle)

[nearest](#nearest)

[perimeter](#perimeter)

[pointWithoutCollision](#pointwithoutcollision)

[randomPoint](#randompoint)

[randomPointInDistance](#randompointindistance)

[randomPoints](#randompoints)

[possibleConnections](#possibleconnections)

[circleArea](#circlearea)

[center](#center)

[farest](#farest)

[rotate](#rotate)

[sort](#sort)

[scale](#scale)

[inLine](#inline)

[cross](#cross)

[move](#move)

[square](#square)

[rectangle](#rectangle)

[pentagon](#pentagon)

[triangle](#triangle)

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



### Actions with points in XY coordinate system
* <b id="distance">distance</b>
```typescript
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
  (minX: number, maxX: number, minY: number, maxY: number, distance: number, points: Point[]) => Point | false
```

    Returns a point that doesn't collide with any of the given points within the specified distance, if such a point exists, otherwise returns false.

* <b id="randompoint">randomPoint</b>
```typescript
  ([xMin]: number, [xMax]: number, [yMin]: number, [yMax]: number) => Point
```
    Returns a random point within the given dimensions, if provided, otherwise in 100  units on both axes.

* <b id="randompointindistance">randomPointInDistance</b>
```typescript
  (point: Point, distance: number) => Point
``` 
   
Returns a random point within the given distance from the specified point.

* <b id="randompoints">randomPoints</b>
```typescript
  (quantity: number, [xMin]: number, [xMax]: number, [yMin]: number, [yMax]: number) => Point[]
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
  ([point1, point2, point3]: Point[]) => boolean
```

    Returns boolean  value indicating whether or not the given coordinates are on line defined by two other points.

* <b id="cross">cross</b>
```typescript
 (line1Start: Point, line1End: Point, line2Start: Point, line2End: Point) => boolean
```

    Returns boolean value indicating if two lines each defined  by two points intersect.

* <b id="move">move</b>
```typescript
 (point: Point, xStep: number, yStep: number, count: number) => Point[]
```

    Returns an array of points  representing a moving point over time. The number of elements in the array is equal to "count". Each element contains coordinates of the point.

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