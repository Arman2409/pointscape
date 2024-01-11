import type { Point } from "../types/globals";

const triangleArea = ({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point, { x: x3, y: y3 }: Point) => Math.abs(
    (x1 * y2 - x2 * y1 + x2 * y3 - x3 * y2 + x3 * y1 - x1 * y3) / 2
);


export default triangleArea;