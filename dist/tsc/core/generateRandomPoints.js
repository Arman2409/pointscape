"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomNumber_1 = __importDefault(require("./getRandomNumber"));
const generateRandomPoints = (xLimitsMin, xLimitsMax, yLimitsMin, yLimitsMax, count) => {
    const points = [];
    for (let i = 0; i < count; i++) {
        const x = (0, getRandomNumber_1.default)(xLimitsMin, xLimitsMax);
        const y = (0, getRandomNumber_1.default)(yLimitsMin, yLimitsMax);
        points.push({ x, y });
    }
    return points;
};
exports.default = generateRandomPoints;
