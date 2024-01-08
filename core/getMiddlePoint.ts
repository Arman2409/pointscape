const getMiddlePoint = (
    x1: number,
    y1: number,
    x2: number,
    y2: number) => {
    const xDistance = Math.abs(x1 - x2);
    const yDistance = Math.abs(y1 - y2);
    const middleX = x2 >= x1 ? xDistance / 2 : -xDistance / 2;
    const middleY = y2 >= y1 ? yDistance / 2 : -yDistance / 2;
    return {
        x: middleX,
        y: middleY
    }
}

export default getMiddlePoint;