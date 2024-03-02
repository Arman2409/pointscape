// core/points/distance.ts
var distance = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
};
var distance_default = distance;

// core/math/inRange.ts
var inRange = (number, minLimit, maxLimit) => {
  return number >= minLimit && number <= maxLimit;
};
var inRange_default = inRange;

// core/points/collision.ts
var collision = (x1, y1, x2, y2, collisionDistance, callback) => {
  if (
    // Check if the given values are in the range 
    (inRange_default(x1, x2 - collisionDistance, x2) || inRange_default(x1, x2, x2 + collisionDistance)) && (inRange_default(y1, y2 - collisionDistance, y2) || inRange_default(y1, y2, y2 + collisionDistance))
  ) {
    callback && callback();
    return true;
  }
  ;
  return false;
};
var collision_default = collision;

// core/points/middle.ts
var middle = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  const middleX = x2 >= x1 ? xDistance / 2 : -xDistance / 2;
  const middleY = y2 >= y1 ? yDistance / 2 : -yDistance / 2;
  return {
    x: middleX,
    y: middleY
  };
};
var middle_default = middle;

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
var collisionInArray = (x, y, radius, arr) => {
  let collisionX = 0;
  let collisionY = 0;
  const collisionsArr = [];
  arr.forEach(({ x: pointX, y: pointY }) => {
    collision_default(x, y, pointX, pointY, radius, () => {
      collisionsArr.push({ x: pointX, y: pointY });
      collisionX = pointX;
      collisionY = pointY;
    });
  });
  return collisionsArr;
};
var collisionInArray_default = collisionInArray;

// core/points/angle.ts
var pi = Math.PI;
var angle = (startX, startY, endX, endY) => {
  if (startX === endX && startY === endY) {
    return 0;
  }
  const angleInRadians = Math.atan2(endY - startY, endX - startX);
  const quadrant = Math.ceil((Math.atan2(startY, startX) + 2 * pi) / pi / 2);
  const adjustedAngle = angleInRadians + (quadrant - 1) * pi / 2;
  return adjustedAngle;
};
var angle_default = angle;

// core/randomization/randomNumber.ts
var randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
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
  return {
    x: x + dx,
    y: y + dy
  };
};
var randomPointInDistance_default = randomPointInDistance;

// core/points/nearest.ts
var nearest = (x, y, points) => {
  let minDistance = Infinity;
  let nearestPoint = {};
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
var possibleConnections = (pointsCount) => {
  return pointsCount * (pointsCount - 1) / 2;
};
var possibleConnections_default = possibleConnections;

// core/points/circleArea.ts
var circleArea = (radius) => {
  return Math.PI * radius ** 2;
};
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
var randomPoint = (xMin, xMax, yMin, yMax) => {
  return {
    x: xMax ? randomNumber_default(xMin || 0, xMax) : Math.random() * 100,
    y: yMax ? randomNumber_default(yMin || 0, yMax) : Math.random() * 100
  };
};
var randomPoint_default = randomPoint;

// core/points/move.ts
var move = (x, y, xStep, yStep, count) => {
  const pointsArr = [];
  for (let i = 0; i <= count; i++) {
    const newPoint = {
      x: x + xStep * i,
      y: y + yStep * i
    };
    pointsArr.push(newPoint);
  }
  return pointsArr;
};
var move_default = move;

// core/points/scale.ts
var scale = (scaleFactorX, scaleFactorY, points) => {
  return points.map(({ x, y }) => ({
    x: x * scaleFactorX,
    y: y * scaleFactorY
  }));
};
var scale_default = scale;

// core/points/inLine.ts
var inLine = (x, y, point1, point2) => {
  const slope = (point2.y - point1.y) / (point2.x - point1.x);
  return y - point1.y === slope * (x - point1.x);
};
var inLine_default = inLine;

// core/points/cross.ts
var cross = (line1Start, line1End, line2Start, line2End) => {
  const line1Dir = {
    x: line1End.x - line1Start.x,
    y: line1End.y - line1Start.y
  };
  const line2Dir = {
    x: line2End.x - line2Start.x,
    y: line2End.y - line2Start.y
  };
  const crossProduct = line1Dir.x * line2Dir.y - line1Dir.y * line2Dir.x;
  if (crossProduct === 0) {
    return false;
  }
  const area1 = (line2End.x - line1Start.x) * (line2Start.y - line1Start.y) - (line2Start.x - line1Start.x) * (line2End.y - line1Start.y);
  const area2 = (line1End.x - line2Start.x) * (line1Start.y - line2Start.y) - (line1Start.x - line2Start.x) * (line1End.y - line2Start.y);
  return area1 * area2 < 0;
};
var cross_default = cross;

// core/points/rotate.ts
var rotate = (centerX, centerY, points, angleInRadians) => {
  return points.map((point) => {
    const x = centerX + (point.x - centerX) * Math.cos(angleInRadians) - (point.y - centerY) * Math.sin(angleInRadians);
    const y = centerY + (point.x - centerX) * Math.sin(angleInRadians) + (point.y - centerY) * Math.cos(angleInRadians);
    return { x, y };
  });
};
var rotate_default = rotate;

// core/points/square.ts
var sequence = ["right", "down", "left", "up"];
var steps = {
  left: [-1, 0],
  right: [1, 0],
  up: [0, 1],
  down: [0, -1]
};
var square = (x, y, size, direction = "right") => {
  const points = [{ x, y }];
  for (let i = 0; i < 3; i++) {
    const nextStep = steps[direction];
    x += nextStep[0] * size;
    y += nextStep[1] * size;
    points.push({ x, y });
    const nextDirectionIndex = sequence.indexOf(direction) + 1 < sequence.length ? sequence.indexOf(direction) + 1 : 0;
    direction = sequence[nextDirectionIndex];
  }
  return points;
};
var square_default = square;

// core/points/rectangle.ts
var sequence2 = ["right", "down", "left", "up"];
var steps2 = {
  left: [-1, 0],
  right: [1, 0],
  up: [0, 1],
  down: [0, -1]
};
var rectangle = (x, y, width, height, direction = "right") => {
  console.log({ width, height });
  const points = [{ x, y }];
  for (let i = 0; i < 3; i++) {
    const nextStep = steps2[direction];
    x += nextStep[0] * width;
    y += nextStep[1] * height;
    points.push({ x, y });
    const nextDirectionIndex = sequence2.indexOf(direction) + 1 < sequence2.length ? sequence2.indexOf(direction) + 1 : 0;
    direction = sequence2[nextDirectionIndex];
  }
  return points;
};
var rectangle_default = rectangle;

// core/points/triangle.ts
var steps3 = {
  left: [-1, 0],
  right: [1, 0],
  up: [0, 1],
  down: [0, -1]
};
var triangle = (x, y, size, direction = "left") => {
  const height = Math.sqrt(3) / 2 * size;
  const nextStep = steps3[direction];
  const points = [{ x, y }];
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      x += nextStep[0] * size;
      y += nextStep[1] * size;
    } else {
      x += nextStep[0] ? size / 2 : height;
      y += nextStep[1] ? size / 2 : height;
    }
    points.push({ x, y });
  }
  return points;
};
var triangle_default = triangle;

// core/points/pentagon.ts
var pentagon = (centerX, centerY, radius, angle2 = 0) => {
  const points = [];
  const numberOfSides = 5;
  angle2 = angle2 % 360;
  for (let i = 0; i < numberOfSides; i++) {
    const currentAngle = +(i * (2 * Math.PI)) / numberOfSides;
    const x = centerX + radius * Math.cos(currentAngle);
    const y = centerY + radius * Math.sin(currentAngle);
    points.push({ x, y });
  }
  return points;
};
var pentagon_default = pentagon;

// core/math/roundToPrecision.ts
var roundToPrecision = (number, precision) => {
  const multiplier = 10 ** precision;
  return Math.round(number * multiplier) / multiplier;
};
var roundToPrecision_default = roundToPrecision;

// core/math/degreesToRadians.ts
var degreesToRadians = (degrees) => {
  return degrees * Math.PI / 180;
};
var degreesToRadians_default = degreesToRadians;

// core/math/radiansToDegrees.ts
var radiansToDegrees = (radians) => {
  return radians * 180 / Math.PI;
};
var radiansToDegrees_default = radiansToDegrees;

// core/math/average.ts
var average = (numbers) => {
  return numbers.reduce((a, b) => a + b) / numbers.length;
};
var average_default = average;

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
var randomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};
var randomBoolean_default = randomBoolean;

// core/arrays/intersection.ts
var intersection = (arr1, arr2) => {
  return arr1.filter((value) => arr2.includes(value));
};
var intersection_default = intersection;

// core/arrays/difference.ts
var difference = (arr1, arr2) => {
  return arr1.filter((value) => !arr2.includes(value));
};
var difference_default = difference;

// core/arrays/chunk.ts
var chunk = (array, perChunk) => {
  const chunks = [];
  for (let i = 0; i < array.length / perChunk; i++) {
    const startIndex = i * perChunk;
    const newChunk = array.slice(startIndex, startIndex + perChunk);
    chunks.push(newChunk);
  }
  return chunks;
};
var chunk_default = chunk;

// index.ts
var pointscape_default = {
  // points 
  distance: distance_default,
  middle: middle_default,
  collision: collision_default,
  pointWithoutCollision: pointWithoutCollision_default,
  collisionInArray: collisionInArray_default,
  angle: angle_default,
  randomPoint: randomPoint_default,
  randomPoints: randomPoints_default,
  area: area_default,
  circleArea: circleArea_default,
  randomPointInDistance: randomPointInDistance_default,
  nearest: nearest_default,
  farest: farest_default,
  perimeter: perimeter_default,
  positionInCircle: positionInCircle_default,
  possibleConnections: possibleConnections_default,
  center: center_default,
  inLine: inLine_default,
  rotate: rotate_default,
  move: move_default,
  scale: scale_default,
  cross: cross_default,
  square: square_default,
  rectangle: rectangle_default,
  triangle: triangle_default,
  pentagon: pentagon_default,
  // randomization 
  uniqueId: uniqueId_default,
  randomNumber: randomNumber_default,
  randomBoolean: randomBoolean_default,
  // math 
  average: average_default,
  inRange: inRange_default,
  degreesToRadians: degreesToRadians_default,
  radiansToDegrees: radiansToDegrees_default,
  roundToPrecision: roundToPrecision_default,
  // arrays 
  intersection: intersection_default,
  difference: difference_default,
  chunk: chunk_default
};
export {
  angle_default as angle,
  area_default as area,
  average_default as average,
  center_default as center,
  chunk_default as chunk,
  circleArea_default as circleArea,
  collision_default as collision,
  collisionInArray_default as collisionInArray,
  cross_default as cross,
  pointscape_default as default,
  degreesToRadians_default as degreesToRadians,
  difference_default as difference,
  distance_default as distance,
  farest_default as farest,
  inLine_default as inLine,
  inRange_default as inRange,
  intersection_default as intersection,
  middle_default as middle,
  move_default as move,
  nearest_default as nearest,
  pentagon_default as pentagon,
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
  rectangle_default as rectangle,
  rotate_default as rotate,
  roundToPrecision_default as roundToPrecision,
  scale_default as scale,
  square_default as square,
  triangle_default as triangle,
  uniqueId_default as uniqueId
};
