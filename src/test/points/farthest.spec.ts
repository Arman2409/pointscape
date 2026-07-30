import farthest from "../../core/points/farthest";
import randomPoint from "../../core/points/randomPoint";
import type { Point } from "../../types/global";

describe("farthest", () => {
    it("should return the farthest point", () => {
        const initialPoint = { x: 0, y: 0 };
        const points: Point[] = [];
        const farthestPoint = {
            x: 100,
            y: 100,
        };
        const randomPointsMin = 10;
        const randomPointsMax = 10;
        points.push(farthestPoint);
        for (let i = 0; i < 5; i++) {
            points.push(
                randomPoint(
                    { min: randomPointsMin, max: randomPointsMax },
                    { min: randomPointsMin, max: randomPointsMax }
                )
            );
        }
        const foundPoint = farthest(initialPoint, points);

        expect(foundPoint).toBe(farthestPoint);
    });

    it("should return null when the points array is empty", () => {
        expect(farthest({ x: 0, y: 0 }, [])).toBeNull();
    });
});
