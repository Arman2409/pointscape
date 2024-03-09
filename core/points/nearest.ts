import distance from "./distance";
import type { Point } from "../../types/globals";

const nearest = (
    initialPoint: Point,
    points: Point[]):Point => {
    let minDistance = Infinity;
    let nearestPoint:Point = {} as Point;
    for (const point of points) {
        const distanceBetween = distance(initialPoint, point);
        if (distanceBetween < minDistance) {
            minDistance = distanceBetween;
            nearestPoint = point;
        }
    }
    return nearestPoint;
}

export default nearest;