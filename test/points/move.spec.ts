import { move } from "../../index";

const point = { x: 0, y: 0 }
const xChange = 1;
const yChange = 1;
const count = 3;
const finalPoint = {x: 3, y: 3}

describe("move", () => {
    it("should return the points' array for each position", () => {
        const pointsArr = move(point, xChange, yChange, count);
        console.log(pointsArr);

        const finalPointResult = pointsArr[pointsArr.length - 1];
        expect(finalPointResult).toStrictEqual(finalPoint);
        expect(pointsArr.length).toBe(count + 1);
    })
})