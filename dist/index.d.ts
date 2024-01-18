type Quarter = 1 | 2 | 3 | 4;
interface Point {
    x: number;
    y: number;
}

declare const distance: (x1: number, y1: number, x2: number, y2: number) => number;

declare const collision: (x1: number, y1: number, x2: number, y2: number, collisionDistance: number, callback?: Function) => boolean;

declare const getMiddlePoint: (x1: number, y1: number, x2: number, y2: number) => {
    x: number;
    y: number;
};

declare const pointWithoutCollision: (minX: number, maxX: number, minY: number, maxY: number, distance: number, others: Point[]) => Point;

declare const collisionInArray: (x: number, y: number, radius: number, arr: Point[], callback?: Function, repeated?: number) => Point | false;

declare const angle: (startX: number, startY: number, endX: number, endY: number) => number;

declare const randomPoints: (xLimitsMin: number, xLimitsMax: number, yLimitsMin: number, yLimitsMax: number, count: number) => Point[];

declare const area: (points: Point[]) => number;

declare const randomPointInDistance: (x: number, y: number, distance: number) => Point;

declare const nearest: (x: number, y: number, points: Point[]) => Point | null;

declare const perimeter: (points: Point[]) => number;

declare const positionInCircle: (centerX: number, centerY: number, radius: number, angleInRadians: number) => Point;

declare const possibleConnections: (pointsCount: number) => number;

declare const circleArea: (radius: number) => number;

declare const center: (points: Point[]) => Point;

declare const farest: (x: number, y: number, points: Point[]) => Point | null;

declare const randomPoint: (xMin?: number, xMax?: number, yMin?: number, yMax?: number) => Point;

declare const inRange: (number: number, minLimit: number, maxLimit: number) => boolean;

declare const roundToPrecision: (number: number, precision: number) => number;

declare const degreesToRadians: (degrees: number) => number;

declare const radiansToDegrees: (radians: number) => number;

declare const uniqueId: (others?: string[]) => string;

declare const randomBoolean: () => boolean;

declare const randomNumber: (min: number, max: number) => number;

declare const intersection: (arr1: any[], arr2: any[]) => any[];

declare const difference: (arr1: any[], arr2: any[]) => any[];

declare const _default: {
    uniqueId: (others?: string[] | undefined) => string;
    distance: (x1: number, y1: number, x2: number, y2: number) => number;
    middlePoint: (x1: number, y1: number, x2: number, y2: number) => {
        x: number;
        y: number;
    };
    collision: (x1: number, y1: number, x2: number, y2: number, collisionDistance: number, callback?: Function | undefined) => boolean;
    pointWithoutCollision: (minX: number, maxX: number, minY: number, maxY: number, distance: number, others: Point[]) => Point;
    collisionInArray: (x: number, y: number, radius: number, arr: Point[], callback?: Function | undefined, repeated?: number | undefined) => false | Point;
    angle: (startX: number, startY: number, endX: number, endY: number) => number;
    inRange: (number: number, minLimit: number, maxLimit: number) => boolean;
    randomBoolean: () => boolean;
    randomPoint: (xMin?: number | undefined, xMax?: number | undefined, yMin?: number | undefined, yMax?: number | undefined) => Point;
    randomNumber: (min: number, max: number) => number;
    randomPoints: (xLimitsMin: number, xLimitsMax: number, yLimitsMin: number, yLimitsMax: number, count: number) => Point[];
    area: (points: Point[]) => number;
    circleArea: (radius: number) => number;
    randomPointInDistance: (x: number, y: number, distance: number) => Point;
    roundToPrecision: (number: number, precision: number) => number;
    nearest: (x: number, y: number, points: Point[]) => Point | null;
    farest: (x: number, y: number, points: Point[]) => Point | null;
    degreesToRadians: (degrees: number) => number;
    radiansToDegrees: (radians: number) => number;
    perimeter: (points: Point[]) => number;
    positionInCircle: (centerX: number, centerY: number, radius: number, angleInRadians: number) => Point;
    possibleConnections: (pointsCount: number) => number;
    center: (points: Point[]) => Point;
    intersection: (arr1: any[], arr2: any[]) => any[];
    difference: (arr1: any[], arr2: any[]) => any[];
};

export { type Point, type Quarter, angle, area, center, circleArea, collision, collisionInArray, _default as default, degreesToRadians, difference, distance, farest, inRange, intersection, getMiddlePoint as middlePoint, nearest, perimeter, pointWithoutCollision, positionInCircle, possibleConnections, radiansToDegrees, randomBoolean, randomNumber, randomPoint, randomPointInDistance, randomPoints, roundToPrecision, uniqueId };
