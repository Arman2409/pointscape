import type { Line, Point } from "../../types/global";

const getLine = (
    point1: Point, 
    point2: Point): Line => {
    return {
        start: point1,
        end: point2
    }
}

export default getLine;