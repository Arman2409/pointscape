import type { Point } from "../../types/global";

const pentagon = (centerPoint: Point, radius: number, angle: number = 0) => {
    const points = [];
    const numberOfSides = 5;
    const { x: centerX, y: centerY } = centerPoint;

    const angleRad = (angle % 360) * (Math.PI / 180);

    for (let i = 0; i < numberOfSides; i++) {
        const currentAngle = angleRad + (i * (2 * Math.PI)) / numberOfSides;
        const x = centerX + radius * Math.cos(currentAngle);
        const y = centerY + radius * Math.sin(currentAngle);
        points.push({ x, y });
    }

    return points;
};

export default pentagon;
