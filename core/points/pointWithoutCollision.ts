import { distance, randomPoint } from "../../index";
import type { Bounds, Point } from "../../types/global";

const maxTryCount = 100;

const pointWithoutCollision = (
    xBounds: Bounds,
    yBounds: Bounds,
    distanceBetweenPoints: number,
    others: Point[],
    currentTryCount = maxTryCount
): Point | null => {
    if (currentTryCount <= 1) {
        return null;
    }

    const { min: minX, max: maxX } = xBounds;
    const { min: minY, max: maxY } = yBounds;

    const initialPoint = randomPoint(
        { min: minX, max: maxX },
        { min: minY, max: maxY }
    );

    const hasCollides = others.some(
        (point) => distance(initialPoint, point) < distanceBetweenPoints
    );

    if (hasCollides) {
        return pointWithoutCollision(
            {
                min: minX,
                max: maxX,
            },
            {
                min: minY,
                max: maxY,
            },
            distanceBetweenPoints,
            others,
            currentTryCount - 1
        );
    } else {
        return initialPoint;
    }
};

export default pointWithoutCollision;
