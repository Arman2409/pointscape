import degreesToRadians from "../../core/math/degreesToRadians";

describe("degreesToRadians", () => {
    it("should return radians", () => {
        const radians = degreesToRadians(90);

        expect(radians).toBe(Math.PI / 2);
    });
});
