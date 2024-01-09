import {pointWithoutCollision} from "../index";
import type { Point } from "../types/globals";

describe("pointWithoutCollision", () => {
    it("should generate a point which doesn't collide with others", () => {
        const distance = 50;
        const xMin = 0;
        const xMax = 500;
        const yMin = 0;
        const yMax = 500;
        const points:Point[] = [];
        const getRandomInLimits = () => pointWithoutCollision(xMin, xMax, yMin, yMax, distance, points);
        for (let i = 0; i < 5; i++) {
           points.push(getRandomInLimits());
        }
        const {x:currentX, y: currentY} = getRandomInLimits();
        const collide = points.find(({x,y}) => Math.abs(x - currentX) < distance || Math.abs(y - currentY) < distance);
        
        expect(collide).toBe(undefined);
    })
})