declare const uniqueId: (others?: string[]) => string;

interface Point {
    x: number;
    y: number;
}

declare const pointWithoutCollision: (minX: number, maxX: number, minY: number, maxY: number, distance: number, others: Point[]) => Point;

declare const distance: (x1: number, y1: number, x2: number, y2: number) => number;

declare const getMiddlePoint: (x1: number, y1: number, x2: number, y2: number) => {
    x: number;
    y: number;
};

declare const collision: (x1: number, y1: number, x2: number, y2: number, collisionDistance: number, callback?: Function) => boolean;

declare const collisionInArray: (x: number, y: number, radius: number, arr: Point[], callback?: Function, repeated?: number) => Point | false;

declare const angle: (startX: number, startY: number, endX: number, endY: number) => number;

declare const inRange: (number: number, minLimit: number, maxLimit: number) => boolean;

declare const randomBoolean: () => boolean;

declare const randomPoint: (xMin?: number, xMax?: number, yMin?: number, yMax?: number) => Point;

declare const randomNumber: (min: number, max: number) => number;

declare const randomPoints: (xLimitsMin: number, xLimitsMax: number, yLimitsMin: number, yLimitsMax: number, count: number) => Point[];

export { angle, collision, collisionInArray, distance, pointWithoutCollision as generatePointWithoutCollisions, inRange, getMiddlePoint as middlePoint, pointWithoutCollision, randomBoolean, randomNumber, randomPoint, randomPoints, uniqueId };
