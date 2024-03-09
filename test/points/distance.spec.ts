import {randomPoint, distance} from "../../index";

describe("distance", () => {
    it("should calculate distance between two points", () => {
        const distanceBeetwen = distance(randomPoint(), randomPoint());      
          
        expect(distanceBeetwen).toBeGreaterThanOrEqual(0);
    })
})