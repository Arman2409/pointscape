declare const distance: (point1: Point, point2: Point) => number;

declare const collision: (point1: Point, point2: Point, collisionDistance: number, callback?: Function) => boolean;

declare const middle: (point1: Point, point2: Point) => Point;

declare const angle: (point1: Point, point2: Point) => number;

declare const move: (initialPoint: Point, xStep: number, yStep: number) => Point;

declare const farest: (initialPoint: Point, points: Point[]) => Point | null;

declare const collisionInArray: (initialPoint: Point, arr: Point[], radius: number) => Point[];

declare const inLine: (point: Point, line: Line) => boolean;

declare const getLine: (point1: Point, point2: Point) => Line;

declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    distanceTo?(other: Point): ReturnType<typeof distance>;
    isCollidingWith?(other: Point, collisionDistance: number): ReturnType<typeof collision>;
    isCollidingWithAny?(points: Point[], collisionDistance: number): ReturnType<typeof collisionInArray>;
    middleTo?(other: Point): ReturnType<typeof middle>;
    angleTo?(other: Point): ReturnType<typeof angle>;
    move?(x: number, y: number): ReturnType<typeof move>;
    nearestFromPoints?(points: Point[]): ReturnType<typeof move>;
    farestFromPoints?(points: Point[]): ReturnType<typeof farest>;
    isInLine?(line: Line): ReturnType<typeof inLine>;
    buildLineWith?(point: Point): ReturnType<typeof getLine>;
}

type Coordinate = 'x' | "y";
type Direction = "left" | "right" | "up" | "down";
interface Bounds {
    min: number;
    max: number;
}
interface Line {
    start: Point;
    end: Point;
}

declare const pointWithoutCollision: (xBounds: Bounds, yBounds: Bounds, distanceBetweenPoints: number, others: Point[], currentTryCount?: number) => Point | string;

declare const randomPoints: (xBounds: Bounds, yBounds: Bounds, quantity: number) => Point[];

declare const area: (points: Point[]) => number;

declare const randomPointInDistance: (point: Point, distance: number) => Point;

declare const nearest: (initialPoint: Point, points: Point[]) => Point;

declare const perimeter: (points: Point[]) => number;

declare const positionInCircle: (centerPoint: Point, radius: number, angleInRadians: number) => Point;

declare const possibleConnections: (pointsCount: number) => number;

declare const circleArea: (radius: number) => number;

declare const center: (points: Point[]) => Point;

declare const randomPoint: (xBounds?: Bounds, yBounds?: Bounds) => Point;

declare const scale: (scaleFactorX: number, scaleFactorY: number, points: Point[]) => {
    x: number;
    y: number;
}[];

declare const cross: (line1: Line, line2: Line) => boolean;

declare const rotate: (centerPoint: Point, points: Point[], angleInRadians: number) => {
    x: number;
    y: number;
}[];

declare const sort: (points: Point[], coordinate?: Coordinate) => Point[];

declare const square: (initialPoint: Point, size: number, direction?: Direction) => Point[];

declare const rectangle: (initialPoint: Point, width: number, height: number, direction?: Direction) => Point[];

declare const triangle: (initialPoint: Point, size: number, direction?: Direction) => Point[];

declare const pentagon: (centerPoint: Point, radius: number, angle?: number) => {
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

declare const _default: {
    Point: typeof Point;
    distance: (point1: Point, point2: Point) => number;
    middle: (point1: Point, point2: Point) => Point;
    collision: (point1: Point, point2: Point, collisionDistance: number, callback?: Function) => boolean;
    pointWithoutCollision: (xBounds: Bounds, yBounds: Bounds, distanceBetweenPoints: number, others: Point[], currentTryCount?: number) => Point | string;
    collisionInArray: (initialPoint: Point, arr: Point[], radius: number) => Point[];
    angle: (point1: Point, point2: Point) => number;
    randomPoint: (xBounds?: Bounds, yBounds?: Bounds) => Point;
    randomPoints: (xBounds: Bounds, yBounds: Bounds, quantity: number) => Point[];
    area: (points: Point[]) => number;
    circleArea: (radius: number) => number;
    randomPointInDistance: (point: Point, distance: number) => Point;
    nearest: (initialPoint: Point, points: Point[]) => Point;
    farest: (initialPoint: Point, points: Point[]) => Point | null;
    perimeter: (points: Point[]) => number;
    positionInCircle: (centerPoint: Point, radius: number, angleInRadians: number) => Point;
    possibleConnections: (pointsCount: number) => number;
    center: (points: Point[]) => Point;
    inLine: (point: Point, line: Line) => boolean;
    getLine: (point1: Point, point2: Point) => Line;
    rotate: (centerPoint: Point, points: Point[], angleInRadians: number) => {
        x: number;
        y: number;
    }[];
    sort: (points: Point[], coordinate?: Coordinate) => Point[];
    move: (initialPoint: Point, xStep: number, yStep: number) => Point;
    scale: (scaleFactorX: number, scaleFactorY: number, points: Point[]) => {
        x: number;
        y: number;
    }[];
    cross: (line1: Line, line2: Line) => boolean;
    square: (initialPoint: Point, size: number, direction?: Direction) => Point[];
    rectangle: (initialPoint: Point, width: number, height: number, direction?: Direction) => Point[];
    triangle: (initialPoint: Point, size: number, direction?: Direction) => Point[];
    pentagon: (centerPoint: Point, radius: number, angle?: number) => {
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
