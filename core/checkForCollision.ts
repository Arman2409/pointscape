import { inRange } from "lodash";

const checkForCollision = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    collisionDistance: number,
    callback: Function):void => {
    if (
        (inRange(x1, x2 - collisionDistance, x2)
            || inRange(x1, x2, x2 + collisionDistance)
        ) &&
        (inRange(y1, y2 - collisionDistance, y2)
            || inRange(y1, y2, y2 + collisionDistance))
    ) callback();
}

export default checkForCollision;