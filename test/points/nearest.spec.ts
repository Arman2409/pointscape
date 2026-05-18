import { nearest, randomPoint } from "../../index";
import type { Point } from "../../types/global";

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
            points.push(randomPoint(
                {min: randomPointsMin, max:randomPointsMax}, 
                {min: randomPointsMin, max: randomPointsMax}
            ));
        }
        const foundPoint = nearest(point, points);
        
        expect(foundPoint).toBe(nearestPoint);
    })

    it("should return null when the points array is empty", () => {
        expect(nearest({ x: 0, y: 0 }, [])).toBeNull();
    })
})