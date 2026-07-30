import reflect from "../../core/vectors/reflect";

describe("reflect", () => {
    it("should bounce a vector off a surface with the given unit normal", () => {
        // incoming velocity (1, -1) hitting a floor with normal (0, 1)
        expect(reflect({ x: 1, y: -1 }, { x: 0, y: 1 })).toStrictEqual({
            x: 1,
            y: 1,
        });
    });

    it("should leave a vector unchanged when it's parallel to the surface", () => {
        expect(reflect({ x: 1, y: 0 }, { x: 0, y: 1 })).toStrictEqual({
            x: 1,
            y: 0,
        });
    });
});
