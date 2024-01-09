import { angle, randomPoint } from "../index";

const pi = Math.PI;

describe("angle", () => {
    it("should return the angle in radians", () => {
        const startX = 0;
        const startY = 0;
        const {x,y} = randomPoint();        
        const angleInRadians = angle(startX, startY, x, y);

        expect(angleInRadians).toBeGreaterThanOrEqual(pi/2);
        expect(angleInRadians).toBeLessThanOrEqual(pi);
    })
})