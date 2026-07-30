import subtract from "../../core/vectors/subtract";

describe("subtract", () => {
    it("should subtract two vectors component-wise", () => {
        expect(subtract({ x: 5, y: 7 }, { x: 2, y: 3 })).toStrictEqual({
            x: 3,
            y: 4,
        });
    });

    it("should return the zero vector when subtracting itself", () => {
        expect(subtract({ x: 5, y: -2 }, { x: 5, y: -2 })).toStrictEqual({
            x: 0,
            y: 0,
        });
    });
});
