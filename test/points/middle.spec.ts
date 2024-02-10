import { middle, randomPoint } from "../../index";
import type { Point } from "../../types/globals";

describe("middle", () => {
    it("should  return the middle point", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const { x: destX, y: destY }: Point = randomPoint(distance, distance);
        const { x: middleX, y: middleY }: Point = middle(x, y, destX, destY);
        
        expect(middleX).toBeLessThan(destX);
        expect(middleY).toBeLessThan(destY);
    })
})