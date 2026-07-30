import dotProduct from "../../core/vectors/dotProduct";

describe("dotProduct", () => {
    it("should return 0 for perpendicular vectors", () => {
        expect(dotProduct({ x: 1, y: 0 }, { x: 0, y: 1 })).toBe(0);
    });

    it("should return the correct dot product", () => {
        expect(dotProduct({ x: 2, y: 3 }, { x: 4, y: 5 })).toBe(23);
    });

    it("should equal the squared magnitude when dotted with itself", () => {
        expect(dotProduct({ x: 3, y: 4 }, { x: 3, y: 4 })).toBe(25);
    });
});
