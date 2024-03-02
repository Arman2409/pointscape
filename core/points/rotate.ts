import type { Point } from "../../types/globals";

const rotate = (
    centerX: number,
    centerY: number,
    points: Point[],
    angleInRadians: number) => {
    return points.map(point => {
        const x = centerX + (point.x - centerX) * Math.cos(angleInRadians) - (point.y - centerY) * Math.sin(angleInRadians);
        const y = centerY + (point.x - centerX) * Math.sin(angleInRadians) + (point.y - centerY) * Math.cos(angleInRadians);
        return { x, y };
    });
}

export default rotate;