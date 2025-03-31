import { farest, randomPoint } from "../../index";
import type { Point } from "../../types/global";

describe("farest", () => {
    it("should return the farest point", () => {
        const initialPoint = { x: 0, y: 0 }
        const points: Point[] = [];
        const farestPoint = {
            x: 100,
            y: 100
        }
        const randomPointsMin = 10;
        const randomPointsMax = 10;
        points.push(farestPoint);
        for (let i = 0; i < 5; i++) {
            points.push(randomPoint(
                { min: randomPointsMin, max: randomPointsMax },
                { min: randomPointsMin, max: randomPointsMax }
            ));
        }
        const foundPoint = farest(initialPoint, points);

        expect(foundPoint).toBe(farestPoint);
    })
})