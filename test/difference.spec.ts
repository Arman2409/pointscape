import { difference } from "../index";

const arr1 = [0, 1, 2];
const arr2 = [1, 2];

describe("difference", () => {
    it("should return the difference of arrays", () => {
        const arrDifference = difference(arr1, arr2);
        
        expect(arrDifference).toStrictEqual([0]);
    })
})