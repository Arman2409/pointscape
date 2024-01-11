import { positionInCircle } from "../index";

describe("positionInCircle", () => {
    it("expect to give another x and same y for 90 degree", () => {
        const centerX = 1;
        const centerY = 1;
        const {x,y} = positionInCircle(centerX, centerY, 1, Math.PI / 2);

        expect(x).toBe(1);
        expect(y).toBe(2);
    })
})