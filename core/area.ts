import triangleArea from "../utils/triangleArea";
import type { Point } from "../types/globals";

const area = (points: Point[]) => {
    let area = 0;
    for (let i = 2; i < points.length; i++) {
        area += triangleArea(points[0], points[i - 1], points[i]);
    }
    return area;
}

export default area;