import type { Point } from "../../types/globals";

const scale = (
    points: Point[],
    scaleFactorX: number,
    scaleFactorY: number) => {
    return points.map(({x, y}) => ({
        x: x * scaleFactorX,
        y: y * scaleFactorY,
    }));
}

export default scale;