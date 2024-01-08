"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const checkForCollision = (x1, y1, x2, y2, collisionDistance, callback) => {
    if (((0, lodash_1.inRange)(x1, x2 - collisionDistance, x2)
        || (0, lodash_1.inRange)(x1, x2, x2 + collisionDistance)) &&
        ((0, lodash_1.inRange)(y1, y2 - collisionDistance, y2)
            || (0, lodash_1.inRange)(y1, y2, y2 + collisionDistance)))
        callback();
};
exports.default = checkForCollision;
