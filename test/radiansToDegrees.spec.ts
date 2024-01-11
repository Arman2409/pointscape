import { radiansToDegrees } from "../index";

describe("radiansToDegrees", () => {
    it("should return degrees", () => {
        const radians = radiansToDegrees(Math.PI / 2);

        expect(radians).toBe(90);
    })
})