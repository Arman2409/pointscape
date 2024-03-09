import { collision } from "../../index";
import type { Point } from "../../types/globals";

const collisionInArray = (
    initialPoint: Point,
    arr: Point[],
    radius: number,
    ): Point[] => {
    const collisionsArr:Point[] = [];
    // Check for collision for every point in the array. If a collision is found store it to be used later.
    arr.forEach((point: Point) => {
        collision(initialPoint, point, radius, () => {
            collisionsArr.push(point);
        });
    });
    return collisionsArr;
}

export default collisionInArray;