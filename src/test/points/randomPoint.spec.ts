import randomPoint from "../../core/points/randomPoint";

describe("randomNumber", () => {
    it("should return random points in given limits", () => {
        const xMin = 0;
        const xMax = 500;
        const yMin = 0;
        const yMax = 500;
        const xBounds = { min: xMin, max: xMax };
        const yBounds = { min: yMin, max: yMax };

        const { x, y } = randomPoint(xBounds, yBounds);

        expect(x).toBeGreaterThanOrEqual(xMin);
        expect(x).toBeLessThanOrEqual(xMax);
        expect(y).toBeGreaterThanOrEqual(yMin);
        expect(y).toBeLessThanOrEqual(yMax);
    });
});
