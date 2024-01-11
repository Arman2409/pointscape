<h1 align="center">2D<h1>

Utility functions for different actions with points in 2D coordinate system and not only.It focuses on interactions between different points on the system.

## Installation

>>>
  npm install 2D
>>>

## Functions

1. <b>distance(x1, y1, x2, y2) </b> 
   returns distance beetween two points
2. area(points)
   returns the area inside the given points
   takes argument an array of points, which represent objects with x and y properties
3. collision(x1, y1, x2, y2,collisionDistance, [callback])
   returns boolean depending if the two points are near to each other more than the given distance
4. collisionInArray(x1, y1, radius, points, [callback])
   returns the point which is nearer more than the radius to the given point, or false if ther is no collision
5. degreesToRadians(degrees)
   returns degrees converted to radians
6. angle(x1, y1, x2, y2)
   returns the angle mad by the connection of two points
7. middlePoint(x1, y1, x2, y2)
   returns the middle point of two points
8. nearest(x, y, points)
   returns the nearest point to the given point from the array
9. perimeter(points)
   returns the perimeter of the figure made by the given points
10. pointWithoutCollision(minX, maxX, minY, maxY, distance, points)
   returns the point which doesn't collide with any of given points 
   in given distance if there is such point, takes the dimseions where the point can be, the distance between points and the other points
11. positionInCircle(centerX, centerY, radius, angleInRadians)
    returns the xy coordinates for the current point in circle by giving it the coordinates for the center, the radius and the angle 
12. radiansToDegrees(radians)
    returns radians converted to degrees
13. randomBoolean()
    returns random boolean
14. randomNumber()
    returns random number
15. randomPoint([xMin], [xMax], [yMin], [yMax])
    returns a point in given dimesions if they are given
16. inRange(number, min, max)
    returns true if the given number is in given range
17. randomPointInDistance(x, y, distance)
    returns a random point in given distance from the given point
18. roundToPrecision(number, precision)
    returns the rounded number to the given precision
19. randomPoints([xMin], [xMax], [yMin], [yMax], quantity)
    returns points of given quantity in given dimesions if they are given
20. uniqueId([other ids])
    returns a different id from other given ids or just a random id if other ids aren't given