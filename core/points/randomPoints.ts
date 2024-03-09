import getRandomNumber from "../randomization/randomNumber";
import type { Point } from "../../types/globals";

const randomPoints = (
    count: number,
    xLimitsMin: number = 100,
    xLimitsMax: number = 100,
    yLimitsMin: number = 100,
    yLimitsMax: number = 100
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