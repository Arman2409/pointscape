import {pointWithoutCollision} from "../../index";
import type { Point } from "../../types/globals";

describe("pointWithoutCollision", () => {
    it("should generate a point which doesn't collide with others", () => {
        const distance = 20;
        const xMin = 0, yMin = 0;
        const xMax = 500, yMax = 500;;
        const points:Point[] = [];
        const getRandomInLimits = () => pointWithoutCollision(xMin, xMax, yMin, yMax, distance, points);
        for (let i = 0; i < 5; i++) {
           points.push(getRandomInLimits());
        }
        const {x:currentX, y: currentY} = getRandomInLimits();
        const collided = points.find(({x,y}) => Math.abs(x - currentX) < distance && Math.abs(y - currentY) < distance);
        
        expect(collided).toBe(undefined);
    })
})