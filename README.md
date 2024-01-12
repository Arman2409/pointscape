<h1 align="center">2D<h1>

Utility functions for different actions with points in 2D coordinate
system and not only.It focuses on interactions between different points
in the coordinate system.

## How to use

1. Installation
```javascript
 npm install 2D
```

2. Usage
```javascript
 import 2d from "2D";
```


## Functions

This section explains the usage of the utility functions

### Actions with points in xy coordinate system

1. <b>distance(x1, y1, x2, y2)</b>

   returns distance beetween two points

2. <b>area(points)</b>

   returns the area inside the given points
   takes argument an array of points, which represent 
   objects with x and y properties
   
3. <b>collision(x1, y1, x2, y2,collisionDistance, [callback])</b>

   returns boolean depending if the two points are near to each other more than the given distance
   
4. <b>collisionInArray(x1, y1, radius, points, [callback])</b>

   returns the point which is nearer more than the radius to the given point, or false if ther is no collision

5. <b>positionInCircle(centerX, centerY, radius, angleInRadians)</b>

    returns the xy coordinates for the current point in circle by giving it the coordinates for the center, the radius and the angle

6. <b>angle(x1, y1, x2, y2)</b>

   returns the angle mad by the connection of two points

7. <b>middlePoint(x1, y1, x2, y2)</b>

   returns the middle point of two points

8. <b>nearest(x, y, points)</b>

   returns the nearest point to the given point from the array

9. <b>perimeter(points)</b>

   returns the perimeter of the figure made by the given points

10. <b>pointWithoutCollision(minX, maxX, minY, maxY, distance, points)</b>

   returns the point which doesn't collide with any of given points 
   in given distance if there is such point, takes the dimseions where the point can be, the distance between points and the other points

11. <b>randomPoint([xMin], [xMax], [yMin], [yMax])</b>
   
    returns a point in given dimesions if they are given

12. <b>randomPointInDistance(x, y, distance)</b>
   
    returns a random point in given distance from the given point

13. <b>randomPoints([xMin], [xMax], [yMin], [yMax], quantity)</b>
   
    returns points of given quantity in given dimesions if they are given

### Math

1. <b>degreesToRadians(degrees)</b>

    returns degrees converted to radians

2. <b>radiansToDegrees(radians)</b>

    returns radians converted to degrees

3. <b>inRange(number, min, max)</b>
   
    returns true if the given number is in given range

4. <b>roundToPrecision(number, precision)</b>
   
    returns the rounded number to the given precision

### Randomization

1. <b>randomNumber(min, max)</b>

    returns random number in the given range

2. <b>randomBoolean()</b>
   
    returns random boolean

3. <b>uniqueId([other ids])</b>
   
    returns a different id from other given ids or just a random id if other ids aren't given