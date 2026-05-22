import { lerp } from "../../index";

const p1 = { x: 0, y: 0 };
const p2 = { x: 10, y: 20 };

describe("lerp", () => {
    it("should return point1 when t is 0", () => {
        expect(lerp(p1, p2, 0)).toStrictEqual({ x: 0, y: 0 });
    });

    it("should return point2 when t is 1", () => {
        expect(lerp(p1, p2, 1)).toStrictEqual({ x: 10, y: 20 });
    });

    it("should return midpoint when t is 0.5", () => {
        expect(lerp(p1, p2, 0.5)).toStrictEqual({ x: 5, y: 10 });
    });

    it("should interpolate correctly at t = 0.25", () => {
        expect(lerp(p1, p2, 0.25)).toStrictEqual({ x: 2.5, y: 5 });
    });

    it("should work with negative coordinates", () => {
        expect(lerp({ x: -10, y: -10 }, { x: 10, y: 10 }, 0.5)).toStrictEqual({ x: 0, y: 0 });
    });
});
