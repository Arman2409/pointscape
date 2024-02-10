import inRange from "../math/inRange";

const collision = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    collisionDistance: number,
    callback?: Function):boolean => {
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