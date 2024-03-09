import type { Direction, Point } from "../../types/globals";

const sequence: Direction[] = ["right", "down", "left", "up"];
const steps = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1]
}

const rectangle = (
    initialPoint: Point,
    width: number,
    height: number,
    direction: Direction = "right") => {
    console.log({ width, height });

    const points: Point[] = [initialPoint];
    let { x, y } = { ...initialPoint };

    for (let i = 0; i < 3; i++) {
        const nextStep = steps[direction];
        x += nextStep[0] * width;
        y += nextStep[1] * height;
        points.push({x, y});

        const nextDirectionIndex = sequence.indexOf(direction) + 1 < sequence.length ? sequence.indexOf(direction) + 1 : 0;
        direction = sequence[nextDirectionIndex]; // cyclic rotation
    }

    return points;
}

export default rectangle;