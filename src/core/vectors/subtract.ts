import type { Vector } from "../../types/global";

const subtract = (v1: Vector, v2: Vector): Vector => {
    return { x: v1.x - v2.x, y: v1.y - v2.y };
};

export default subtract;
