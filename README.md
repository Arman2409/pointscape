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
* <b id="distance">distance(point1, point2)</b>

   Returns the distance beetween two points, each point is an object with x and y properties.

* <b id="area">area(points)</b>

   Returns the area enclosed by the given points.
   Takes an array of points as argument, where each point is an object with x and y properties.

* <b id="collision">collision(point1, point2, collisionDistance, [callback])</b>

   Returns a boolean indicating if the two points are closer than the given distance.

* <b id="collisioninarray">collisionInArray(point, radius, points, [callback])</b>

   Returns the point that is closer than the radius to the given point, or false if there's no collision.

* <b id="positionincircle">positionInCircle(point, radius, angleInRadians)</b>

    Returns the x and y coordinates for the current point in the circle, given its center point, radius, and angle.

* <b id="angle">angle(point1, point2)</b>

   Returns the angle formed by the connection of two points.

* <b id="middle">middle(point1, point2)</b>

   Returns the midpoint between two points.

* <b id="nearest">nearest(point, points)</b>

   Returns the nearest point to the given point from the array.

* <b id="perimeter">perimeter(points)</b>

   Returns the perimeter of the figure formed by the given points.

* <b id="pointwithoutcollision">pointWithoutCollision(minX, maxX, minY, maxY, distance, points)</b>

    Returns a point that doesn't collide with any of the given points within the specified distance, if such a point exists, otherwise returns false.

* <b id="randompoint">randomPoint([xMin], [xMax], [yMin], [yMax])</b>
   
    Returns a random point within the given dimensions, if provided, otherwise in 100  units on both axes.

* <b id="randompointindistance">randomPointInDistance(point, distance)</b>
   
    Returns a random point within the given distance from the specified point.

* <b id="randompoints">randomPoints(quantity, [xMin], [xMax], [yMin], [yMax], )</b>
   
    Returns a specified quantity of random points within the given dimensions, if dimensions are provided, otherwise in the range of 100.

* <b id="possibleconnections">possibleConnections(pointsCount)</b>
   
    Returns the quantity of possible connections among given quantity of points.

* <b id="circlearea">circleArea(radius)</b>

    Returns the area of the circle.

* <b id="center">center(points)</b>

    Returns the center of given points.

* <b id="farest">farest(point, points)</b>

    Returns the farest point to the given point from the array.

* <b id="rotate">rotate(point, points, angleInRadians)</b>

    Returns the points rotated around the given point.

* <b id="sort">sort(points, [coordinate])</b>

    Returns sorted array of the points.The coordinate parameter can be "x", "y", or none for sorting both for "x" and "y".

* <b id="scale">scale(scaleFactorX, scaleFactorY, points)</b>

    Returns the scaled points.

* <b id="inline">inLine([point1, point2, point3])</b>

    Returns boolean  value indicating whether or not the given coordinates are on line defined by two other points.

* <b id="cross">cross(line1Start, line1End, line2Start, line2End)</b>

    Returns boolean value indicating if two lines each defined  by two points intersect.

* <b id="move">move(point, xStep, yStep, count)</b>

    Returns an array of points  representing a moving point over time. The number of elements in the array is equal to "count". Each element contains coordinates of the point.

* <b id="square">square(point, size, [direction])</b>

    Returns an array of points  representing a shape of square.Takes  four parameters: starting coordinates (x and y), size of square side, and direction which should be one of the values "left", "right", "up",
    "down".

* <b id="rectangle">rectangle(point, size, [direction])</b>

    Returns an array of points  representing a shape of rectangle.Takes  same parameters as [square](#square) function.

* <b id="triangle">triangle(point, size, [direction])</b>

    Returns an array of points  representing a shape of triangle.Takes  same parameters as [square](#square) function.

* <b id="pentagon">pentagon(point, size, [direction])</b>

    Returns an array of points  representing a shape of pentagon.Takes  four parameters: starting coordinates (x and y), size of pentagon side, and the angle of pentagon's rotation.

### Math

* <b id="degreestoradians">degreesToRadians(degrees)</b>

    Converts degrees to radians.

* <b id="radianstodegrees">radiansToDegrees(radians)</b>

    Converts radians to degrees.

* <b id="inrange">inRange(number, min, max)</b>
   
    Returns true if the given number is within the specified range.

* <b id="roundtoprecision">roundToPrecision(number, precision)</b>
   
    Rounds the number to the given precision.

* <b id="average">average(numbers)</b>
   
    Returns the average of all numbers in an array.

### Arrays

* <b id="intersection">intersection(arr1, arr2)</b>

    Returns the array of intersection of two arrays.

* <b id="difference">difference(arr1, arr2)</b>

    Returns the array of difference of two arrays.
   
* <b id="chunk">chunk(arr, perArr)</b>

    Returns an array splited into chunks based on elements count per chunk.

* <b id="removeDuplicates">removeDuplicates(arr)</b>

    Returns the array without duplicates.

* <b id="sample">sample(arr, [size])</b>

    Returns a random  sample from an array with optional size argument for sampling length. If not specified, it returns only one element.

### Randomization

* <b id="randomnumber">randomNumber(min, max)</b>

    Returns a random number within the given range.

* <b id="randomboolean">randomBoolean()</b>
   
    Returns a random boolean value.

* <b id="uniqueid">uniqueId([other ids])</b>
   
   Returns a unique ID that's different from the provided IDs, or a random ID if no other IDs are given.