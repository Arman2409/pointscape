import type { Point } from "../types/globals";

const center = (points:Point[]):Point => {
  let sumX = 0;
  let sumY = 0;
  let numPoints = points.length;

  // Calculate the sum of x-coordinates and y-coordinates
  for (let i = 0; i < numPoints; i++) {
    const point = points[i];
    sumX += point.x;
    sumY += point.y;
  }

  // Find the average x and y coordinates
  const centerX = sumX / numPoints;
  const centerY = sumY / numPoints;

  return { x: centerX, y: centerY };
}

export default center;