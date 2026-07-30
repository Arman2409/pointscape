import possibleConnections from "../../core/points/possibleConnections";

describe("possibleConnections", () => {
    it("should return 10 for 5 points", () => {
        const connectionsCount = possibleConnections(5);

        expect(connectionsCount).toBe(10);
    });
});
