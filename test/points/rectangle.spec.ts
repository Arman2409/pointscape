import { rectangle } from "../../index";

const rectanglePoints =  [
     { x: 0, y: 0 },
      { x: 10, y: 0 }, 
      { x: 10, y: -5 }, 
      { x: 0, y: -5 } 
]

describe("rectangle", () => {
    it("should return points for a rectangle", () => {
        const initialPoint = {x: 0, y: 0}
        const points = rectangle(initialPoint, 10, 5);

        expect(points).toStrictEqual(rectanglePoints);  
    })
})