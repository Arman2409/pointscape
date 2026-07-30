import normalize from "../../core/vectors/normalize";
import magnitude from "../../core/vectors/magnitude";

describe("normalize", () => {
    it("should scale a vector down to unit length", () => {
        expect(normalize({ x: 3, y: 4 })).toStrictEqual({ x: 0.6, y: 0.8 });
    });

    it("should return the zero vector for the zero vector", () => {
        expect(normalize({ x: 0, y: 0 })).toStrictEqual({ x: 0, y: 0 });
    });

    it("should always have magnitude 1 for a non-zero input", () => {
        expect(magnitude(normalize({ x: -7, y: 2 }))).toBeCloseTo(1);
    });
});
