import perpendicular from "../../core/vectors/perpendicular";
import dotProduct from "../../core/vectors/dotProduct";

describe("perpendicular", () => {
    it("should rotate a vector 90 degrees counter-clockwise", () => {
        expect(perpendicular({ x: 2, y: 5 })).toStrictEqual({ x: -5, y: 2 });
    });

    it("should be orthogonal to the original vector", () => {
        const v = { x: 3, y: -7 };
        expect(dotProduct(v, perpendicular(v))).toBe(0);
    });

    it("should negate the original vector after two rotations", () => {
        const v = { x: 2, y: 5 };
        expect(perpendicular(perpendicular(v))).toStrictEqual({
            x: -2,
            y: -5,
        });
    });
});
