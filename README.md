<h1 align="center">2D<h1>

Utility functions for different actions with points in 2D coordinate
system and not only.It focuses on interactions between different points
on the system.

## Installation

>>>
  npm install 2D
>>>

## Functions

1. <b>distance(x1, y1, x2, y2) </b> 

   returns distance beetween two points

2.  <b>area(points) </b>

   returns the area inside the given points
   takes argument an array of points, which represent 
   objects with x and y properties
   
3. <b>collision(x1, y1, x2, y2,collisionDistance, [callback])</b>

   returns boolean depending if the two points are near to each other more than the given distance
   
4. <b>collisionInArray(x1, y1, radius, points, [callback])</b>

   returns the point which is nearer more than the radius to the given point, or false if ther is no collision

5. <b>degreesToRadians(degrees)</b>

   returns degrees converted to radians

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
   
11. <b>positionInCircle(centerX, centerY, radius, angleInRadians)</b>
   <br />
    returns the xy coordinates for the current point in circle by giving it the coordinates for the center, the radius and the angle 
12. <b>radiansToDegrees(radians)</b>
   <br />
    returns radians converted to degrees
13. <b>randomBoolean()</b>
   <br />
    returns random boolean
14. <b>randomNumber()</b>
   <br />
    returns random number
15. <b>randomPoint([xMin], [xMax], [yMin], [yMax])</b>
   <br />
    returns a point in given dimesions if they are given
16. <b>inRange(number, min, max)
   <br />
    returns true if the given number is in given range
17. <b>randomPointInDistance(x, y, distance)</b>
   <br />
    returns a random point in given distance from the given point
18. <b>roundToPrecision(number, precision)</b>
   <br />
    returns the rounded number to the given precision
19. <b>randomPoints([xMin], [xMax], [yMin], [yMax], quantity)</b>
   <br />
    returns points of given quantity in given dimesions if they are given
20. <b>uniqueId([other ids])</b>
   <br />
    returns a different id from other given ids or just a random id if other ids aren't given