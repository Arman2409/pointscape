import { inRange } from "lodash";

import type { Point } from "../types/globals";
import getRandomNumber from "./getRandomNumber";

const generatePointWithoutCollisions = (
    others: Point[],
    width: number,
    height: number,
    distance: number): Point => {
    try {
        const x = getRandomNumber(distance, width - distance);
        const y = getRandomNumber(distance, height - distance);
        let hasCollides = false;
        others.forEach(({ x: otherX, y: otherY }) => {
            if (inRange(x, otherX - distance, otherX + distance)
                && inRange(y, otherY - distance, otherY + distance)) {
                hasCollides = true;
            }
        })
        if (hasCollides) {
            return generatePointWithoutCollisions(
                others,
                width,
                height,
                distance);
        } else {
            return { x, y };
        }
    } catch (e) {
       return generatePointWithoutCollisions(
        others,
        width,
        height,
        distance);
    }
}

export default generatePointWithoutCollisions;