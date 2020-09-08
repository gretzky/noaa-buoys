import buoys, { TimeZones, StatesTerritories } from "../src";

describe("buoys", () => {
  it("gets all buoys", () => {
    expect(buoys.length).toEqual(3054);
  });
  it("gets all buoys in a given timezone", () => {
    const result = buoys.filter(buoy => buoy.timeZone === TimeZones.PAGO_PAGO);
    const expectedResult = expect.arrayContaining([
      expect.objectContaining({
        timeZone: "Pacific/Pago_Pago",
      }),
    ]);
    const expectedNotResult = expect.arrayContaining([
      expect.objectContaining({
        timeZone: "America/New_York",
      }),
    ]);

    expect(result).toEqual(expectedResult);
    expect(result).not.toEqual(expectedNotResult);
  });
  it("gets all buoys in a given state", () => {
    const result = buoys.filter(
      buoy => buoy.stateTerritory === StatesTerritories.ME
    );
    const expectedResult = expect.arrayContaining([
      expect.objectContaining({
        stateTerritory: "Maine",
        stateAbbrev: "ME",
      }),
    ]);
    const expectedNotResult = expect.arrayContaining([
      expect.objectContaining({
        stateTerritory: "Massachusetts",
        stateAbbrev: "MA",
      }),
    ]);

    expect(result).toEqual(expectedResult);
    expect(result).not.toEqual(expectedNotResult);
  });
});
