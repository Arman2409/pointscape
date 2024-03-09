import { inLine } from "../../index";

const inLinePoints = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}]
const notInLinePoints = [{x: 1, y: 1}, {x: 3, y: 2}, {x: 3, y: 3}]

describe("inLine", () => {
    it("should return true if the point is in line", () => {
        expect(inLine(inLinePoints)).toBeTruthy();
    })

    it("should return false if the point is not in line", () => {
        expect(inLine(notInLinePoints)).toBeFalsy();
    })
})