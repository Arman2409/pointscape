import type { Direction, Point } from "../../types/globals";

const sequence:Direction[] = ["right", "down", "left", "up"];
const steps = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1]
}

const square = (
    initialPoint: Point,
    size:number, 
    direction: Direction = "right") => {
    const points:Point[] = [initialPoint];
    let {x, y} = {...initialPoint}
    for(let i = 0; i < 3; i++) {
        const nextStep = steps[direction];
        x += nextStep[0] * size;
        y += nextStep[1] * size;
        points.push({x, y});
        const nextDirectionIndex = sequence.indexOf(direction) + 1 < sequence.length ? sequence.indexOf(direction) + 1 : 0;
        direction = sequence[nextDirectionIndex]; // cyclic rotation
    }
    return points;
}

export default square;