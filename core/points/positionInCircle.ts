import type { Point } from "../../types/global";

const positionInCircle = (
    centerPoint: Point,
    radius: number,
    angleInRadians: number): Point => {

    const { x: centerX, y: centerY } = { ...centerPoint };

    const x = centerX + radius * Math.cos(angleInRadians);
    const y = centerY + radius * Math.sin(angleInRadians);
    
    return { x, y }
}

export default positionInCircle;