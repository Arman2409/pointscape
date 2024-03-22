import type { Point, Coordinate } from "../../types/globals";

// Helper function to compare points based on the given coordinate
const compareFunction = (
    point1: Point,
    point2: Point,
    coordinate?: Coordinate) => {
    const { x: x1, y: y1 } = { ...point1 };
    const { x: x2, y: y2 } = { ...point2 };
    if (coordinate === 'x' || !coordinate) {
        return x1 - x2;
    }
    if(coordinate === "y" || !coordinate) {
        return y1 - y2;
    }
    return 0;
};

const sort = (points: Point[], coordinate?: Coordinate) => {
    // Sort the points array using the compare function
    return points.sort((point1, point2) => compareFunction(
        point1,
        point2,
        coordinate,)
    ); // Return the sorted array
}

export default sort;