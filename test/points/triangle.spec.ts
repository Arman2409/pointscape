import { distance, triangle } from "../../index";

describe("triangle", () => {
    it("distance between returned points should be equal", () => {
        const points = triangle(0, 0, 10);
        const distance1 = distance(points[0]?.x, points[0].y, points[1].x, points[1].y);
        const distance2 = distance(points[1]?.x, points[1].y, points[2].x, points[2].y);

        expect(distance1).toBe(distance2);
    })
})