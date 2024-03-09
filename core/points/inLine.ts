import type { Point } from "../../types/globals";

const inLine = (
    points: Point[],
): boolean => {
    const { x, y } = { ...points[0] };
    const slope = (points[2].y - points[1].y) / (points[2].x - points[1].x);

    return (y - points[1].y) === slope * (x - points[1].x);
}

export default inLine;