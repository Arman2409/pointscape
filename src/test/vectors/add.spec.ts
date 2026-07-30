import add from "../../core/vectors/add";

describe("add", () => {
    it("should add two vectors component-wise", () => {
        expect(add({ x: 1, y: 2 }, { x: 3, y: 4 })).toStrictEqual({
            x: 4,
            y: 6,
        });
    });

    it("should be the identity when adding the zero vector", () => {
        expect(add({ x: 5, y: -2 }, { x: 0, y: 0 })).toStrictEqual({
            x: 5,
            y: -2,
        });
    });
});
