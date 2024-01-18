import { randomPoint } from "../../index";

describe("randomNumber", () => {
    it("should return random points in given limits", () => {
        const xMin = 0;
        const xMax = 500;
        const yMin = 0;
        const yMax = 500;
        const {x, y} = randomPoint(xMin, xMax, yMin, yMax);

        expect(x).toBeGreaterThanOrEqual(xMin);  
        expect(x).toBeLessThanOrEqual(xMax);
        expect(y).toBeGreaterThanOrEqual(yMin);  
        expect(y).toBeLessThanOrEqual(yMax);    

    })
})