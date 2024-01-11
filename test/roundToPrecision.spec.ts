import { roundToPrecision } from "../index";

describe("roundToPrecision", () => {
    it("should return 1 if 0.9999 rounded to 10*-3", () => {
        expect(roundToPrecision(0.9999, 3)).toBe(1);  
    })
})