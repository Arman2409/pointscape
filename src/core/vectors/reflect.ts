import dotProduct from "./dotProduct";
import multiply from "./multiply";
import subtract from "./subtract";
import type { Vector } from "../../types/global";

/** Reflects `v` off a surface with the given unit `normal`. */
const reflect = (v: Vector, normal: Vector): Vector => {
    const scalar = 2 * dotProduct(v, normal);
    return subtract(v, multiply(normal, scalar));
};

export default reflect;
