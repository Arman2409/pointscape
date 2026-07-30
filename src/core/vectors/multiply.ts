import type { Vector } from "../../types/global";

const multiply = (v: Vector, scalar: number): Vector => {
    return { x: v.x * scalar, y: v.y * scalar };
};

export default multiply;
