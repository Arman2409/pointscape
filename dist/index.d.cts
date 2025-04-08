interface Point$1 {
    x: number;
    y: number;
}
type Coordinate = 'x' | "y";
type Direction = "left" | "right" | "up" | "down";
interface Bounds {
    min: number;
    max: number;
}
interface Line {
    start: Point$1;
    end: Point$1;
}

declare const distance: (point1: Point$1, point2: Point$1) => number;

declare const collision: (point1: Point$1, point2: Point$1, collisionDistance: number, callback?: Function) => boolean;

declare const middle: (point1: Point$1, point2: Point$1) => Point$1;

declare const pointWithoutCollision: (xBounds: Bounds, yBounds: Bounds, distanceBetweenPoints: number, others: Point$1[], currentTryCount?: number) => Point$1 | string;

declare const collisionInArray: (initialPoint: Point$1, arr: Point$1[], radius: number) => Point$1[];

declare const angle: (point1: Point$1, point2: Point$1) => number;

declare const randomPoints: (xBounds: Bounds, yBounds: Bounds, quantity: number) => Point$1[];

declare const area: (points: Point$1[]) => number;

declare const randomPointInDistance: (point: Point$1, distance: number) => Point$1;

declare const nearest: (initialPoint: Point$1, points: Point$1[]) => Point$1;

declare const perimeter: (points: Point$1[]) => number;

declare const positionInCircle: (centerPoint: Point$1, radius: number, angleInRadians: number) => Point$1;

declare const possibleConnections: (pointsCount: number) => number;

declare const circleArea: (radius: number) => number;

declare const center: (points: Point$1[]) => Point$1;

declare const farest: (initialPoint: Point$1, points: Point$1[]) => Point$1 | null;

declare const randomPoint: (xBounds?: Bounds, yBounds?: Bounds) => Point$1;

declare const move: (initialPoint: Point$1, xStep: number, yStep: number) => Point$1;

declare const scale: (scaleFactorX: number, scaleFactorY: number, points: Point$1[]) => {
    x: number;
    y: number;
}[];

declare const inLine: (point: Point$1, line: Line) => boolean;

declare const getLine: (point1: Point$1, point2: Point$1) => Line;

declare const cross: (line1: Line, line2: Line) => boolean;

declare const rotate: (centerPoint: Point$1, points: Point$1[], angleInRadians: number) => {
    x: number;
    y: number;
}[];

declare const sort: (points: Point$1[], coordinate?: Coordinate) => Point$1[];

declare const square: (initialPoint: Point$1, size: number, direction?: Direction) => Point$1[];

declare const rectangle: (initialPoint: Point$1, width: number, height: number, direction?: Direction) => Point$1[];

declare const triangle: (initialPoint: Point$1, size: number, direction?: Direction) => Point$1[];

declare const pentagon: (centerPoint: Point$1, radius: number, angle?: number) => {
    x: number;
    y: number;
}[];

declare const inRange: (number: number, minLimit: number, maxLimit: number) => boolean;

declare const roundToPrecision: (number: number, precision: number) => number;

declare const degreesToRadians: (degrees: number) => number;

declare const radiansToDegrees: (radians: number) => number;

declare const average: (numbers: number[]) => number;

declare const uniqueId: (others?: string[]) => string;

declare const randomBoolean: () => boolean;

declare const randomNumber: (min: number, max: number) => number;

declare const intersection: (arr1: unknown[], arr2: unknown[]) => unknown[];

declare const difference: (arr1: unknown[], arr2: unknown[]) => unknown[];

declare const chunk: (array: unknown[], perChunk: number) => unknown[][];

declare const removeDuplicates: (arr: unknown[]) => unknown[];

declare const sample: (arr: unknown[], size?: number) => unknown;

declare class Point implements Point$1 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    distanceTo(other: Point): ReturnType<typeof distance>;
    isCollidingWith(other: Point, collisionDistance: number): ReturnType<typeof collision>;
    isCollidingWithAny(points: Point[], collisionDistance: number): ReturnType<typeof collisionInArray>;
    middleTo(other: Point): ReturnType<typeof middle>;
    angleTo(other: Point): ReturnType<typeof angle>;
    move(x: number, y: number): ReturnType<typeof move>;
    nearestFromPoints(points: Point[]): ReturnType<typeof move>;
    farestFromPoints(points: Point[]): ReturnType<typeof farest>;
    isInLine(line: Line): ReturnType<typeof inLine>;
    buildLineWith(point: Point): ReturnType<typeof getLine>;
}

declare const _default: {
    Point: typeof Point;
    distance: (point1: Point$1, point2: Point$1) => number;
    middle: (point1: Point$1, point2: Point$1) => Point$1;
    collision: (point1: Point$1, point2: Point$1, collisionDistance: number, callback?: Function) => boolean;
    pointWithoutCollision: (xBounds: Bounds, yBounds: Bounds, distanceBetweenPoints: number, others: Point$1[], currentTryCount?: number) => Point$1 | string;
    collisionInArray: (initialPoint: Point$1, arr: Point$1[], radius: number) => Point$1[];
    angle: (point1: Point$1, point2: Point$1) => number;
    randomPoint: (xBounds?: Bounds, yBounds?: Bounds) => Point$1;
    randomPoints: (xBounds: Bounds, yBounds: Bounds, quantity: number) => Point$1[];
    area: (points: Point$1[]) => number;
    circleArea: (radius: number) => number;
    randomPointInDistance: (point: Point$1, distance: number) => Point$1;
    nearest: (initialPoint: Point$1, points: Point$1[]) => Point$1;
    farest: (initialPoint: Point$1, points: Point$1[]) => Point$1 | null;
    perimeter: (points: Point$1[]) => number;
    positionInCircle: (centerPoint: Point$1, radius: number, angleInRadians: number) => Point$1;
    possibleConnections: (pointsCount: number) => number;
    center: (points: Point$1[]) => Point$1;
    inLine: (point: Point$1, line: Line) => boolean;
    getLine: (point1: Point$1, point2: Point$1) => Line;
    rotate: (centerPoint: Point$1, points: Point$1[], angleInRadians: number) => {
        x: number;
        y: number;
    }[];
    sort: (points: Point$1[], coordinate?: Coordinate) => Point$1[];
    move: (initialPoint: Point$1, xStep: number, yStep: number) => Point$1;
    scale: (scaleFactorX: number, scaleFactorY: number, points: Point$1[]) => {
        x: number;
        y: number;
    }[];
    cross: (line1: Line, line2: Line) => boolean;
    square: (initialPoint: Point$1, size: number, direction?: Direction) => Point$1[];
    rectangle: (initialPoint: Point$1, width: number, height: number, direction?: Direction) => Point$1[];
    triangle: (initialPoint: Point$1, size: number, direction?: Direction) => Point$1[];
    pentagon: (centerPoint: Point$1, radius: number, angle?: number) => {
        x: number;
        y: number;
    }[];
    uniqueId: (others?: string[]) => string;
    randomNumber: (min: number, max: number) => number;
    randomBoolean: () => boolean;
    average: (numbers: number[]) => number;
    inRange: (number: number, minLimit: number, maxLimit: number) => boolean;
    degreesToRadians: (degrees: number) => number;
    radiansToDegrees: (radians: number) => number;
    roundToPrecision: (number: number, precision: number) => number;
    intersection: (arr1: unknown[], arr2: unknown[]) => unknown[];
    difference: (arr1: unknown[], arr2: unknown[]) => unknown[];
    chunk: (array: unknown[], perChunk: number) => unknown[][];
    removeDuplicates: (arr: unknown[]) => unknown[];
    sample: (arr: unknown[], size?: number) => unknown;
};

export { type Bounds, type Coordinate, type Direction, type Line, Point, Point as PointType, angle, area, average, center, chunk, circleArea, collision, collisionInArray, cross, _default as default, degreesToRadians, difference, distance, farest, getLine, inLine, inRange, intersection, middle, move, nearest, pentagon, perimeter, pointWithoutCollision, positionInCircle, possibleConnections, radiansToDegrees, randomBoolean, randomNumber, randomPoint, randomPointInDistance, randomPoints, rectangle, removeDuplicates, rotate, roundToPrecision, sample, scale, sort, square, triangle, uniqueId };
