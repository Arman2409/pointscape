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


## Functions

#### Actions with points in XY coordinate system
[distance](#distance)

[area](#area)

[collision](#collision)

[collisionInArray](#collisionInArray)

[positionInCircle](#positionInCircle)

[angle](#angle)

[middlePoint](#middlePoint)

[nearest](#nearest)

[perimeter](#perimeter)

[pointWithoutCollision](#pointWithoutCollision)

[randomPoint](#randomPoint)

[randomPointInDistance](#randomPointInDistance)

[randomPoints](#randomPoints)

[possibleConnections](#possibleConnections)

[circleArea](#circleArea)

[center](#center)

[farest](#farest)

[inLine](#inLine)

[cross](#cross)

[move](#move)

[square](#square)

#### Math
[degreesToRadians](#degreesToRadians)

[radiansToDegrees](#radiansToDegrees)

[inRange](#inRange)

[roundToPrecision](#roundToPrecision)

[average](#average)

#### Arrays
[intersection](#intersection)

[difference](#difference)

[chunk](#chunk)

#### Randomization
[randomNumber](#randomNumber)

[randomBoolean](#randomBoolean)

[uniqueId](#uniqueId)


### Actions with points in XY coordinate system
* <b id="distance">distance(x1, y1, x2, y2)</b>

   Returns the distance beetween two points.
* <b id="area">area(points)</b>

   Returns the area enclosed by the given points.
   Takes an array of points as argument, where each point is an object with x and y properties.
* <b id="collision">collision(x1, y1, x2, y2,collisionDistance, [callback])</b>

   Returns a boolean indicating if the two points are closer than the given distance.
   * <b id="collisionInArray">collisionInArray(x1, y1, radius, points, [callback])</b>

   Returns the point that is closer than the radius to the given point, or false if there's no collision.
* <b id="positionInCircle">positionInCircle(centerX, centerY, radius, angleInRadians)</b>

    Returns the XY coordinates for the current point in the circle, given its center, radius, and angle.
* <b id="angle">angle(x1, y1, x2, y2)</b>

   Returns the angle formed by the connection of two points.
* <b id="middlePoint">middlePoint(x1, y1, x2, y2)</b>

   Returns the midpoint between two points.
* <b id="nearest">nearest(x, y, points)</b>

   Returns the nearest point to the given point from the array.
* <b id="perimeter">perimeter(points)</b>

   Returns the perimeter of the figure formed by the given points.

* <b id="pointWithoutCollision">pointWithoutCollision(minX, maxX, minY, maxY, distance, points)</b>

    Returns a point that doesn't collide with any of the given points within the specified distance, if such a point exists, otherwise returns false.

* <b id="randomPoint">randomPoint([xMin], [xMax], [yMin], [yMax])</b>
   
    Returns a random point within the given dimensions, if provided.

* <b id="randomPointInDistance">randomPointInDistance(x, y, distance)</b>
   
    Returns a random point within the given distance from the specified point.

* <b id="randomPoints">randomPoints([xMin], [xMax], [yMin], [yMax], quantity)</b>
   
    Returns a specified quantity of random points within the given dimensions, if dimensions are provided.

* <b id="possibleConnections">possibleConnections(pointsCount)</b>
   
    Returns the quantity of possible connections among given quantity of points.

* <b id="circleArea">circleArea(radius)</b>

    Returns the area of the circle.

* <b id="center">center(points)</b>

    Returns the center of given points.

* <b id="farest">farest(x, y, points)</b>

    Returns the farest point to the given point from the array.

* <b id="inLine">inLine(x, y, point1, point2)</b>

    Returns boolean  value indicating whether or not the given coordinates are on line defined by two other points.

* <b id="cross">cross(line1Start, line1End, line2Start, line2End)</b>

    Returns boolean value indicating if two lines each defined  by two points intersect.

* <b id="move">move( x, y, xStep, yStep, count)</b>

    Returns an array of points  representing a moving point over time. The number of elements in the array is equal to "count". Each element contains coordinates of the point.

* <b id="square">square( x, y, size, direction)</b>

    Returns an array of points  representing a shape of rectangle.Takes  four parameters: starting coordinates (x and y), size of square side, and direction which should be one of the values "left", "right", "up",
    "down".

### Math

* <b id="degreesToRadians">degreesToRadians(degrees)</b>

    Converts degrees to radians.

* <b id="radiansToDegrees">radiansToDegrees(radians)</b>

    Converts radians to degrees.

* <b id="inRange">inRange(number, min, max)</b>
   
    Returns true if the given number is within the specified range.

* <b id="roundToPrecision">roundToPrecision(number, precision)</b>
   
    Rounds the number to the given precision.

* <b id="average">average(numbers)</b>
   
    Returns the average of all numbers in an array.

### Randomization

* <b id="randomNumber">randomNumber(min, max)</b>

    Returns a random number within the given range.

* <b id="randomBoolean">randomBoolean()</b>
   
    Returns a random boolean value.

* <b id="uniqueId">uniqueId([other ids])</b>
   
   Returns a unique ID that's different from the provided IDs, or a random ID if no other IDs are given.

### Arrays

* <b id="intersection">intersection(arr1, arr2)</b>

    Returns the array of intersection of two arrays.

* <b id="difference">difference(arr1, arr2)</b>

    Returns the array of difference of two arrays.
   
* <b id="chunk">chunk(arr, perArr)</b>

    Returns an array splited into chunks based on elements count per chunk.
