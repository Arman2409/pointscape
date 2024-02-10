import type { Point } from "../../types/globals";

const randomPointInDistance = (
    x: number,
    y: number,
    distance: number): Point => {
    const angle = Math.random() * 2 * Math.PI;
    const dx = distance * Math.cos(angle);
    const dy = distance * Math.sin(angle);
    return {
        x: x + dx,
        y: y + dy
    };
}

export default randomPointInDistance;