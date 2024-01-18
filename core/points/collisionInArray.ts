import { collision } from "../../index";
import type { Point } from "../../types/globals";

const collisionInArray = (
    x: number,
    y: number,
    radius: number,
    arr: Point[],
    callback?: Function,
    repeated?: number): Point | false => {
    if (!repeated) repeated = 0;
    repeated++;
    if (repeated >= 100) {
        console.error("Can't get needed dimesions, returning current dimesions");
        return {
            x, y
        }
    }
    let hasCollides = false;
    let collisionX = 0;
    let collisionY = 0;
    arr.forEach(({ x: pointX, y: pointY }: Point) => {
        if (hasCollides) return;
        collision(x, y, pointX, pointY, radius, () => {
            hasCollides = true;
            collisionX = pointX;
            collisionY = pointY;
        });
    });
    if (hasCollides) {
        const collisionPoint = {
            x: collisionX,
            y: collisionY
        }
        callback && callback(collisionPoint);
        return collisionPoint;
    }
    return false;
}

export default collisionInArray;