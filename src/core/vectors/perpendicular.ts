import type { Vector } from "../../types/global";

/** Rotates the vector 90 degrees counter-clockwise. */
const perpendicular = (v: Vector): Vector => {
    return { x: -v.y, y: v.x };
};

export default perpendicular;
