import multiply from "../../core/vectors/multiply";

describe("multiply", () => {
    it("should scale a vector by a scalar", () => {
        expect(multiply({ x: 2, y: -3 }, 3)).toStrictEqual({ x: 6, y: -9 });
    });

    it("should return the zero vector when multiplied by 0", () => {
        expect(multiply({ x: 5, y: 7 }, 0)).toStrictEqual({ x: 0, y: 0 });
    });

    it("should reverse direction when multiplied by -1", () => {
        expect(multiply({ x: 2, y: -3 }, -1)).toStrictEqual({ x: -2, y: 3 });
    });
});
