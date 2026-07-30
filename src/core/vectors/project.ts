import dotProduct from "./dotProduct";
import multiply from "./multiply";
import type { Vector } from "../../types/global";

/** Projects `v` onto `onto`, returning the component of `v` parallel to `onto`. */
const project = (v: Vector, onto: Vector): Vector => {
    const ontoMagnitudeSquared = dotProduct(onto, onto);
    if (ontoMagnitudeSquared === 0) {
        return { x: 0, y: 0 };
    }
    const scalar = dotProduct(v, onto) / ontoMagnitudeSquared;
    return multiply(onto, scalar);
};

export default project;
