import type { Point } from "../../types/global";

const scale = (points: Point[], scaleFactorX: number, scaleFactorY: number) => {
    return points.map(({ x, y }) => ({
        x: x * scaleFactorX,
        y: y * scaleFactorY,
    }));
};

export default scale;
