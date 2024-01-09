import { collision, collisionInArray, randomPoint } from "../index";
import type { Point } from "../types/globals";

describe("collisionInArray", () => {
    it("should  return true if collides with other point", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const pointsArr = [
            {
                x: distance / 2,
                y: distance / 2
            }
        ]
        const foundPoint = collisionInArray(x, y, distance, pointsArr);
        if(foundPoint) {
            const { x: foundX, y: foundY } = foundPoint;
            expect(foundX).toBe(distance / 2);
            expect(foundY).toBe(distance / 2);
            return;
        }
        throw new Error("Collision not found")
    })

    it("should return false if not colliding", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const { x: notCollideX, y: notCollideY }: Point = randomPoint(x + distance + 1, y + distance + 1);

        const result = collision(x, y, notCollideX, notCollideY, distance);

        expect(result).toBeFalsy();
    })
})