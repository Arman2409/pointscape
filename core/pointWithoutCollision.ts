import getRandomNumber from "./randomNumber";
import inRange from "./inRange";
import type { Point } from "../types/globals";

const pointWithoutCollision = (
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    distance: number,
    others: Point[],
): Point => {
    const x = getRandomNumber(minX, maxX);
    const y = getRandomNumber(minY, maxY);
    let hasCollides = false;
    others.forEach(({ x: otherX, y: otherY }) => {
        if (inRange(x, otherX - distance, otherX + distance)
            && inRange(y, otherY - distance, otherY + distance)) {
            hasCollides = true;
        }
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