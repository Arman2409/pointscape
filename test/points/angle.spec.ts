import { angle, randomPoint } from "../../index";

const pi = Math.PI;
const startX = 0;
const startY = 0;

describe("angle", () => {
    it("should return the angle in radians", () => {
        const angleInRadians = angle({x: startX, y: startY}, randomPoint());

        expect(angleInRadians).toBeGreaterThanOrEqual(0);
        expect(angleInRadians).toBeLessThanOrEqual(pi);
    })
})