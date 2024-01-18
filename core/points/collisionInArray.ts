import { collision } from "../../index";
import type { Point } from "../../types/globals";

const collisionInArray = (
    x: number,
    y: number,
    radius: number,
    arr: Point[]
    ): Point[] => {
    let collisionX = 0;
    let collisionY = 0;
    const collisionsArr:Point[] = [];
    arr.forEach(({ x: pointX, y: pointY }: Point) => {
        collision(x, y, pointX, pointY, radius, () => {
            collisionsArr.push({x: pointX, y: pointY})
            collisionX = pointX;
            collisionY = pointY;
        });
    });
    return collisionsArr;
}

export default collisionInArray;