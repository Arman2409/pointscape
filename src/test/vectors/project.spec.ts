import project from "../../core/vectors/project";

describe("project", () => {
    it("should project a vector onto an axis-aligned vector", () => {
        expect(project({ x: 3, y: 4 }, { x: 1, y: 0 })).toStrictEqual({
            x: 3,
            y: 0,
        });
    });

    it("should return the zero vector when projecting onto the zero vector", () => {
        expect(project({ x: 3, y: 4 }, { x: 0, y: 0 })).toStrictEqual({
            x: 0,
            y: 0,
        });
    });

    it("should return the same vector when projecting onto itself", () => {
        expect(project({ x: 2, y: 5 }, { x: 2, y: 5 })).toStrictEqual({
            x: 2,
            y: 5,
        });
    });
});
