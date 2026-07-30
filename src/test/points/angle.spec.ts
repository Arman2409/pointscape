import angle from "../../core/points/angle";

const pi = Math.PI;

describe("angle", () => {
    it("should return 0 for coincident points", () => {
        expect(angle({ x: 5, y: 5 }, { x: 5, y: 5 })).toBe(0);
    });

    it("should return 0 pointing along the positive x-axis", () => {
        expect(angle({ x: 0, y: 0 }, { x: 1, y: 0 })).toBe(0);
    });

    it("should return pi/2 pointing along the positive y-axis", () => {
        expect(angle({ x: 0, y: 0 }, { x: 0, y: 1 })).toBeCloseTo(pi / 2);
    });

    it("should return pi/4 for a 45 degree direction", () => {
        expect(angle({ x: 0, y: 0 }, { x: 1, y: 1 })).toBeCloseTo(pi / 4);
    });

    /** Regression: angle() must depend only on the direction point1 -> point2,
     *  not on point1's absolute position (a previous quadrant-adjustment bug
     *  made it return different results for the same direction depending on
     *  where point1 sat relative to the origin). */
    it("should be independent of point1's absolute position", () => {
        expect(angle({ x: 5, y: 5 }, { x: 10, y: 5 })).toBeCloseTo(
            angle({ x: 0, y: 0 }, { x: 1, y: 0 })
        );
        expect(angle({ x: -100, y: 40 }, { x: -100, y: 41 })).toBeCloseTo(
            angle({ x: 0, y: 0 }, { x: 0, y: 1 })
        );
    });
});
