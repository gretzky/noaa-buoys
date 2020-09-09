import { getDistanceToBuoy, findNearestBuoys } from "../src/findNearestBuoys";
import buoys from "../src/buoys";

describe("buoy distances", () => {
  const givenLocation = {
    latitude: 44.210265,
    longitude: -69.065552,
  };

  describe("getDistanceToBuoy", () => {
    it("gets the distance between a given location and a specific buoy", () => {
      const givenBuoy = buoys.find(buoy => buoy.id === "8414776");

      const buoyLocation = {
        latitude: givenBuoy?.latitude,
        longitude: givenBuoy?.longitude,
      };

      const result = getDistanceToBuoy({
        givenLocation,
        buoyLocation,
        units: "english", // NOAA calls imperial units 'english' in their co-ops data api
      });
      const expectedResult = 16.069147572970316;

      expect(result).toEqual(expectedResult);
    });
  });

  describe("findNearestBuoy", () => {
    it("finds the nearest single buoy to a given location", () => {
      const result = findNearestBuoys({
        location: givenLocation,
        units: "english",
        numBuoys: 1,
        /// @ts-ignore
        stations: buoys,
      });

      const expectedResult = expect.objectContaining({
        country: "USA",
        distanceFromUser: 7.49059747673502,
        id: "8415490",
        isActive: false,
        latitude: 44.105,
        longitude: -69.1017,
        name: "Rockland",
        secondaryName: null,
        stateAbbrev: "ME",
        stateTerritory: "Maine",
        timeZone: "America/New_York",
        type: "tide",
      });

      expect(result).toEqual(expectedResult);
    });
  });

  it("finds the nearest 3 buoys from a given location", () => {
    const result = findNearestBuoys({
      location: givenLocation,
      units: "english",
      numBuoys: 3,
      /// @ts-ignore
      stations: buoys,
    });

    const expectedResult = expect.arrayContaining([
      expect.objectContaining({
        country: "USA",
        distanceFromUser: 9.603502393905469,
        id: "8414888",
        isActive: false,
        latitude: 44.1567,
        longitude: -68.8867,
        name: "Pulpit Harbor",
        secondaryName: "Penobscot Bay",
        stateAbbrev: "ME",
        stateTerritory: "Maine",
        timeZone: "America/New_York",
        type: "tide",
      }),
    ]);

    expect(result).toEqual(expectedResult);
  });
});
