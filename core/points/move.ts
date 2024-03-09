import type { Point } from "../../types/globals"

const move = (
    initialPoint: Point,
    xStep: number,
    yStep: number,
    count: number): Point[] => {
    const pointsArr: Point[] = [];
    const { x, y } = { ...initialPoint };

    for (let i = 0; i <= count; i++) {
        const newPoint = {
            x: x + xStep * i,
            y: y + yStep * i,
        }
        pointsArr.push(newPoint)
    }

    return pointsArr;
}

export default move;