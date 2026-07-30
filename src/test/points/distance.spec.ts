import distance from "../../core/points/distance";

describe("distance", () => {
    it("should return 5 for a 3-4-5 triangle", () => {
        expect(distance({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(5);
    });

    it("should return 0 for the same point", () => {
        expect(distance({ x: 7, y: -2 }, { x: 7, y: -2 })).toBe(0);
    });

    it("should be symmetric regardless of argument order", () => {
        const a = { x: 1, y: 2 };
        const b = { x: -3, y: 5 };
        expect(distance(a, b)).toBe(distance(b, a));
    });

    it("should work with negative coordinates", () => {
        expect(distance({ x: -3, y: -4 }, { x: 0, y: 0 })).toBe(5);
    });
});
