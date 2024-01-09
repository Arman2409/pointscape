import { randomNumber } from "../index";
import type { Point } from "../types/globals";

const randomPoint = (xMin?: number, xMax?: number, yMin?: number, yMax?: number): Point => ({
    x: xMax ? randomNumber(xMin || 0, xMax) : Math.random() * 100,
    y: yMax ? randomNumber(yMin || 0, yMax) : Math.random() * 100,
}) 

export default randomPoint;