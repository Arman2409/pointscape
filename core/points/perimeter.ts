import { distance } from "../../index";
import type { Point } from "../../types/globals";

const perimeter = (points: Point[]):number => {
    let overallDistance = 0;
    let lastPoint: Point = {x: 0, y: 0};
    let i = 0;
    for (const point of points) {
        i += 1;
        if (i === 1) continue;
        if (i === points.length) {
            overallDistance += distance(point, points[0]);
        }
        overallDistance += distance(lastPoint, point);
        lastPoint = point;
    }
    return overallDistance;
}

export default perimeter;