import type { Point } from "../../types/global";

const lerp = (
    point1: Point,
    point2: Point,
    t: number,
): Point => ({
    x: point1.x + (point2.x - point1.x) * t,
    y: point1.y + (point2.y - point1.y) * t,
});

export default lerp;
