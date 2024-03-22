import randomNumber from "../randomization/randomNumber";

const sample = (
    arr:any[],
    size:number = 1) =>  {
    if(size > arr.length) throw new Error("Sample size is larger than the array length");
    if(size <= 0)  throw new Error("Size must be a positive integer");
    if(size === 1) {
        const randomStart = randomNumber(0, arr.length - 1);
        return  arr[randomStart];
    }
    const randomStart = randomNumber(0, arr.length - size);
    return arr.slice(randomStart, randomStart + size)
}

export default sample;
