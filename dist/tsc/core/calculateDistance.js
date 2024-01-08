"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateDistance = (x1, y1, x2, y2) => {
    const xDistance = Math.abs(x1 - x2);
    const yDistance = Math.abs(y1 - y2);
    const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
    return distance;
};
exports.default = calculateDistance;
