import { distance, triangle } from "../../index";

describe("triangle", () => {
    it("distance between returned points should be equal", () => {
        const initialPoint = { x: 0, y: 0 };
        const points = triangle(initialPoint, 10);
        const distance1 = distance(points[0], points[1]);
        const distance2 = distance(points[1], points[2]);

        expect(distance1).toBe(distance2);
    })
})