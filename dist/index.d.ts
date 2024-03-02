interface Point {
    x: number;
    y: number;
}
type Direction = "left" | "right" | "up" | "down";

declare const distance: (x1: number, y1: number, x2: number, y2: number) => number;

declare const collision: (x1: number, y1: number, x2: number, y2: number, collisionDistance: number, callback?: Function) => boolean;

declare const middle: (x1: number, y1: number, x2: number, y2: number) => Point;

declare const pointWithoutCollision: (minX: number, maxX: number, minY: number, maxY: number, distance: number, others: Point[]) => Point;

declare const collisionInArray: (x: number, y: number, radius: number, arr: Point[]) => Point[];

declare const angle: (startX: number, startY: number, endX: number, endY: number) => number;

declare const randomPoints: (xLimitsMin: number, xLimitsMax: number, yLimitsMin: number, yLimitsMax: number, count: number) => Point[];

declare const area: (points: Point[]) => number;

declare const randomPointInDistance: (x: number, y: number, distance: number) => Point;

declare const nearest: (x: number, y: number, points: Point[]) => Point;

declare const perimeter: (points: Point[]) => number;

declare const positionInCircle: (centerX: number, centerY: number, radius: number, angleInRadians: number) => Point;

declare const possibleConnections: (pointsCount: number) => number;

declare const circleArea: (radius: number) => number;

declare const center: (points: Point[]) => Point;

declare const farest: (x: number, y: number, points: Point[]) => Point | null;

declare const randomPoint: (xMin?: number, xMax?: number, yMin?: number, yMax?: number) => Point;

declare const move: (x: number, y: number, xStep: number, yStep: number, count: number) => Point[];

declare const scale: (scaleFactorX: number, scaleFactorY: number, points: Point[]) => {
    x: number;
    y: number;
}[];

declare const inLine: (x: number, y: number, point1: Point, point2: Point) => boolean;

declare const cross: (line1Start: Point, line1End: Point, line2Start: Point, line2End: Point) => boolean;

declare const rotate: (centerX: number, centerY: number, points: Point[], angleInRadians: number) => {
    x: number;
    y: number;
}[];

declare const square: (x: number, y: number, size: number, direction?: Direction) => Point[];

declare const rectangle: (x: number, y: number, width: number, height: number, direction?: Direction) => Point[];

declare const triangle: (x: number, y: number, size: number, direction?: Direction) => Point[];

declare const pentagon: (centerX: number, centerY: number, radius: number, angle?: number) => {
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

declare const _default: {
    distance: (x1: number, y1: number, x2: number, y2: number) => number;
    middle: (x1: number, y1: number, x2: number, y2: number) => Point;
    collision: (x1: number, y1: number, x2: number, y2: number, collisionDistance: number, callback?: Function | undefined) => boolean;
    pointWithoutCollision: (minX: number, maxX: number, minY: number, maxY: number, distance: number, others: Point[]) => Point;
    collisionInArray: (x: number, y: number, radius: number, arr: Point[]) => Point[];
    angle: (startX: number, startY: number, endX: number, endY: number) => number;
    randomPoint: (xMin?: number | undefined, xMax?: number | undefined, yMin?: number | undefined, yMax?: number | undefined) => Point;
    randomPoints: (xLimitsMin: number, xLimitsMax: number, yLimitsMin: number, yLimitsMax: number, count: number) => Point[];
    area: (points: Point[]) => number;
    circleArea: (radius: number) => number;
    randomPointInDistance: (x: number, y: number, distance: number) => Point;
    nearest: (x: number, y: number, points: Point[]) => Point;
    farest: (x: number, y: number, points: Point[]) => Point | null;
    perimeter: (points: Point[]) => number;
    positionInCircle: (centerX: number, centerY: number, radius: number, angleInRadians: number) => Point;
    possibleConnections: (pointsCount: number) => number;
    center: (points: Point[]) => Point;
    inLine: (x: number, y: number, point1: Point, point2: Point) => boolean;
    rotate: (centerX: number, centerY: number, points: Point[], angleInRadians: number) => {
        x: number;
        y: number;
    }[];
    move: (x: number, y: number, xStep: number, yStep: number, count: number) => Point[];
    scale: (scaleFactorX: number, scaleFactorY: number, points: Point[]) => {
        x: number;
        y: number;
    }[];
    cross: (line1Start: Point, line1End: Point, line2Start: Point, line2End: Point) => boolean;
    square: (x: number, y: number, size: number, direction?: Direction) => Point[];
    rectangle: (x: number, y: number, width: number, height: number, direction?: Direction) => Point[];
    triangle: (x: number, y: number, size: number, direction?: Direction) => Point[];
    pentagon: (centerX: number, centerY: number, radius: number, angle?: number) => {
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
};

export { type Direction, type Point, angle, area, average, center, chunk, circleArea, collision, collisionInArray, cross, _default as default, degreesToRadians, difference, distance, farest, inLine, inRange, intersection, middle, move, nearest, pentagon, perimeter, pointWithoutCollision, positionInCircle, possibleConnections, radiansToDegrees, randomBoolean, randomNumber, randomPoint, randomPointInDistance, randomPoints, rectangle, rotate, roundToPrecision, scale, square, triangle, uniqueId };
