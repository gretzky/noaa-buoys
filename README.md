# noaa-buoys

All active and inactive (but still reporting data) NOAA tide buoys.

## Usage

```bash
yarn add noaa-buoys
// or
npm install --save noaa-buoys
```

```js
import buoys from 'noaa-buoys';

buoys.map(buoy => buoy.id) // get all buoy ids
```

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
  type: 'tide' | 'current'; // the type of station
  timeZone: string; // tz database timezone
  isActive: boolean; // whether or not the station is still in use
}
```
