import type { Point } from "../../types/globals";

const middle = (
    point1: Point,
    point2: Point): Point => {
    const { x: x1, y: y1 } = { ...point1 };
    const { x: x2, y: y2 } = { ...point2 };
    const xDistance = Math.abs(x1 - x2);
    const yDistance = Math.abs(y1 - y2);
    const middleX = x2 >= x1 ? xDistance / 2 : -xDistance / 2;
    const middleY = y2 >= y1 ? yDistance / 2 : -yDistance / 2;
    return {
        x: middleX,
        y: middleY
    }
}

export default middle;