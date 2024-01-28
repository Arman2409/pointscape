const inRange = (
    number: number,
    minLimit: number,
    maxLimit: number
):boolean => {
   return number >= minLimit && number <= maxLimit;
}

export default inRange;