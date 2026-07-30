import getRandomNumber from "../randomization/randomNumber";
import type { Bounds, Point } from "../../types/global";

const randomPoints = (
    xBounds: Bounds,
    yBounds: Bounds,
    quantity: number
): Point[] => {
    const { min: minX, max: maxX } = xBounds;
    const { min: minY, max: maxY } = yBounds;

    const points: Point[] = [];

    for (let i = 0; i < quantity; i++) {
        const x = getRandomNumber(minX, maxX);
        const y = getRandomNumber(minY, maxY);

        points.push({ x, y });
    }

    return points;
};

export default randomPoints;
