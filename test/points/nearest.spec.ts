import { nearest, randomPoint } from "../../index";
import type { Point } from "../../types/globals";

describe("nearest", () => {
    it("should return the nearest point", () => {
        const point = { x: 0, y: 0};
        const points: Point[] = [];
        const nearestPoint = {
            x: 10,
            y: 10
        }
        const randomPointsMin = 100;
        const randomPointsMax = 200;
        points.push(nearestPoint)
        for (let i = 0; i < 5; i++) {
            points.push(randomPoint(randomPointsMin, randomPointsMax, randomPointsMin, randomPointsMax));
        }
        const foundPoint = nearest(point, points);
        
        expect(foundPoint).toBe(nearestPoint);
    })
})