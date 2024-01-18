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

This section explains the usage of the utility functions.

### Actions with points in XY coordinate system

1. <b>distance(x1, y1, x2, y2)</b>

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

16. <b>center</b>

    Returns the center of given points.

16. <b>farest(x, y, points)</b>

    Returns the farest point to the given point from the array.

    
### Math

1. <b>degreesToRadians(degrees)</b>

    Converts degrees to radians.

2. <b>radiansToDegrees(radians)</b>

    Converts radians to degrees.

3. <b>inRange(number, min, max)</b>
   
    Returns true if the given number is within the specified range.

4. <b>roundToPrecision(number, precision)</b>
   
    Rounds the number to the given precision.

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
   
    