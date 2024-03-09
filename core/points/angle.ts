import type { Point } from "../../types/globals";

const pi = Math.PI;

const angle = (
  point1: Point,
  point2: Point):number => {
    const {x: startX, y: startY} = {...point1};
    const {x: endX, y: endY} = {...point2};

   // Check for coincident points to avoid division by zero
   if (startX === endX && startY === endY) {
    return 0;
  }

  // Use Math.atan2 for efficient and accurate angle calculation
  const angleInRadians = Math.atan2(endY - startY, endX - startX);

  // Adjust angle to correct quadrant if necessary
  const quadrant = Math.ceil((Math.atan2(startY, startX) + 2 * pi) / pi / 2);
  const adjustedAngle = angleInRadians + (quadrant - 1) * pi / 2;

  return adjustedAngle;
}

export default angle;