import { degreesToRadians } from "../../index";

describe("degreesToRadians", () => {
    it("should return radians", () => {
        const radians = degreesToRadians(90);

        expect(radians).toBe(Math.PI / 2);
    })
})