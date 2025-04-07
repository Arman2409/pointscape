import type Point from "../utils/Point";

export type { Point }

export type Coordinate = 'x' | "y";

export type Direction = "left" | "right" | "up" | "down";

export interface Bounds {
    min: number
    max: number
}

export interface Line {
    start: Point
    end: Point
}