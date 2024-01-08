declare const generateUniqueId: (others: any[]) => string;

declare const calculateDistance: (x1: number, y1: number, x2: number, y2: number) => number;

interface Point {
    x: number;
    y: number;
}

declare const generatePointWithoutCollisions: (others: Point[], width: number, height: number, distance: number) => Point;

declare const getMiddlePoint: (x1: number, y1: number, x2: number, y2: number) => {
    x: number;
    y: number;
};

declare const getRandomBoolean: () => boolean;

declare const checkForCollision: (x1: number, y1: number, x2: number, y2: number, collisionDistance: number, callback: Function) => void;

declare const getAngle: (startX: number, startY: number, endX: number, endY: number) => number;

declare const checkForCollisionInArray: (x: number, y: number, radius: number, arr: Point[], callback?: Function, repeated?: number) => Point | false;

export { calculateDistance, checkForCollision, checkForCollisionInArray, generatePointWithoutCollisions, generateUniqueId, getAngle, getMiddlePoint, getRandomBoolean };
