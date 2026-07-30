import type { Vector } from "../../types/global";

const dotProduct = (v1: Vector, v2: Vector): number => {
    return v1.x * v2.x + v1.y * v2.y;
};

export default dotProduct;
