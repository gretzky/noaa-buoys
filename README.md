# noaa-buoys

All active and inactive\* NOAA tide buoys.

<sup>\*but still reporting some computed data</sup>

## Usage

```bash
yarn add noaa-buoys
// or
npm install --save noaa-buoys
```

This package exports a function to find the nearest buoys to a given location, as well as the list of buoys themselves.

```ts
import buoys, { findNearestBuoys, Buoy } from "noaa-buoys";

const tz: string[] = buoys.map((buoy: Buoy) => buoy.timeZones); // get all buoy timezones

const nearestBuoys: Buoy = findNearestBuoys({
  location: {
    latitude: 44.210265,
    longitude: -69.065552,
  },
  units: "metric",
  numBuoys: 1,
  stations: buoys.filter((buoy: Buoy) => buoy.isActive), // optional, defaults to the entire list of buoys
});
```

### `buoys`

You can import the entire list of buoys with `import buoys from 'noaa-buoys'`.

A single buoy is an object with the following params:

```ts
{
  id: string; // NOAA buoy ID
  name: string; // NOAA station name
  secondaryName: string; // some NOAA stations have long / descriptive names, those are added here
  state: string | null; // US state or territory (null if non-US)
  stateAbbrev: string | null; // US state abbrev (null if non-US or US outlying island)
  country: string; // full country name
  latitude: number; // in degrees,decimal minutes
  longitude: number; // in degrees,decimal minutes
  type: "tide" | "current"; // the type of station
  timeZone: string; // tz database timezone
  isActive: boolean; // whether or not the station is still in use
}
```

### `findNearestBuoys`

Returns a given number of the nearest buoys to a given location.

```ts
findNearestBuoys({
  location: {
    latitude: number // a given latitude in decimal degrees
    longitude: number, // a given longitude in decimal degrees
  },
  units: 'metric' | 'english', // 'english' is what NOAA uses for imperial in their co-ops data api
  numBuoys: number, // the number of nearby buoys to return. defaults to the entire list of buoys (3054)
  stations: Buoy[] // OPTIONAL -- a list of buoys to search against. defaults to the entire list of noaa-buoys
})
```
