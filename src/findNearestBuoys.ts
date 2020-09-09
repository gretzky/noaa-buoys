import * as R from "ramda";
import buoys from "./buoys";
import { Nullable, Buoy, Coords, FindBuoysParams } from "./types";

const haversine = (givenLocation: Coords, buoyLocation: Coords): number => {
  const degreeDistance = (a: number, b: number): number =>
    R.multiply(R.divide(Math.PI, 180), R.subtract(a, b));

  const radians = (degree: number): number =>
    R.divide(R.multiply(Math.PI, degree), 180);

  // https://en.wikipedia.org/wiki/Haversine_formula
  // good luck everybody else
  return R.multiply(
    2,
    Math.asin(
      Math.sqrt(
        R.add(
          Math.pow(
            Math.sin(
              degreeDistance(givenLocation.latitude, buoyLocation.latitude) / 2
            ),
            2
          ),
          R.multiply(
            Math.pow(
              Math.sin(
                degreeDistance(
                  givenLocation.longitude,
                  buoyLocation.longitude
                ) / 2
              ),
              2
            ),
            R.multiply(
              Math.cos(radians(givenLocation.latitude)),
              Math.cos(radians(buoyLocation.latitude))
            )
          )
        )
      )
    )
  );
};

/**
 * getDistanceToBuoy - calculate the geographic distance between a given location and a specific buoy location using the haversine formula
 *
 * @param givenLocation - latitude and longitude of a given (starting) location
 * @param buoyLocation - latitude and longitude of a buoy to find the distance from
 */
const getDistanceToBuoy = ({
  givenLocation,
  buoyLocation,
  units,
}: {
  givenLocation: Coords;
  buoyLocation: Coords;
  units: string;
}): number => {
  const EARTH_RADIUS_KM = 6371;

  const geographicDistance = haversine(givenLocation, buoyLocation);

  let buoyDistance = EARTH_RADIUS_KM * geographicDistance;

  return units === "metric" ? buoyDistance : (buoyDistance /= 1.60934);
};

/**
 * findNearestBuoys - find the nearest number of buoys to a given location
 *
 * @param location - a given location to find buoys closest to
 * @param units - units of measurement
 * @param numBuoys - number of buoys to find (defaults to all)
 * @param stations - list of buoy stations to search against (defaults to all)
 */
const findNearestBuoys = ({
  location,
  units,
  numBuoys,
  stations,
}: Omit<FindBuoysParams, "onlyActiveBuoys">): Nullable<Buoy[]> => {
  const allBuoys = stations ?? buoys;

  const Buoy = (buoy: Buoy): Buoy => {
    const buoyLocation = {
      latitude: buoy.latitude,
      longitude: buoy.longitude,
    };

    const distanceFromUser = getDistanceToBuoy({
      givenLocation: location,
      buoyLocation,
      units,
    });

    return {
      ...buoy,
      distanceFromUser,
    };
  };

  const stationsByDistance = R.compose(
    R.sort(R.ascend(R.prop("distanceFromUser"))),
    R.map(Buoy)
  )(allBuoys);

  if (!numBuoys) {
    return stationsByDistance;
  }

  return numBuoys === 1
    ? stationsByDistance[0]
    : stationsByDistance.splice(0, numBuoys);
};

export { getDistanceToBuoy, findNearestBuoys };
