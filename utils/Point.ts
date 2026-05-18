import distance from '../core/points/distance';
import collision from '../core/points/collision';
import middle from '../core/points/middle';
import angle from '../core/points/angle';
import move from '../core/points/move';
import farest from '../core/points/farest';
import nearest from '../core/points/nearest';
import collisionInArray from '../core/points/collisionInArray';
import inLine from '../core/points/inLine';
import getLine from '../core/points/getLine';
import type { Line, Point as PointType } from '../types/global';

export class Point implements PointType {
    constructor(public x: number, public y: number) { }

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

    middleTo(other: PointType): ReturnType<typeof middle> {
        const mid = middle(this, other);
        return new Point(mid.x, mid.y);
    }

    angleTo(other: PointType): ReturnType<typeof angle> {
        return angle(this, other);
    }

    move(
        x: number, 
        y: number
    ): ReturnType<typeof move> {
        return move(this, x, y);
    }

    nearestFromPoints(points: PointType[]): ReturnType<typeof nearest> {
        return nearest(this, points);
    }

    farestFromPoints(points: PointType[]): ReturnType<typeof farest> {
        return farest(this, points);
    }

    isInLine(line: Line): ReturnType<typeof inLine> {
        return inLine(this, line);
    }

    buildLineWith(point: PointType): ReturnType<typeof getLine> {
        return getLine(this, point);
    }
}

export default Point;