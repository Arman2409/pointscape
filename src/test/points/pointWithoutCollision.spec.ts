import { pointWithoutCollision } from "../../index";
import type { Point } from "../../types/global";

describe("pointWithoutCollision", () => {
    it("should generate a point which doesn't collide with others", () => {
        const distance = 20;
        const xMin = 0;
        const xMax = 500;
        const yMin = 0;
        const yMax = 500;

        const points: Point[] = [];
        const getRandomInLimits = (): Point => {
            const point = pointWithoutCollision(
                { min: xMin, max: xMax },
                { min: yMin, max: yMax },
                distance,
                points
            );
            expect(point).not.toBeNull();
            return point as Point;
        };

        for (let i = 0; i < 5; i++) {
            points.push(getRandomInLimits());
        }

        const { x: currentX, y: currentY } = getRandomInLimits();
        const collided = points.find(
            ({ x, y }) =>
                Math.abs(x - currentX) < distance &&
                Math.abs(y - currentY) < distance
        );

        expect(collided).toBe(undefined);
    });

    it("should return null once the retry budget is exhausted", () => {
        const point = pointWithoutCollision(
            { min: 0, max: 500 },
            { min: 0, max: 500 },
            20,
            [],
            1
        );

        expect(point).toBeNull();
    });
});
