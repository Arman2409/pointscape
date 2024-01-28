import { cross } from "../../index";

const crossingLines = [{x: 1, y: 0}, {x: 1, y: 4}, {x: 0, y: 1}, {x: 4, y: 1}]
const notCrossingLines = [{x: 1, y: 1}, {x: 1, y: 4}, {x: 2, y: 1}, {x: 2, y: 4}]

describe("cross", () => {
    it("should return true if lines are crossing", () => {
        const areCrossing = cross(crossingLines[0], crossingLines[1], crossingLines[2], crossingLines[3]);
        expect(areCrossing).toBeTruthy();
    })

    it("should return false if lines are not crossing", () => {
        const areCrossing = cross(notCrossingLines[0], notCrossingLines[1], notCrossingLines[2], notCrossingLines[3]);
        
        expect(areCrossing).toBeFalsy();
    })
})