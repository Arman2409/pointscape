import distance from "./distance";
import type { Point } from "../../types/global";

const nearest = (
  initialPoint: Point,
  points: Point[],
): Point | null => {
  if (!points.length) {
    return null;
  }

  let minDistance = Infinity;
  let nearestPoint = points[0];

  for (const point of points) {
    const distanceBetween = distance(initialPoint, point);
    if (distanceBetween < minDistance) {
      minDistance = distanceBetween;
      nearestPoint = point;
    }
  }

  return nearestPoint;
};

export default nearest;
