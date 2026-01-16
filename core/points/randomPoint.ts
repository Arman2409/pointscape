import { randomNumber } from "../../index";
import type { Bounds, Point } from "../../types/global";

const randomPoint = (
    xBounds?: Bounds,
    yBounds?: Bounds,
): Point => {

    const { min: minX, max: maxX } = xBounds || {};
    const { min: minY, max: maxY } = yBounds || {};

    return {
        x: maxX ? randomNumber(minX || 0, maxX) : Math.random() * 100,
        y: maxY ? randomNumber(minY || 0, maxY) : Math.random() * 100,
    }
}

export default randomPoint;