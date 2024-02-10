import { square } from "../../index";

const squarePoints =  [ 
    { x: 0, y: 0 }, 
    { x: -1, y: 0 }, 
    { x: -1, y: 1 }, 
    { x: 0, y: 1 } 
]
describe("square", () => {
    it("should return points for a square", () => {
        const points = square(0, 0, 1, "left");

        expect(points).toStrictEqual(squarePoints);  
    })
})