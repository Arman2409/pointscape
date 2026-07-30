import distance from "./distance";
import type { Point } from "../../types/global";

const farthest = (initialPoint: Point, points: Point[]) => {
    let maxDistance = 0;
    let farthestPoint: Point | null = null;
    for (const point of points) {
        const distanceBetween = distance(initialPoint, point);
        if (distanceBetween > maxDistance) {
            maxDistance = distanceBetween;
            farthestPoint = point;
        }
    }

    return farthestPoint;
};

export default farthest;
