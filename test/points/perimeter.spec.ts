import { perimeter } from "../../index";

// square with perimeter 4
export const squarePoints = [
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 1, y: 1},
    {x: 1, y: 0},
]

describe("perimeter", () => {
    it("should return the perimeter", () => {
        const squarePerimeter = perimeter(squarePoints);

        expect(squarePerimeter).toBe(4);
    })
})