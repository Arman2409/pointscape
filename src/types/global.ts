export interface Point {
    x: number;
    y: number;
}

/** Structurally identical to `Point` — a direction + magnitude rather than a position. */
export type Vector = Point;

export type Coordinate = "x" | "y";

export type Direction = "left" | "right" | "up" | "down";

export interface Bounds {
    min: number;
    max: number;
}

export interface Line {
    start: Point;
    end: Point;
}
