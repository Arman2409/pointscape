import crossProduct from "../../core/vectors/crossProduct";

describe("crossProduct", () => {
    it("should return 1 for the standard basis vectors", () => {
        expect(crossProduct({ x: 1, y: 0 }, { x: 0, y: 1 })).toBe(1);
    });

    it("should return the correct signed area", () => {
        expect(crossProduct({ x: 2, y: 3 }, { x: 4, y: 5 })).toBe(-2);
    });

    it("should return 0 for parallel vectors", () => {
        expect(crossProduct({ x: 2, y: 4 }, { x: 1, y: 2 })).toBe(0);
    });
});
