import { farest, randomPoint } from "../index";
import type { Point } from "../types/globals";

describe("farest", () => {
    it("should return the farest point", () => {
        const x = 0;
        const y = 0;
        const points: Point[] = [];
        const farestPoint = {
            x: 100,
            y: 100
        }
        const randomPointsMin = 10;
        const randomPointsMax = 10;
        points.push(farestPoint)
        for (let i = 0; i < 5; i++) {
            points.push(randomPoint(randomPointsMin, randomPointsMax, randomPointsMin, randomPointsMax));
        }
        const foundPoint = farest(x, y, points);
        
        expect(foundPoint).toBe(farestPoint);
    })
})