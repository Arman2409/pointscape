import { possibleConnections } from "../../index";

describe("possibleConnections", () => {
    it("should return 10 for 5 points", () => {
        const connectionsCount = possibleConnections(5);

        expect(connectionsCount).toBe(10);
    })
})