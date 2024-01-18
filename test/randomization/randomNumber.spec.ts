import { randomNumber } from "../../index";

describe("randomNumber", () => {
    it("should return random number in the range", () => {
        const minLimit = 0;
        const maxLimit = 10;
        const number = randomNumber(minLimit, maxLimit);

        expect(number).toBeGreaterThanOrEqual(minLimit);
        expect(number).toBeLessThanOrEqual(maxLimit);    
    })
})