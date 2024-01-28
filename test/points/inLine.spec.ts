import { inLine } from "../../index";

const inLinePoints = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}]
const notInLinePoints = [{x: 1, y: 1}, {x: 3, y: 2}, {x: 3, y: 3}]

describe("inLine", () => {
    it("should return true if the point is in line", () => {
        const {x,y} = inLinePoints[0];
        expect(inLine(x,y, inLinePoints[1], inLinePoints[2])).toBeTruthy();
    })

    it("should return false if the point is not in line", () => {
        const {x,y} = notInLinePoints[0];
        expect(inLine(x,y, notInLinePoints[1], notInLinePoints[2])).toBeFalsy();
    })
})