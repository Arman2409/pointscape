import { distance, pentagon } from "../../index";

describe("pentagon", () => {
    it("distance between returned points should be equal", () => {
        const ceneterPoint = {x: 0, y: 0};
        const points = pentagon(ceneterPoint, 10, 450);
        const distance1 = distance(points[0], points[1]);
        const distance2 = distance(points[1], points[2]);

        expect(distance1).toBeCloseTo(distance2);
    })
})