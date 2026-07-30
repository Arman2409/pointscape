import type { Vector } from "../../types/global";

const fromAngle = (angleInRadians: number, magnitude: number = 1): Vector => {
    return {
        x: Math.cos(angleInRadians) * magnitude,
        y: Math.sin(angleInRadians) * magnitude,
    };
};

export default fromAngle;
