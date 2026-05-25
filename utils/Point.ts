import distance from "../core/points/distance";
import collision from "../core/points/collision";
import middle from "../core/points/middle";
import angle from "../core/points/angle";
import move from "../core/points/move";
import farest from "../core/points/farest";
import nearest from "../core/points/nearest";
import collisionInArray from "../core/points/collisionInArray";
import inLine from "../core/points/inLine";
import getLine from "../core/points/getLine";
import lerpFn from "../core/points/lerp";
import rotateFn from "../core/points/rotate";
import type { Line, Point as PointType } from "../types/global";

export class Point implements PointType {
    constructor(
        public x: number,
        public y: number
    ) {}

    static from(point: PointType): Point {
        return new Point(point.x, point.y);
    }

    clone(): Point {
        return new Point(this.x, this.y);
    }

    equals(other: PointType): boolean {
        return this.x === other.x && this.y === other.y;
    }

    toString(): string {
        return `Point(${this.x}, ${this.y})`;
    }

    distanceTo(other: PointType): ReturnType<typeof distance> {
        return distance(this, other);
    }

    isCollidingWith(
        other: PointType,
        collisionDistance: number
    ): ReturnType<typeof collision> {
        return collision(this, other, collisionDistance);
    }

    isCollidingWithAny(
        points: PointType[],
        collisionDistance: number
    ): ReturnType<typeof collisionInArray> {
        return collisionInArray(this, points, collisionDistance);
    }

    middleTo(other: PointType): Point {
        const mid = middle(this, other);
        return new Point(mid.x, mid.y);
    }

    angleTo(other: PointType): ReturnType<typeof angle> {
        return angle(this, other);
    }

    move(x: number, y: number): Point {
        const moved = move(this, x, y);
        return new Point(moved.x, moved.y);
    }

    lerp(other: PointType, t: number): Point {
        const p = lerpFn(this, other, t);
        return new Point(p.x, p.y);
    }

    rotateAround(center: PointType, angleRad: number): Point {
        const pts = rotateFn(center, [this], angleRad);
        return new Point(pts[0].x, pts[0].y);
    }

    nearestFromPoints(points: PointType[]): Point | null {
        const near = nearest(this, points);
        return near ? new Point(near.x, near.y) : null;
    }

    farestFromPoints(points: PointType[]): Point | null {
        const far = farest(this, points);
        return far ? new Point(far.x, far.y) : null;
    }

    isInLine(line: Line): ReturnType<typeof inLine> {
        return inLine(this, line);
    }

    buildLineWith(point: PointType): ReturnType<typeof getLine> {
        return getLine(this, point);
    }
}

export default Point;
