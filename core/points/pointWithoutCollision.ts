import { distance, randomPoint} from "../../index";
import type { Point } from "../../types/globals";

const pointWithoutCollision = (
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    distanceBetweenPoints: number,
    others: Point[],
): Point => {
    const initialPoint = randomPoint(minX, maxX, minY, maxY);
    let hasCollides = false;
    others.forEach(point => {
        if (distance(initialPoint, point) < distanceBetweenPoints) {
            hasCollides = true;
        }
    })
    if (hasCollides) {
        return pointWithoutCollision(
            minX,
            maxX,
            minY,
            maxY,
            distanceBetweenPoints,
            others);
    } else {
        return initialPoint;
    }
}

export default pointWithoutCollision;