import type { Direction, Point } from "../../types/globals";

const steps = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1]
}

const triangle = (
    x: number,
    y: number,
    size: number,
    direction: Direction = "left"
): Point[] => {
    const height = (Math.sqrt(3) / 2) * size;
    const nextStep = steps[direction];

    const points: Point[] = [{ x, y }];

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            x += nextStep[0] * size;
            y += nextStep[1] * size; // The second point should have a y increment of 0
        } else {
            x += nextStep[0] ? size / 2 : height;
            y += nextStep[1] ? size / 2 : height;
        }
        points.push({ x, y });
    }

    return points;
};



export default triangle;
