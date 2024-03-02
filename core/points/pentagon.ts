const pentagon = (
    centerX: number, 
    centerY: number, 
    radius: number,
    angle: number = 0
    ) => {
    const points = [];
    const numberOfSides = 5;
    angle = angle % 360;

    for (let i = 0; i < numberOfSides; i++) {
        const currentAngle =  + (i * (2 * Math.PI)) / numberOfSides;
        const x = centerX + radius * Math.cos(currentAngle);
        const y = centerY + radius * Math.sin(currentAngle);
        points.push({ x, y });
    }

    return points;
}

export default pentagon;