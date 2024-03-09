import { randomPointInDistance, distance, randomPoint, roundToPrecision } from "../../index";

describe("randomPointInDistance", () => {
    it("expect the distance to be equal the given distance in 10*-7 precision", () => {
        const distanceBetweenPoints = 10;
        const point = randomPoint();
        const actualDistance = distance(point, randomPointInDistance(point, distanceBetweenPoints));
        
        expect(roundToPrecision(actualDistance, 7)).toBe(distanceBetweenPoints);
    })
})