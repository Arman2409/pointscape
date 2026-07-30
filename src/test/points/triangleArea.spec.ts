import { triangleArea } from "../../index";

describe("triangleArea", () => {
    it("should return the correct area of a right triangle", () => {
        // 3-4-5 right triangle: area = (3 * 4) / 2 = 6
        const area = triangleArea({ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 4 });
        expect(area).toBe(6);
    });

    it("should return the same area regardless of point order", () => {
        const p1 = { x: 0, y: 0 };
        const p2 = { x: 4, y: 0 };
        const p3 = { x: 0, y: 3 };
        expect(triangleArea(p1, p2, p3)).toBe(triangleArea(p3, p1, p2));
    });

    it("should return 0 for collinear points", () => {
        expect(triangleArea({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 })).toBe(0);
    });
});
