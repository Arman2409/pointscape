import type { Vector } from "../../types/global";

const add = (v1: Vector, v2: Vector): Vector => {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
};

export default add;
