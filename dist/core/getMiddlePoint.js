"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMiddlePoint = (x1, y1, x2, y2) => {
    const xDistance = Math.abs(x1 - x2);
    const yDistance = Math.abs(y1 - y2);
    const middleX = x2 >= x1 ? xDistance / 2 : -xDistance / 2;
    const middleY = y2 >= y1 ? yDistance / 2 : -yDistance / 2;
    return {
        x: middleX,
        y: middleY
    };
};
exports.default = getMiddlePoint;
