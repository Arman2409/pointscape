// points 
import distance from "./core/points/distance";
import collision from "./core/points/collision";
import middlePoint from "./core/points/middlePoint";
import pointWithoutCollision from "./core/points/pointWithoutCollision";
import collisionInArray from "./core/points/collisionInArray";
import angle from "./core/points/angle";
import randomPoints from "./core/points/randomPoints";
import area from "./core/points/area";
import randomPointInDistance from "./core/points/randomPointInDistance";
import nearest from "./core/points/nearest";
import perimeter from "./core/points/perimeter";
import positionInCircle from "./core/points/positionInCircle";
import possibleConnections from "./core/points/possibleConnections";
import circleArea from "./core/points/circleArea";
import center from "./core/points/center";
import farest from "./core/points/farest";
import randomPoint from "./core/points/randomPoint";

// math 
import inRange from "./core/math/inRange";
import roundToPrecision from "./core/math/roundToPrecision";
import degreesToRadians from "./core/math/degreesToRadians";
import radiansToDegrees from "./core/math/radiansToDegrees";

// randomization 
import uniqueId from "./core/randomization/uniqueId";
import randomBoolean from "./core/randomization/randomBoolean";
import randomNumber from "./core/randomization/randomNumber";

// arrays 
import intersection from "./core/arrays/intersection";
import difference from "./core/arrays/difference";

// types 
export type {Point} from "./types/globals";
export type {Quarter} from "./types/globals";

// named exports 
export {
    uniqueId,
    distance,
    middlePoint,
    collision,
    pointWithoutCollision,
    collisionInArray,
    angle,
    inRange,
    randomBoolean,
    randomPoint,
    randomNumber,
    randomPoints,
    area,
    circleArea,
    randomPointInDistance,
    roundToPrecision,
    nearest,
    farest,
    degreesToRadians,
    radiansToDegrees,
    perimeter,
    positionInCircle,
    possibleConnections,
    center,
    intersection,
    difference
}

// default export 
export default {
    uniqueId,
    distance,
    middlePoint,
    collision,
    pointWithoutCollision,
    collisionInArray,
    angle,
    inRange,
    randomBoolean,
    randomPoint,
    randomNumber,
    randomPoints,
    area,
    circleArea,
    randomPointInDistance,
    roundToPrecision,
    nearest,
    farest,
    degreesToRadians,
    radiansToDegrees,
    perimeter,
    positionInCircle,
    possibleConnections,
    center,
    intersection,
    difference
}


