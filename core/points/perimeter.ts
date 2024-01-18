import { distance } from "../../index";
import type { Point } from "../../types/globals";

const perimeter = (points: Point[]) => {
    let overallDistance = 0;
    let lastPoint: Point = {} as Point;
    let i = 0;
    for (const point of points) {
        i += 1;
        if (i === 1) {
            lastPoint = point;
            continue;
        }
        const { x: prevX, y: prevY } = { ...lastPoint };
        const { x, y } = { ...point };
        lastPoint = point;
        if (i === points.length) {
            const { x, y } = { ...point };
            const { x: firstX, y: firstY } = { ...points[0] };
            overallDistance += distance(x, y, firstX, firstY);
        }
        overallDistance += distance(prevX, prevY, x, y);
    }
    return overallDistance;
}

export default perimeter;