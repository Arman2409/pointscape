import { sample } from "../../index";

const arr = [0, 1, 2, 3, 4, 5];
const size = 2;

describe("sample", () => {
    it("should return sample of the given size", () => {
        expect(sample(arr, size)).toHaveLength(size);
    })

    it("should return the same array if the size is equal to array's length", () => {
        expect(sample(arr, arr.length)).toStrictEqual(arr);
    })
})