import distance from "./distance";
import type { Point } from "../../types/globals";

const farest = (
    initialPoint: Point,
    points: Point[]) => {
    let maxDistance = 0;
    let farestPoint:Point|null = null;
    for (const point of points) {
        const distanceBetween = distance(initialPoint, point);
        if (distanceBetween > maxDistance) {
            maxDistance = distanceBetween;
            farestPoint = point;
        }
    }

    return farestPoint;
}

export default farest;