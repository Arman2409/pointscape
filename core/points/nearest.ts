import distance from "./distance";
import type { Point } from "../../types/globals";

const nearest = (
    x: number,
    y: number,
    points: Point[]):Point => {
    let minDistance = Infinity;
    let nearestPoint:Point = {} as Point;
    for (const point of points) {
        const { x: pointX, y: pointY } = point;
        const distanceBetween = distance(x, y, pointX, pointY);
        if (distanceBetween < minDistance) {
            minDistance = distanceBetween;
            nearestPoint = point;
        }
    }
    return nearestPoint;
}

export default nearest;