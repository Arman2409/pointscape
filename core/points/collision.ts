import inRange from "../math/inRange";
import type { Point } from "../../types/globals";

const collision = (
    point1: Point,
    point2: Point,
    collisionDistance: number,
    callback?: Function): boolean => {
    const { x: x1, y: y1 } = { ...point1 };
    const { x: x2, y: y2 } = { ...point2 };
    if (

        // Check if the given values are in the range 
        (inRange(x1, x2 - collisionDistance, x2)
            || inRange(x1, x2, x2 + collisionDistance)
        ) &&
        (inRange(y1, y2 - collisionDistance, y2)
            || inRange(y1, y2, y2 + collisionDistance))
    ) {
        callback && callback();
        return true;
    };
    return false;
}

export default collision;