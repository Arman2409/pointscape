type Coordinate = 'x' | "y" | undefined;
type Direction = "left" | "right" | "up" | "down";
interface Point {
    x: number;
    y: number;
}

declare const distance: (point1: Point, point2: Point) => number;

declare const collision: (point1: Point, point2: Point, collisionDistance: number, callback?: Function) => boolean;

declare const middle: (point1: Point, point2: Point) => Point;

declare const pointWithoutCollision: (minX: number, maxX: number, minY: number, maxY: number, distanceBetweenPoints: number, others: Point[]) => Point;

declare const collisionInArray: (initialPoint: Point, arr: Point[], radius: number) => Point[];

declare const angle: (point1: Point, point2: Point) => number;

declare const randomPoints: (count: number, xLimitsMin?: number, xLimitsMax?: number, yLimitsMin?: number, yLimitsMax?: number) => Point[];

declare const area: (points: Point[]) => number;

declare const randomPointInDistance: (point: Point, distance: number) => Point;

declare const nearest: (initialPoint: Point, points: Point[]) => Point;

declare const perimeter: (points: Point[]) => number;

declare const positionInCircle: (centerPoint: Point, radius: number, angleInRadians: number) => Point;

declare const possibleConnections: (pointsCount: number) => number;

declare const circleArea: (radius: number) => number;

declare const center: (points: Point[]) => Point;

declare const farest: (initialPoint: Point, points: Point[]) => Point | null;

declare const randomPoint: (xMin?: number, xMax?: number, yMin?: number, yMax?: number) => Point;

declare const move: (initialPoint: Point, xStep: number, yStep: number, count: number) => Point[];

declare const scale: (scaleFactorX: number, scaleFactorY: number, points: Point[]) => {
    x: number;
    y: number;
}[];

declare const inLine: (points: Point[]) => boolean;

declare const cross: (line1Start: Point, line1End: Point, line2Start: Point, line2End: Point) => boolean;

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

declare const intersection: (arr1: any[], arr2: any[]) => any[];

declare const difference: (arr1: any[], arr2: any[]) => any[];

declare const chunk: (array: any[], perChunk: number) => any[][];

declare const removeDuplicates: (arr: any[]) => any[];

declare const sample: (arr: any[], size?: number) => any;

declare const _default: {
    distance: (point1: Point, point2: Point) => number;
    middle: (point1: Point, point2: Point) => Point;
    collision: (point1: Point, point2: Point, collisionDistance: number, callback?: Function | undefined) => boolean;
    pointWithoutCollision: (minX: number, maxX: number, minY: number, maxY: number, distanceBetweenPoints: number, others: Point[]) => Point;
    collisionInArray: (initialPoint: Point, arr: Point[], radius: number) => Point[];
    angle: (point1: Point, point2: Point) => number;
    randomPoint: (xMin?: number | undefined, xMax?: number | undefined, yMin?: number | undefined, yMax?: number | undefined) => Point;
    randomPoints: (count: number, xLimitsMin?: number, xLimitsMax?: number, yLimitsMin?: number, yLimitsMax?: number) => Point[];
    area: (points: Point[]) => number;
    circleArea: (radius: number) => number;
    randomPointInDistance: (point: Point, distance: number) => Point;
    nearest: (initialPoint: Point, points: Point[]) => Point;
    farest: (initialPoint: Point, points: Point[]) => Point | null;
    perimeter: (points: Point[]) => number;
    positionInCircle: (centerPoint: Point, radius: number, angleInRadians: number) => Point;
    possibleConnections: (pointsCount: number) => number;
    center: (points: Point[]) => Point;
    inLine: (points: Point[]) => boolean;
    rotate: (centerPoint: Point, points: Point[], angleInRadians: number) => {
        x: number;
        y: number;
    }[];
    sort: (points: Point[], coordinate?: Coordinate) => Point[];
    move: (initialPoint: Point, xStep: number, yStep: number, count: number) => Point[];
    scale: (scaleFactorX: number, scaleFactorY: number, points: Point[]) => {
        x: number;
        y: number;
    }[];
    cross: (line1Start: Point, line1End: Point, line2Start: Point, line2End: Point) => boolean;
    square: (initialPoint: Point, size: number, direction?: Direction) => Point[];
    rectangle: (initialPoint: Point, width: number, height: number, direction?: Direction) => Point[];
    triangle: (initialPoint: Point, size: number, direction?: Direction) => Point[];
    pentagon: (centerPoint: Point, radius: number, angle?: number) => {
        x: number;
        y: number;
    }[];
    uniqueId: (others?: string[] | undefined) => string;
    randomNumber: (min: number, max: number) => number;
    randomBoolean: () => boolean;
    average: (numbers: number[]) => number;
    inRange: (number: number, minLimit: number, maxLimit: number) => boolean;
    degreesToRadians: (degrees: number) => number;
    radiansToDegrees: (radians: number) => number;
    roundToPrecision: (number: number, precision: number) => number;
    intersection: (arr1: any[], arr2: any[]) => any[];
    difference: (arr1: any[], arr2: any[]) => any[];
    chunk: (array: any[], perChunk: number) => any[][];
    removeDuplicates: (arr: any[]) => any[];
    sample: (arr: any[], size?: number) => any;
};

export { type Direction, type Point, angle, area, average, center, chunk, circleArea, collision, collisionInArray, cross, _default as default, degreesToRadians, difference, distance, farest, inLine, inRange, intersection, middle, move, nearest, pentagon, perimeter, pointWithoutCollision, positionInCircle, possibleConnections, radiansToDegrees, randomBoolean, randomNumber, randomPoint, randomPointInDistance, randomPoints, rectangle, removeDuplicates, rotate, roundToPrecision, sample, scale, sort, square, triangle, uniqueId };
