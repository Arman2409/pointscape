import { middle, randomPoint } from "../../index";
import type { Point } from "../../types/global";

describe("middle", () => {
    it("should  return the middle point", () => {
        const distance = 10;
        const initialPoint = { x: 0, y: 0 }
        const { x: destX, y: destY }: Point = randomPoint({min: 0, max: 0}, {min: distance, max: distance});
        const { x: middleX, y: middleY }: Point = middle(initialPoint, { x: destX, y: destY });

        expect(middleX).toBeLessThan(destX);
        expect(middleY).toBeLessThan(destY);
    })
})