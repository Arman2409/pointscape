import radiansToDegrees from "../../core/math/radiansToDegrees";

describe("radiansToDegrees", () => {
    it("should return degrees", () => {
        const radians = radiansToDegrees(Math.PI / 2);

        expect(radians).toBe(90);
    });
});
