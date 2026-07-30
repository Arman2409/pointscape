import randomPointInDistance from "../../core/points/randomPointInDistance";
import distance from "../../core/points/distance";
import randomPoint from "../../core/points/randomPoint";
import roundToPrecision from "../../core/math/roundToPrecision";
import expect from "expect";

describe("randomPointInDistance", () => {
    it("expect the distance to be equal the given distance in 10*-7 precision", () => {
        const distanceBetweenPoints = 10;
        const point = randomPoint();
        const actualDistance = distance(
            point,
            randomPointInDistance(point, distanceBetweenPoints)
        );

        expect(roundToPrecision(actualDistance, 7)).toBe(distanceBetweenPoints);
    });
});
