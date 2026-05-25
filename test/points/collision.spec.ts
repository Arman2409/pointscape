import { collision, randomPoint } from "../../index";
import type { Point } from "../../types/global";

describe("collision", () => {
    it("should  return true if colliding", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const collidePoint: Point = randomPoint(
            { min: x, max: x + distance / 2 },
            { min: y, max: y + distance / 2 }
        );
        const result = collision({ x, y }, collidePoint, distance);
        expect(result).toBeTruthy();
    });

    it("should return false if not colliding", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const collidePoint: Point = randomPoint(
            { min: x + distance + 1, max: x + distance * 2 },
            { min: y + distance + 1, max: y + distance * 2 }
        );

        const result = collision({ x, y }, collidePoint, distance);

        expect(result).toBeFalsy();
    });

    /** Corner case: axis-aligned box around the point would collide, true circle does not. */
    it("should use circular (Euclidean) radius, not axis-aligned bounds", () => {
        const collisionDistance = 10;
        expect(
            collision({ x: 0, y: 0 }, { x: 9, y: 9 }, collisionDistance)
        ).toBe(false);
        expect(
            collision({ x: 0, y: 0 }, { x: 7, y: 7 }, collisionDistance)
        ).toBe(true);
    });
});
