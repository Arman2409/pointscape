import magnitude from "../../core/vectors/magnitude";

describe("magnitude", () => {
    it("should return 5 for a 3-4-5 vector", () => {
        expect(magnitude({ x: 3, y: 4 })).toBe(5);
    });

    it("should return 0 for the zero vector", () => {
        expect(magnitude({ x: 0, y: 0 })).toBe(0);
    });

    it("should be unaffected by sign", () => {
        expect(magnitude({ x: -3, y: -4 })).toBe(5);
    });
});
