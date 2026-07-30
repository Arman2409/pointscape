// points
import distance from "./src/core/points/distance";
import collision from "./src/core/points/collision";
import middle from "./src/core/points/middle";
import pointWithoutCollision from "./src/core/points/pointWithoutCollision";
import collisionInArray from "./src/core/points/collisionInArray";
import angle from "./src/core/points/angle";
import randomPoints from "./src/core/points/randomPoints";
import area from "./src/core/points/area";
import triangleArea from "./src/core/points/triangleArea";
import randomPointInDistance from "./src/core/points/randomPointInDistance";
import nearest from "./src/core/points/nearest";
import perimeter from "./src/core/points/perimeter";
import positionInCircle from "./src/core/points/positionInCircle";
import possibleConnections from "./src/core/points/possibleConnections";
import circleArea from "./src/core/points/circleArea";
import center from "./src/core/points/center";
import farthest from "./src/core/points/farthest";
import randomPoint from "./src/core/points/randomPoint";
import move from "./src/core/points/move";
import scale from "./src/core/points/scale";
import inLine from "./src/core/points/inLine";
import getLine from "./src/core/points/getLine";
import cross from "./src/core/points/cross";
import rotate from "./src/core/points/rotate";
import sort from "./src/core/points/sort";
import square from "./src/core/points/square";
import rectangle from "./src/core/points/rectangle";
import triangle from "./src/core/points/triangle";
import pentagon from "./src/core/points/pentagon";
import lerp from "./src/core/points/lerp";

// math
import inRange from "./src/core/math/inRange";
import roundToPrecision from "./src/core/math/roundToPrecision";
import degreesToRadians from "./src/core/math/degreesToRadians";
import radiansToDegrees from "./src/core/math/radiansToDegrees";
import average from "./src/core/math/average";

// randomization
import uniqueId from "./src/core/randomization/uniqueId";
import randomBoolean from "./src/core/randomization/randomBoolean";
import randomNumber from "./src/core/randomization/randomNumber";

// arrays
import intersection from "./src/core/arrays/intersection";
import difference from "./src/core/arrays/difference";
import chunk from "./src/core/arrays/chunk";
import removeDuplicates from "./src/core/arrays/removeDuplicates";
import sample from "./src/core/arrays/sample";

// utils
import Point from "./src/classes/Point";

// types
export type { Point as PointType }; // ✅ class instance type
export type { Coordinate, Direction, Line, Bounds } from "./src/types/global";

// named exports
export {
    // points
    Point,
    distance,
    middle,
    collision,
    pointWithoutCollision,
    collisionInArray,
    angle,
    randomPoint,
    randomPoints,
    area,
    triangleArea,
    circleArea,
    randomPointInDistance,
    nearest,
    farthest,
    perimeter,
    positionInCircle,
    possibleConnections,
    center,
    inLine,
    getLine,
    rotate,
    sort,
    move,
    scale,
    cross,
    square,
    rectangle,
    triangle,
    pentagon,
    lerp,

    // randomization
    uniqueId,
    randomNumber,
    randomBoolean,

    // math
    average,
    inRange,
    degreesToRadians,
    radiansToDegrees,
    roundToPrecision,

    // arrays
    intersection,
    difference,
    chunk,
    removeDuplicates,
    sample,
};

// default export
export default {
    // points
    Point,
    distance,
    middle,
    collision,
    pointWithoutCollision,
    collisionInArray,
    angle,
    randomPoint,
    randomPoints,
    area,
    triangleArea,
    circleArea,
    randomPointInDistance,
    nearest,
    farthest,
    perimeter,
    positionInCircle,
    possibleConnections,
    center,
    inLine,
    getLine,
    rotate,
    sort,
    move,
    scale,
    cross,
    square,
    rectangle,
    triangle,
    pentagon,
    lerp,

    // randomization
    uniqueId,
    randomNumber,
    randomBoolean,

    // math
    average,
    inRange,
    degreesToRadians,
    radiansToDegrees,
    roundToPrecision,

    // arrays
    intersection,
    difference,
    chunk,
    removeDuplicates,
    sample,
};
