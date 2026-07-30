import { middle } from "../../index";

describe("middle", () => {
    it("should return the exact midpoint between two points", () => {
        expect(middle({ x: 0, y: 0 }, { x: 10, y: 10 })).toStrictEqual({
            x: 5,
            y: 5,
        });
    });

    it("should work regardless of argument order", () => {
        const a = { x: 0, y: 0 };
        const b = { x: 10, y: 10 };
        expect(middle(a, b)).toStrictEqual(middle(b, a));
    });

    it("should work with negative coordinates", () => {
        expect(middle({ x: -10, y: -10 }, { x: 10, y: 10 })).toStrictEqual({
            x: 0,
            y: 0,
        });
    });
});
