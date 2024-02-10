import type { Point } from "../../types/globals"

const move = (
    x: number,
    y: number,
    xStep: number,
    yStep: number,
    count: number): Point[] => {
    const pointsArr: Point[] = [];

    for(let i = 0; i <= count; i++) {
        const newPoint = {
            x:  x + xStep * i,
            y:  y + yStep * i,
        }
        pointsArr.push(newPoint)
    }

    return pointsArr;
}

export default move;