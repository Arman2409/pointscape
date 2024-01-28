import type { Point } from "../../types/globals";

const cross = (
    line1Start: Point,
    line1End: Point,
    line2Start: Point,
    line2End: Point,
):boolean => {
    // Calculate the direction vectors for both lines
    const line1Dir = {
        x: line1End.x - line1Start.x,
        y: line1End.y - line1Start.y,
    };
    const line2Dir = {
        x: line2End.x - line2Start.x,
        y: line2End.y - line2Start.y,
    };

    // Calculate the cross product of the direction vectors
    const crossProduct = line1Dir.x * line2Dir.y - line1Dir.y * line2Dir.x;

    // If the cross product is zero, the lines are parallel or coincident
    if (crossProduct === 0) {
        return false;
    }

    // Calculate the signed areas of triangles formed by each point and the other line's endpoints
    const area1 = (line2End.x - line1Start.x) * (line2Start.y - line1Start.y) -
                  (line2Start.x - line1Start.x) * (line2End.y - line1Start.y);
    const area2 = (line1End.x - line2Start.x) * (line1Start.y - line2Start.y) -
                  (line1Start.x - line2Start.x) * (line1End.y - line2Start.y);

    // If the signed areas have different signs, the lines intersect
    return area1 * area2 < 0;
}

export default cross;