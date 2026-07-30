import type { Vector } from "../../types/global";

/** Scalar (2D) cross product — the z-component of the 3D cross product. */
const crossProduct = (v1: Vector, v2: Vector): number => {
    return v1.x * v2.y - v1.y * v2.x;
};

export default crossProduct;
