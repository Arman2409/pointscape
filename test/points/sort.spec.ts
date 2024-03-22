import { sort } from "../../index";

// Sample points for testing
const points = [
    { x: 0, y: 0 },
    { x: 2, y: 2 },
    { x: 1, y: 1 },
];
// Scale factors
const sortedPoints = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
]

describe('sort', () => {
    it("should sort the points", () => {
        expect(sort(points)).toStrictEqual(sortedPoints)
    })

    it("should sort the points by X", () => {
        expect(sort(points, "x")).toStrictEqual(sortedPoints)
    })
});