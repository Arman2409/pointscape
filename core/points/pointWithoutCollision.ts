import { distance as calculateDistance, randomNumber} from "../../index";
import type { Point } from "../../types/globals";

const pointWithoutCollision = (
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    distance: number,
    others: Point[],
): Point => {
    const x = randomNumber(minX, maxX);
    const y = randomNumber(minY, maxY);
    let hasCollides = false;
    others.forEach(({ x: otherX, y: otherY }) => {
        if (calculateDistance(x, y, otherX, otherY) < distance) hasCollides = true;
    })
    if (hasCollides) {
        return pointWithoutCollision(
            minX,
            maxX,
            minY,
            maxY,
            distance,
            others);
    } else {
        return { x, y };
    }
}

export default pointWithoutCollision;