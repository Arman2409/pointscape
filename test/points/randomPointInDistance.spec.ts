import { randomPointInDistance, distance, randomPoint, roundToPrecision } from "../../index";

describe("randomPointInDistance", () => {
    it("expect the distance to be equal the given distance in 10*-7 precision", () => {
        const distanceBetweenPoints = 10;
        const { x, y } = randomPoint();
        const { x: newPointX, y: newPointY } = randomPointInDistance(x, y, distanceBetweenPoints);
        const actualDistance = distance(x, y, newPointX, newPointY);
        
        expect(roundToPrecision(actualDistance, 7)).toBe(distanceBetweenPoints);
    })
})