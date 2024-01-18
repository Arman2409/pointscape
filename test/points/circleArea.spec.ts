import { circleArea } from "../../index";

describe("circleArea", () => {
    it("should return 4 * Pi for 2", () => {
        const area = circleArea(2);
        
        expect(area).toBe(4 * Math.PI);
    })
})