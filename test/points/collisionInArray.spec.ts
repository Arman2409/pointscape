import { collisionInArray } from "../../index";

describe("collisionInArray", () => {
    it("should return true if collides with other point", () => {
        const distance = 10;
        const x = 0;
        const y = 0;
        const pointsArr = [
            {
                x: distance / 2,
                y: distance / 2
            }
        ]
        const foundPoints = collisionInArray(x, y, distance, pointsArr);
        if(foundPoints.length) {
            const { x: foundX, y: foundY } = foundPoints[0];
            expect(foundX).toBe(distance / 2);
            expect(foundY).toBe(distance / 2);
            return;
        }
        throw new Error("Collision not found")
    })

})