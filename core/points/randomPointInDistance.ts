import type { Point } from "../../types/global";

const randomPointInDistance = (
    point: Point,
    distance: number
): Point => {
    const angle = Math.random() * 2 * Math.PI;
    const dx = distance * Math.cos(angle);
    const dy = distance * Math.sin(angle);
    return {
        x: point.x + dx,
        y: point.y + dy
    };
}

export default randomPointInDistance;