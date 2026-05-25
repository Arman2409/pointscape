import distance from "./distance";
import type { Point } from "../../types/global";

const perimeter = (points: Point[]): number => {
    let overallDistance = 0;
    for (let i = 0; i < points.length; i++) {
        overallDistance += distance(points[i], points[(i + 1) % points.length]);
    }
    return overallDistance;
}

export default perimeter;
