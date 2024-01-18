import { randomBoolean } from "../../index";

describe("randomBoolean", () => {
    it("should always return boolean", () => {
        const boolean = randomBoolean();
        
        expect(typeof boolean).toBe("boolean");
    })
})