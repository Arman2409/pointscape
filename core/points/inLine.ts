import type { Line, Point } from "../../types/global";

const inLine = (
    point: Point,
    line: Line
): boolean => {
    
    const { x, y } = point;
    const startPoint = line.start;
    const endPoint = line.end;

    const slope = (endPoint.y - startPoint.y) / (endPoint.x - startPoint.x);

    return (y - startPoint.y) === slope * (x - startPoint.x);
}

export default inLine;