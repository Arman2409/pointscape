import type { Point } from "../../types/global";

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