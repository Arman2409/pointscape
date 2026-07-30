import type { Vector } from "../../types/global";

const magnitude = (v: Vector): number => {
    return Math.sqrt(v.x * v.x + v.y * v.y);
};

export default magnitude;
