import magnitude from "../core/vectors/magnitude";
import normalize from "../core/vectors/normalize";
import dotProduct from "../core/vectors/dotProduct";
import crossProduct from "../core/vectors/crossProduct";
import add from "../core/vectors/add";
import subtract from "../core/vectors/subtract";
import multiply from "../core/vectors/multiply";
import project from "../core/vectors/project";
import reflect from "../core/vectors/reflect";
import perpendicular from "../core/vectors/perpendicular";
import fromAngle from "../core/vectors/fromAngle";
import type { Vector as VectorType } from "../types/global";

export class Vector implements VectorType {
    constructor(
        public x: number,
        public y: number
    ) {}

    static from(point: VectorType): Vector {
        return new Vector(point.x, point.y);
    }

    static fromAngle(angleInRadians: number, magnitude: number = 1): Vector {
        const v = fromAngle(angleInRadians, magnitude);
        return new Vector(v.x, v.y);
    }

    clone(): Vector {
        return new Vector(this.x, this.y);
    }

    equals(other: VectorType): boolean {
        return this.x === other.x && this.y === other.y;
    }

    toString(): string {
        return `Vector(${this.x}, ${this.y})`;
    }

    magnitude(): ReturnType<typeof magnitude> {
        return magnitude(this);
    }

    normalize(): Vector {
        const n = normalize(this);
        return new Vector(n.x, n.y);
    }

    dot(other: VectorType): ReturnType<typeof dotProduct> {
        return dotProduct(this, other);
    }

    cross(other: VectorType): ReturnType<typeof crossProduct> {
        return crossProduct(this, other);
    }

    add(other: VectorType): Vector {
        const v = add(this, other);
        return new Vector(v.x, v.y);
    }

    subtract(other: VectorType): Vector {
        const v = subtract(this, other);
        return new Vector(v.x, v.y);
    }

    multiply(scalar: number): Vector {
        const v = multiply(this, scalar);
        return new Vector(v.x, v.y);
    }

    project(onto: VectorType): Vector {
        const v = project(this, onto);
        return new Vector(v.x, v.y);
    }

    reflect(normal: VectorType): Vector {
        const v = reflect(this, normal);
        return new Vector(v.x, v.y);
    }

    perpendicular(): Vector {
        const v = perpendicular(this);
        return new Vector(v.x, v.y);
    }
}

export default Vector;
