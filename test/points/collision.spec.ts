import { collision, randomPoint } from "../../index";
import type { Point } from "../../types/globals";

describe("collision", () => {
    it("should  return true if colliding", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const collidePoint: Point = randomPoint(x, x + distance / 2, y, y + distance / 2);
        const result = collision({ x, y }, collidePoint, distance);
        expect(result).toBeTruthy();
    })

    it("should return false if not colliding", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const collidePoint: Point = randomPoint(x + distance + 1, y + distance + 1);

        const result = collision({ x, y }, collidePoint, distance);

        expect(result).toBeFalsy();
    })
})