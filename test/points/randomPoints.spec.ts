import { randomPoints } from "../../index";

describe("randomPoints", () => {
    it("should return random points in given limits", () => {
        const xMin = 0;
        const xMax = 500;
        const yMin = 0;
        const yMax = 500;
        const points = randomPoints(10, xMin, xMax, yMin, yMax);
        const outerPoint = points.find(({x, y}) => x < xMin || x > xMax || y < yMin || y > yMax);
        
        expect(outerPoint).toBe(undefined);  
    })
})