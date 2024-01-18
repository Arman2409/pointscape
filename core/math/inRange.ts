const inRange = (
    number: number,
    minLimit: number,
    maxLimit: number
) => number >= minLimit && number <= maxLimit;

export default inRange;