"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pi = Math.PI;
const getAngle = (startX, startY, endX, endY) => {
    const xDifference = endX - startX;
    const yDifference = endY - startY;
    let toQuarter;
    if (xDifference >= 0) {
        if (yDifference >= 0) {
            toQuarter = 2;
        }
        else {
            toQuarter = 1;
        }
    }
    else {
        if (yDifference >= 0) {
            toQuarter = 3;
        }
        else {
            toQuarter = 4;
        }
    }
    const xChange = Math.abs(endX - startX);
    const yChange = Math.abs(endY - startY);
    const tan = toQuarter === 1 || toQuarter === 3 ? xChange / yChange : yChange / xChange;
    const angle_in_radians = (toQuarter - 1) * pi / 2 + Math.atan(tan);
    return angle_in_radians;
};
exports.default = getAngle;
