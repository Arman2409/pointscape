import { area } from "../index";
import type { Point } from "../types/globals";

const rectanglePoints = [
    { x: 2, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 }
]

describe("area", () => {
    it("should return the are of a triangle", () => {
        expect(area(rectanglePoints)).toBe(1);
    })

    it("should return the are of a rectangle", () => {
        const points: Point[] = [
            ...rectanglePoints,
            { x: 3, y: 1 }
        ];
        
        expect(area(points)).toBe(2);
    })
})