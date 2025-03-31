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
    })

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
    })
})