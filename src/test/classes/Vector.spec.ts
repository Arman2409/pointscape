import Vector from "../../classes/Vector";

describe("Vector", () => {
    it("should compute magnitude", () => {
        expect(new Vector(3, 4).magnitude()).toBe(5);
    });

    it("should add another vector and return a Vector instance", () => {
        const result = new Vector(1, 2).add(new Vector(3, 4));
        expect(result).toBeInstanceOf(Vector);
        expect(result.x).toBe(4);
        expect(result.y).toBe(6);
    });

    it("should subtract another vector", () => {
        const result = new Vector(5, 7).subtract({ x: 2, y: 3 });
        expect(result.x).toBe(3);
        expect(result.y).toBe(4);
    });

    it("should scale via multiply", () => {
        const result = new Vector(2, -3).multiply(3);
        expect(result.x).toBe(6);
        expect(result.y).toBe(-9);
    });

    it("should normalize to unit length", () => {
        const result = new Vector(-7, 2).normalize();
        expect(result.magnitude()).toBeCloseTo(1);
    });

    it("should compute dot and cross products", () => {
        const a = new Vector(2, 3);
        const b = new Vector(4, 5);
        expect(a.dot(b)).toBe(23);
        expect(a.cross(b)).toBe(-2);
    });

    it("should build a unit vector from an angle via the static factory", () => {
        const v = Vector.fromAngle(0, 5);
        expect(v).toBeInstanceOf(Vector);
        expect(v.x).toBe(5);
        expect(v.y).toBe(0);
    });

    it("should report equality by value, not reference", () => {
        expect(new Vector(1, 2).equals(new Vector(1, 2))).toBe(true);
        expect(new Vector(1, 2).equals({ x: 1, y: 2 })).toBe(true);
        expect(new Vector(1, 2).equals(new Vector(1, 3))).toBe(false);
    });
});
