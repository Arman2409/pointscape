import getRandomNumber from "../randomization/randomNumber";
import type { Point } from "../../types/globals";

const randomPoints = (
    xLimitsMin: number,
    xLimitsMax: number,
    yLimitsMin: number,
    yLimitsMax: number,
    count: number
): Point[] => {
    const points: Point[] = [];
    for (let i = 0; i < count; i++) {
        const x = getRandomNumber(xLimitsMin, xLimitsMax);
        const y = getRandomNumber(yLimitsMin, yLimitsMax);
        points.push({x, y})
    }
    return points;
}

export default randomPoints;