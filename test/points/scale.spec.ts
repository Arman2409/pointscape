import { scale } from "../../index";
import type { Point } from '../../types/globals';

// Sample points for testing
const points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 },
];
// Scale factors
const scaleFactorX = 2;
const scaleFactorY = 0.5;

// Expected scaled points
const expectedScaledPoints = [
    { x: 2, y: 1 },
    { x: 6, y: 2 },
    { x: 10, y: 3 },
];
test('scale function correctly scales points', () => {

    // Apply scaling
    const scaledPoints = scale(points, scaleFactorX, scaleFactorY);

    // Assertions
    expect(scaledPoints.length).toBe(points.length);

    scaledPoints.forEach(({x, y}: Point, index: number) => {
        expect(x).toBeCloseTo(expectedScaledPoints[index].x);
        expect(y).toBeCloseTo(expectedScaledPoints[index].y);
    });
});