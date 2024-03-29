import { rotate } from "../../index";

// Sample points for testing
const points = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
];

// Center of rotation
const centerPoint = { x: 2, y: 2 };

// Expected rotated points
const expectedRotatedPoints = [
    { x: 3, y: 1 },
    { x: 2, y: 2 },
    { x: 1, y: 3 },
];

test('rotate function correctly rotates points around the center', () => {
    // Rotation angle in radians
    const angleInRadians = Math.PI / 2;

    // Apply rotation
    const rotatedPoints = rotate(centerPoint, points, angleInRadians);

    // Assertions
    expect(rotatedPoints.length).toBe(points.length);

    rotatedPoints.forEach(({x, y}, index) => {
        expect(x).toBeCloseTo(expectedRotatedPoints[index].x);
        expect(y).toBeCloseTo(expectedRotatedPoints[index].y);
    });
});