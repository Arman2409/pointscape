import type { Point } from "../../types/globals";

const distance = (
  point1: Point,
  point2: Point): number => {
  const { x: x1, y: y1 } = { ...point1 };
  const { x: x2, y: y2 } = { ...point2 };
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}

export default distance;