import {inRange, randomNumber} from "../index";

describe("inRange", () => {
    it("should check if the number is in the range", () => {
        const number = randomNumber(0, 10);
        
        expect(inRange(number, 0, 10)).toBeTruthy();
    })
})