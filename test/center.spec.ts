import { center } from "../index";

// points of a square with the center of 1,1
const squarePoints = [
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: 2, y: 0 },
    { x: 2, y: 2 },
];

describe("center", () => {
    it("should return the center", () => {
        const { x, y } = center(squarePoints);

        expect(x).toBe(1);
        expect(y).toBe(1);
    })
})