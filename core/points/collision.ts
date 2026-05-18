import type { Point } from "../../types/global";

const collision = (
  point1: Point,
  point2: Point,
  collisionDistance: number,
  callback?: () => void,
): boolean => {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  const r = collisionDistance;
  const collides = dx * dx + dy * dy <= r * r;

  if (collides) {
    callback?.();
    return true;
  }
  return false;
};

export default collision;
