import { average } from "../../index";

const numbersArr = [1, 2, 3];
const actualAverage = 2;

describe("average", () => {
    it("should return the average number", () => {
        const result = average(numbersArr);
        
        expect(result).toBe(actualAverage);
    })
})