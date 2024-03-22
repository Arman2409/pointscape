import { removeDuplicates } from "../../index";

const arrWithDuplicates = [0, 1, 2, 2, 3, "item", "item"]
const arrWithoutDuplicates = [0, 1, 2, 3, "item"]

describe("removeDuplicates", () => {
    it("should remove duplicates from the array", () => {
        expect(removeDuplicates(arrWithDuplicates)).toStrictEqual(arrWithoutDuplicates);
    })
})