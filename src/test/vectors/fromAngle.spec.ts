import fromAngle from "../../core/vectors/fromAngle";

describe("fromAngle", () => {
    it("should return a unit vector along the positive x-axis for angle 0", () => {
        expect(fromAngle(0)).toStrictEqual({ x: 1, y: 0 });
    });

    it("should return a unit vector along the positive y-axis for pi/2", () => {
        const v = fromAngle(Math.PI / 2);
        expect(v.x).toBeCloseTo(0);
        expect(v.y).toBeCloseTo(1);
    });

    it("should scale by the given magnitude", () => {
        expect(fromAngle(0, 5)).toStrictEqual({ x: 5, y: 0 });
    });
});
