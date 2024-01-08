"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const getRandomNumber_1 = __importDefault(require("./getRandomNumber"));
const generateWithoutCollisions = (others, width, height, distance) => {
    try {
        const x = (0, getRandomNumber_1.default)(distance, width - distance);
        const y = (0, getRandomNumber_1.default)(distance, height - distance);
        let hasCollides = false;
        others.forEach(({ x: otherX, y: otherY }) => {
            if ((0, lodash_1.inRange)(x, otherX - distance, otherX + distance)
                && (0, lodash_1.inRange)(y, otherY - distance, otherY + distance)) {
                hasCollides = true;
            }
        });
        if (hasCollides) {
            return generateWithoutCollisions(others, width, height, distance);
        }
        else {
            return { x, y };
        }
    }
    catch (e) {
        return generateWithoutCollisions(others, width, height, distance);
    }
};
exports.default = generateWithoutCollisions;
