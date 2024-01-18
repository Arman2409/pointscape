// core/points/distance.ts
var distance = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
};
var distance_default = distance;

// core/math/inRange.ts
var inRange = (number, minLimit, maxLimit) => number >= minLimit && number <= maxLimit;
var inRange_default = inRange;

// core/points/collision.ts
var collision = (x1, y1, x2, y2, collisionDistance, callback) => {
  if ((inRange_default(x1, x2 - collisionDistance, x2) || inRange_default(x1, x2, x2 + collisionDistance)) && (inRange_default(y1, y2 - collisionDistance, y2) || inRange_default(y1, y2, y2 + collisionDistance))) {
    callback && callback();
    return true;
  }
  ;
  return false;
};
var collision_default = collision;

// core/points/middlePoint.ts
var getMiddlePoint = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  const middleX = x2 >= x1 ? xDistance / 2 : -xDistance / 2;
  const middleY = y2 >= y1 ? yDistance / 2 : -yDistance / 2;
  return {
    x: middleX,
    y: middleY
  };
};
var middlePoint_default = getMiddlePoint;

// core/points/pointWithoutCollision.ts
var pointWithoutCollision = (minX, maxX, minY, maxY, distance2, others) => {
  const x = randomNumber_default(minX, maxX);
  const y = randomNumber_default(minY, maxY);
  let hasCollides = false;
  others.forEach(({ x: otherX, y: otherY }) => {
    if (distance_default(x, y, otherX, otherY) < distance2)
      hasCollides = true;
  });
  if (hasCollides) {
    return pointWithoutCollision(
      minX,
      maxX,
      minY,
      maxY,
      distance2,
      others
    );
  } else {
    return { x, y };
  }
};
var pointWithoutCollision_default = pointWithoutCollision;

// core/points/collisionInArray.ts
var collisionInArray = (x, y, radius, arr, callback, repeated) => {
  if (!repeated)
    repeated = 0;
  repeated++;
  if (repeated >= 100) {
    console.error("Can't get needed dimesions, returning current dimesions");
    return {
      x,
      y
    };
  }
  let hasCollides = false;
  let collisionX = 0;
  let collisionY = 0;
  arr.forEach(({ x: pointX, y: pointY }) => {
    if (hasCollides)
      return;
    collision_default(x, y, pointX, pointY, radius, () => {
      hasCollides = true;
      collisionX = pointX;
      collisionY = pointY;
    });
  });
  if (hasCollides) {
    const collisionPoint = {
      x: collisionX,
      y: collisionY
    };
    callback && callback(collisionPoint);
    return collisionPoint;
  }
  return false;
};
var collisionInArray_default = collisionInArray;

// core/points/angle.ts
var pi = Math.PI;
var angle = (startX, startY, endX, endY) => {
  const xDifference = endX - startX;
  const yDifference = endY - startY;
  let toQuarter;
  if (xDifference >= 0) {
    if (yDifference >= 0) {
      toQuarter = 2;
    } else {
      toQuarter = 1;
    }
  } else {
    if (yDifference >= 0) {
      toQuarter = 3;
    } else {
      toQuarter = 4;
    }
  }
  const xChange = Math.abs(endX - startX);
  const yChange = Math.abs(endY - startY);
  const tan = toQuarter === 1 || toQuarter === 3 ? xChange / yChange : yChange / xChange;
  const angle_in_radians = (toQuarter - 1) * pi / 2 + Math.atan(tan);
  return angle_in_radians;
};
var angle_default = angle;

// core/randomization/randomNumber.ts
var randomNumber = (min, max) => Math.round(Math.random() * (max - min)) + min;
var randomNumber_default = randomNumber;

// core/points/randomPoints.ts
var randomPoints = (xLimitsMin, xLimitsMax, yLimitsMin, yLimitsMax, count) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const x = randomNumber_default(xLimitsMin, xLimitsMax);
    const y = randomNumber_default(yLimitsMin, yLimitsMax);
    points.push({ x, y });
  }
  return points;
};
var randomPoints_default = randomPoints;

// utils/triangleArea.ts
var triangleArea = ({ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }) => Math.abs(
  (x1 * y2 - x2 * y1 + x2 * y3 - x3 * y2 + x3 * y1 - x1 * y3) / 2
);
var triangleArea_default = triangleArea;

// core/points/area.ts
var area = (points) => {
  let area2 = 0;
  for (let i = 2; i < points.length; i++) {
    area2 += triangleArea_default(points[0], points[i - 1], points[i]);
  }
  return area2;
};
var area_default = area;

// core/points/randomPointInDistance.ts
var randomPointInDistance = (x, y, distance2) => {
  const angle2 = Math.random() * 2 * Math.PI;
  const dx = distance2 * Math.cos(angle2);
  const dy = distance2 * Math.sin(angle2);
  return { x: x + dx, y: y + dy };
};
var randomPointInDistance_default = randomPointInDistance;

// core/points/nearest.ts
var nearest = (x, y, points) => {
  let minDistance = Infinity;
  let nearestPoint = null;
  for (const point of points) {
    const { x: pointX, y: pointY } = point;
    const distanceBetween = distance_default(x, y, pointX, pointY);
    if (distanceBetween < minDistance) {
      minDistance = distanceBetween;
      nearestPoint = point;
    }
  }
  return nearestPoint;
};
var nearest_default = nearest;

// core/points/perimeter.ts
var perimeter = (points) => {
  let overallDistance = 0;
  let lastPoint = {};
  let i = 0;
  for (const point of points) {
    i += 1;
    if (i === 1) {
      lastPoint = point;
      continue;
    }
    const { x: prevX, y: prevY } = { ...lastPoint };
    const { x, y } = { ...point };
    lastPoint = point;
    if (i === points.length) {
      const { x: x2, y: y2 } = { ...point };
      const { x: firstX, y: firstY } = { ...points[0] };
      overallDistance += distance_default(x2, y2, firstX, firstY);
    }
    overallDistance += distance_default(prevX, prevY, x, y);
  }
  return overallDistance;
};
var perimeter_default = perimeter;

// core/points/positionInCircle.ts
var positionInCircle = (centerX, centerY, radius, angleInRadians) => {
  const x = centerX + radius * Math.cos(angleInRadians);
  const y = centerY + radius * Math.sin(angleInRadians);
  return { x, y };
};
var positionInCircle_default = positionInCircle;

// core/points/possibleConnections.ts
var possibleConnections = (pointsCount) => pointsCount * (pointsCount - 1) / 2;
var possibleConnections_default = possibleConnections;

// core/points/circleArea.ts
var circleArea = (radius) => Math.PI * radius ** 2;
var circleArea_default = circleArea;

// core/points/center.ts
var center = (points) => {
  let sumX = 0;
  let sumY = 0;
  let numPoints = points.length;
  for (let i = 0; i < numPoints; i++) {
    const point = points[i];
    sumX += point.x;
    sumY += point.y;
  }
  const centerX = sumX / numPoints;
  const centerY = sumY / numPoints;
  return { x: centerX, y: centerY };
};
var center_default = center;

// core/points/farest.ts
var farest = (x, y, points) => {
  let maxDistance = 0;
  let farestPoint = null;
  for (const point of points) {
    const { x: pointX, y: pointY } = point;
    const distanceBetween = distance_default(x, y, pointX, pointY);
    if (distanceBetween > maxDistance) {
      maxDistance = distanceBetween;
      farestPoint = point;
    }
  }
  return farestPoint;
};
var farest_default = farest;

// core/points/randomPoint.ts
var randomPoint = (xMin, xMax, yMin, yMax) => ({
  x: xMax ? randomNumber_default(xMin || 0, xMax) : Math.random() * 100,
  y: yMax ? randomNumber_default(yMin || 0, yMax) : Math.random() * 100
});
var randomPoint_default = randomPoint;

// core/math/roundToPrecision.ts
var roundToPrecision = (number, precision) => {
  const multiplier = 10 ** precision;
  return Math.round(number * multiplier) / multiplier;
};
var roundToPrecision_default = roundToPrecision;

// core/math/degreesToRadians.ts
var degreesToRadians = (degrees) => degrees * Math.PI / 180;
var degreesToRadians_default = degreesToRadians;

// core/math/radiansToDegrees.ts
var radiansToDegrees = (radians) => radians * 180 / Math.PI;
var radiansToDegrees_default = radiansToDegrees;

// core/randomization/uniqueId.ts
var uniqueId = (others) => {
  const newId = crypto.randomUUID();
  if (others) {
    let isTaken = false;
    others.forEach((id) => {
      if (newId === id)
        isTaken = true;
    });
    if (isTaken)
      return uniqueId(others);
    return newId;
  }
  return newId;
};
var uniqueId_default = uniqueId;

// core/randomization/randomBoolean.ts
var randomBoolean = () => Boolean(Math.round(Math.random()));
var randomBoolean_default = randomBoolean;

// core/arrays/intersection.ts
var intersection = (arr1, arr2) => arr1.filter((value) => arr2.includes(value));
var intersection_default = intersection;

// core/arrays/difference.ts
var difference = (arr1, arr2) => arr1.filter((value) => !arr2.includes(value));
var difference_default = difference;

// index.ts
var pointscape_default = {
  uniqueId: uniqueId_default,
  distance: distance_default,
  middlePoint: middlePoint_default,
  collision: collision_default,
  pointWithoutCollision: pointWithoutCollision_default,
  collisionInArray: collisionInArray_default,
  angle: angle_default,
  inRange: inRange_default,
  randomBoolean: randomBoolean_default,
  randomPoint: randomPoint_default,
  randomNumber: randomNumber_default,
  randomPoints: randomPoints_default,
  area: area_default,
  circleArea: circleArea_default,
  randomPointInDistance: randomPointInDistance_default,
  roundToPrecision: roundToPrecision_default,
  nearest: nearest_default,
  farest: farest_default,
  degreesToRadians: degreesToRadians_default,
  radiansToDegrees: radiansToDegrees_default,
  perimeter: perimeter_default,
  positionInCircle: positionInCircle_default,
  possibleConnections: possibleConnections_default,
  center: center_default,
  intersection: intersection_default,
  difference: difference_default
};
export {
  angle_default as angle,
  area_default as area,
  center_default as center,
  circleArea_default as circleArea,
  collision_default as collision,
  collisionInArray_default as collisionInArray,
  pointscape_default as default,
  degreesToRadians_default as degreesToRadians,
  difference_default as difference,
  distance_default as distance,
  farest_default as farest,
  inRange_default as inRange,
  intersection_default as intersection,
  middlePoint_default as middlePoint,
  nearest_default as nearest,
  perimeter_default as perimeter,
  pointWithoutCollision_default as pointWithoutCollision,
  positionInCircle_default as positionInCircle,
  possibleConnections_default as possibleConnections,
  radiansToDegrees_default as radiansToDegrees,
  randomBoolean_default as randomBoolean,
  randomNumber_default as randomNumber,
  randomPoint_default as randomPoint,
  randomPointInDistance_default as randomPointInDistance,
  randomPoints_default as randomPoints,
  roundToPrecision_default as roundToPrecision,
  uniqueId_default as uniqueId
};
