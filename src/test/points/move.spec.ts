import move from "../../core/points/move";

const point = { x: 0, y: 0 };
const xChange = 1;
const yChange = 1;
const finalPoint = { x: 1, y: 1 };

describe("move", () => {
    it("should return the points' array for each position", () => {
        const newPoint = move(point, xChange, yChange);

        expect(newPoint).toStrictEqual(finalPoint);
    });
});
