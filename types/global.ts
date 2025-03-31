export type Coordinate = 'x' | "y" | undefined;

export type Direction = "left" | "right" | "up" | "down";

export interface Point {
    x: number
    y: number
}

export interface Bounds {
    min: number
    max: number
}

export interface Line {
    start: Point
    end: Point
}