import type { Point } from "../../types/global"

const move = (
    initialPoint: Point,
    xStep: number,
    yStep: number,
): Point => {
    const { x, y } = initialPoint;

    return {
        x: x + xStep,
        y: y + yStep,
    };
};

export default move;
