import { cross } from "../../index";

const crossingLines = [
    { start: { x: 1, y: 0 }, end: { x: 1, y: 4 } },
    { start: { x: 0, y: 1 }, end: { x: 4, y: 1 } }
];

const notCrossingLines = [
    { start: { x: 1, y: 1 }, end: { x: 1, y: 4 } },
    { start: { x: 2, y: 1 }, end: { x: 2, y: 4 } }
]

describe("cross", () => {
    it("should return true if lines are crossing", () => {
        const areCrossing = cross(crossingLines[0], crossingLines[1]);
        expect(areCrossing).toBeTruthy();
    })

    it("should return false if lines are not crossing", () => {
        const areCrossing = cross(notCrossingLines[0], notCrossingLines[1]);

        expect(areCrossing).toBeFalsy();
    })
})