"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const generateUniqueId = (others) => {
    const newId = (0, lodash_1.uniqueId)();
    let isTaken = false;
    others.forEach(({ id }) => {
        if (newId === id) {
            isTaken = true;
        }
    });
    if (isTaken) {
        return generateUniqueId(others);
    }
    else {
        return newId;
    }
};
exports.default = generateUniqueId;
