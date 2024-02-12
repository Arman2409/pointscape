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

Actions with points in XY coordinate system:

[distance]: (#distance)
area(points): Link to description: #area
collision(x1, y1, x2, y2, collisionDistance, [callback]): Link to description: #collision
collisionInArray(x1, y1, radius, points, [callback]): Link to description: #collisionInArray
positionInCircle(centerX, centerY, radius, angleInRadians): Link to description: #positionInCircle
angle(x1, y1, x2, y2): Link to description: #angle
middlePoint(x1, y1, x2, y2): Link to description: #middlePoint
nearest(x, y, points): Link to description: #nearest
perimeter(points): Link to description: #perimeter
pointWithoutCollision(minX, maxX, minY, maxY, distance, points): Link to description: #pointWithoutCollision
randomPoint([xMin], [xMax], [yMin], [yMax]): Link to description: #randomPoint
randomPointInDistance(x, y, distance): Link to description: #randomPointInDistance
randomPoints([xMin], [xMax], [yMin], [yMax], quantity): Link to description: #randomPoints
possibleConnections(pointsCount): Link to description: #possibleConnections
circleArea(radius): Link to description: #circleArea
center(points): Link to description: #center
farest(x, y, points): Link to description: #farest
inLine(x, y, point1, point2): Link to description: #inLine
cross(line1Start, line1End, line2Start, line2End): Link to description: #cross
move( x, y, xStep, yStep, count): Link to description: #move
square( x, y, size, direction): Link to description: #square
Math:

degreesToRadians(degrees): Link to description: #degreesToRadians
radiansToDegrees(radians): Link to description: #radiansToDegrees
inRange(number, min, max): Link to description: #inRange
roundToPrecision(number, precision): Link to description: #roundToPrecision
average(numbers): Link to description: #average
Randomization:

randomNumber(min, max): Link to description: #randomNumber
randomBoolean(): Link to description: #randomBoolean
uniqueId([other ids]): Link to description: #uniqueId
Arrays:

intersection(arr1, arr2): Link to description: #intersection
difference(arr1, arr2): Link to description: #difference
chunk(arr, perArr): Link to description: #chunk

This section explains the usage of the utility functions.

### Actions with points in XY coordinate system

1. <b id="distance">distance(x1, y1, x2, y2)</b>

   Returns the distance beetween two points.

2. <b>area(points)</b>

   Returns the area enclosed by the given points.
   Takes an array of points as argument, where each point is an object with x and y properties.

3. <b>collision(x1, y1, x2, y2,collisionDistance, [callback])</b>

   Returns a boolean indicating if the two points are closer than the given distance.
   
4. <b>collisionInArray(x1, y1, radius, points, [callback])</b>

   Returns the point that is closer than the radius to the given point, or false if there's no collision.

5. <b>positionInCircle(centerX, centerY, radius, angleInRadians)</b>

    Returns the XY coordinates for the current point in the circle, given its center, radius, and angle.

6. <b>angle(x1, y1, x2, y2)</b>

   Returns the angle formed by the connection of two points.

7. <b>middlePoint(x1, y1, x2, y2)</b>

   Returns the midpoint between two points.

8. <b>nearest(x, y, points)</b>

   Returns the nearest point to the given point from the array.

9. <b>perimeter(points)</b>

   Returns the perimeter of the figure formed by the given points.

10. <b>pointWithoutCollision(minX, maxX, minY, maxY, distance, points)</b>

    Returns a point that doesn't collide with any of the given points within the specified distance, if such a point exists, otherwise returns false.

11. <b>randomPoint([xMin], [xMax], [yMin], [yMax])</b>
   
    Returns a random point within the given dimensions, if provided.

12. <b>randomPointInDistance(x, y, distance)</b>
   
    Returns a random point within the given distance from the specified point.

13. <b>randomPoints([xMin], [xMax], [yMin], [yMax], quantity)</b>
   
    Returns a specified quantity of random points within the given dimensions, if dimensions are provided.

14. <b>possibleConnections(pointsCount)</b>
   
    Returns the quantity of possible connections among given quantity of points.

15. <b>circleArea(radius)</b>

    Returns the area of the circle.

16. <b>center(points)</b>

    Returns the center of given points.

17. <b>farest(x, y, points)</b>

    Returns the farest point to the given point from the array.

18. <b>inLine(x, y, point1, point2)</b>

    Returns boolean  value indicating whether or not the given coordinates are on line defined by two other points.

19. <b>cross(line1Start, line1End, line2Start, line2End)</b>

    Returns boolean value indicating if two lines each defined  by two points intersect.

20. <b>move( x, y, xStep, yStep, count)</b>

    Returns an array of points  representing a moving point over time. The number of elements in the array is equal to "count". Each element contains coordinates of the point.

21. <b>square( x, y, size, direction)</b>

    Returns an array of points  representing a shape of rectangle.Takes  four parameters: starting coordinates (x and y), size of square side, and direction which should be one of the values "left", "right", "up",
    "down".

### Math

1. <b>degreesToRadians(degrees)</b>

    Converts degrees to radians.

2. <b>radiansToDegrees(radians)</b>

    Converts radians to degrees.

3. <b>inRange(number, min, max)</b>
   
    Returns true if the given number is within the specified range.

4. <b>roundToPrecision(number, precision)</b>
   
    Rounds the number to the given precision.

4. <b>average(numbers)</b>
   
    Returns the average of all numbers in an array.

### Randomization

1. <b>randomNumber(min, max)</b>

    Returns a random number within the given range.

2. <b>randomBoolean()</b>
   
    Returns a random boolean value.

3. <b>uniqueId([other ids])</b>
   
   Returns a unique ID that's different from the provided IDs, or a random ID if no other IDs are given.

### Arrays

1. <b>intersection(arr1, arr2)</b>

    Returns the array of intersection of two arrays.

2. <b>difference(arr1, arr2)</b>

    Returns the array of difference of two arrays.
   
3. <b>chunk(arr, perArr)</b>

<<<<<<< HEAD
    Returns an array splited into chunks based on elements count per chunk.
=======
    Returns an array splited into chunks based on elements count per chunk.
>>>>>>> d7bc879 (function names added)
