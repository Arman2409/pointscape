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
import movingPoint from "./core/points/movingPoint";
import inLine from "./core/points/inLine";
import cross from "./core/points/cross";

// math 
import inRange from "./core/math/inRange";
import roundToPrecision from "./core/math/roundToPrecision";
import degreesToRadians from "./core/math/degreesToRadians";
import radiansToDegrees from "./core/math/radiansToDegrees";
import average from "./core/math/average";

// randomization 
import uniqueId from "./core/randomization/uniqueId";
import randomBoolean from "./core/randomization/randomBoolean";
import randomNumber from "./core/randomization/randomNumber";

// arrays 
import intersection from "./core/arrays/intersection";
import difference from "./core/arrays/difference";

// types 
export type { Point } from "./types/globals";
export type { Quarter } from "./types/globals";

// named exports 
export {
    // points 
    distance,
    middlePoint,
    collision,
    pointWithoutCollision,
    collisionInArray,
    angle,
    randomPoint,
    randomPoints,
    area,
    circleArea,
    randomPointInDistance,
    nearest,
    farest,
    perimeter,
    positionInCircle,
    possibleConnections,
    center,
    inLine,
    movingPoint,
    cross,

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
}

// default export 
export default {
     // points 
     distance,
     middlePoint,
     collision,
     pointWithoutCollision,
     collisionInArray,
     angle,
     randomPoint,
     randomPoints,
     area,
     circleArea,
     randomPointInDistance,
     nearest,
     farest,
     perimeter,
     positionInCircle,
     possibleConnections,
     center,
     inLine,
     movingPoint,
     cross,
 
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
}


