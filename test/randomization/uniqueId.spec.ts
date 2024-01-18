import { uniqueId } from "../../index";

describe("uniqueId", () => {
    it("should generate random id if other ids aren't provided", () => {
        const id = uniqueId();
        
        expect(id.length).toBe(36);
    })

    it("should generate different id", () => {
        const idsArr = [];
        for (let i = 0; i < 10; i++) idsArr.push(uniqueId());
        const newId = uniqueId();
        const similiar = idsArr.find(id => id === newId);

        expect(similiar).toBe(undefined);
    })
})