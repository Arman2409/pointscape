import type { Point } from "../../types/globals";

const inLine = (
    x: number,
    y: number,
    point1: Point,
    point2: Point
    ):boolean => {
     // Calculate the slope of the line
     const slope = (point2.y - point1.y) / (point2.x - point1.x);

     // Check if the point lies on the line using the point-slope form
     return (y - point1.y) === slope * (x - point1.x);
}

export default inLine;