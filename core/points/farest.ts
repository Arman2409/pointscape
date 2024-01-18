import distance from "./distance";
import type { Point } from "../../types/globals";

const farest = (
    x: number,
    y: number,
    points: Point[]) => {
    let maxDistance = 0;
    let farestPoint:Point|null = null;
    for (const point of points) {
        const { x: pointX, y: pointY } = point;
        const distanceBetween = distance(x, y, pointX, pointY);
        if (distanceBetween > maxDistance) {
            maxDistance = distanceBetween;
            farestPoint = point;
        }
    }

    return farestPoint;
}

export default farest;