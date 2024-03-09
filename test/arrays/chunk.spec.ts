import { chunk } from "../../index";

const arr = [1, 1, 1, 1];
const chunkArr = [[1, 1], [1, 1]]

describe("chunk", () => {
    it("should return chunks in the array", () => {
        const chunks = chunk(arr, 2);
        
        expect(chunks).toStrictEqual(chunkArr);
    })
})