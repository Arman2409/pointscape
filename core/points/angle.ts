import type { Point } from "../../types/global";

const angle = (point1: Point, point2: Point): number => {
    const { x: startX, y: startY } = point1;
    const { x: endX, y: endY } = point2;

    return Math.atan2(endY - startY, endX - startX);
};

export default angle;
