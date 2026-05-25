import { inLine } from "../../index";
import { Line, Point } from "../../types/global";

const inLinePoint: Point = { x: 1, y: 1 };
const line1: Line = {
    start: { x: 2, y: 2 },
    end: { x: 3, y: 3 },
};

const notInLinePoint: Point = { x: 1, y: 1 };
const line2: Line = {
    start: { x: 3, y: 2 },
    end: { x: 3, y: 3 },
};

describe("inLine", () => {
    it("should return true if the point is in line", () => {
        expect(inLine(inLinePoint, line1)).toBeTruthy();
    });

    it("should return false if the point is not in line", () => {
        expect(inLine(notInLinePoint, line2)).toBeFalsy();
    });
});
