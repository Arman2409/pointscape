import type { Point } from "../../types/globals";

const scale = (
    scaleFactorX: number,
    scaleFactorY: number,
    points: Point[]) => {
    return points.map(({x, y}) => ({
        x: x * scaleFactorX,
        y: y * scaleFactorY,
    }));
}

export default scale;