import randomBoolean from "../../core/randomization/randomBoolean";

describe("randomBoolean", () => {
    it("should always return boolean", () => {
        const boolean = randomBoolean();

        expect(typeof boolean).toBe("boolean");
    });
});
