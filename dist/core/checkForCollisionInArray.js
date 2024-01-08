"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const checkForCollisionInArray = (x, y, radius, arr, callback, repeated = 1) => {
    repeated++;
    if (repeated >= 100) {
        console.error("Can't get needed dimesions, returning current dimesions");
        return {
            x, y
        };
    }
    let hasCollides = false;
    let collisionX = 0;
    let collisionY = 0;
    arr.forEach(({ x: pointX, y: pointY }) => {
        if (hasCollides)
            return;
        (0, __1.checkForCollision)(x, y, pointX, pointY, radius, () => {
            hasCollides = true;
            collisionX = pointX;
            collisionY = pointY;
        });
    });
    if (hasCollides) {
        const collisionPoint = {
            x: collisionX,
            y: collisionY
        };
        callback && callback(collisionPoint);
        return collisionPoint;
    }
    return false;
};
exports.default = checkForCollisionInArray;
