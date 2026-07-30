import magnitude from "./magnitude";
import type { Vector } from "../../types/global";

const normalize = (v: Vector): Vector => {
    const mag = magnitude(v);
    if (mag === 0) {
        return { x: 0, y: 0 };
    }
    return { x: v.x / mag, y: v.y / mag };
};

export default normalize;
