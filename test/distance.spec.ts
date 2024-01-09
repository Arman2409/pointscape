import {randomPoint, distance} from "../index";
import type { Point } from "../types/globals";

describe("distance", () => {
    it("should calculate distance between two points", () => {
        const {x = 0, y = 0}:Point = randomPoint();
        const {x: destX = 0, y: destY = 0}:Point = randomPoint();
        const distanceBeetwen = distance(x, y, destX, destY);      
          
        expect(distanceBeetwen).toBeGreaterThanOrEqual(0);
    })
})