import { intersection } from "../index";

const arr1 = [0, 1, 2]
const arr2 = [0, 3, 4]

describe("intersection", () => {
    it("should return the intersection", () => {
        expect(intersection(arr1,arr2)).toStrictEqual([0]);
    })
})