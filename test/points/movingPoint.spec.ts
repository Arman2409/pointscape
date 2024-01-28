import { movingPoint } from "../../index";

const x = 0;
const y = 0;
const xChange = 1;
const yChange = 1;
const count = 3;
const lastX = 3;
const lastY = 3;

describe("movingPoint", () => {
    it("should return the points' array for each position", () => {
        const pointsArr = movingPoint(x, y, xChange, yChange, count);
        console.log(pointsArr);
        
        const {x: finalX, y: finalY} = pointsArr[pointsArr.length - 1];
        expect(finalX).toBe(lastX);
        expect(finalY).toBe(lastY);
        expect(pointsArr.length).toBe(count + 1);
    })
})