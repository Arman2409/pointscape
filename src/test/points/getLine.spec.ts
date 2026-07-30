import getLine from "../../core/points/getLine";

// rectangle with area 1
const point1 = { x: 2, y: 0 };
const point2 = { x: 1, y: 1 };

describe("getLine", () => {
    it("should generate new line", () => {
        const newLine = getLine(point1, point2);

        expect(newLine.start).toBe(point1);
        expect(newLine.end).toBe(point2);
    });
});
