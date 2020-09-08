# noaa-buoys

All active and inactive NOAA tide buoys. (Current buoys TBD).

## Usage

```bash
yarn add noaa-buoys
// or
npm install --save noaa-buoys
```

### Methods

```js
import buoys from 'noaa-buoys';

// returns all buoys (active/inactive, tides/currents)
const allBuoys = buoys.getAll();

// returns all tide buoys (active and inactive)
const tideBuoys = buoys.getTides();

// returns all active buoys (tides/currents)
const activeBuoys = buoys.getActive();

// returns all inactive buoys
const inactiveBuoys = buoys.getInactive();
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
