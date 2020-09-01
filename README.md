# noaa-buoys

All active and inactive NOAA tides and currents buoys.

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

// returns all current buoys (active and inactive)
const currentBuoys = buoys.getCurrents();

// returns all active buoys (tides/currents)
const activeBuoys = buoys.getAllActive();

// returns all active tide buoys
const activeTideBuoys = buoys.getActiveTides();

// returns all active current buoys
const activeCurrentBuoys = buoys.getActiveCurrents();

// returns all inactive buoys
const inactiveBuoys = buoys.getAllInactive();

// returns inactive tide buoys
const inactiveTideBuoys = buoys.getInactiveTides();

// returns inactive current buoys
const inactiveCurrentBuoys = buoys.getInactiveCurrents();
```

A single buoy is an object with the following params:

```ts
{
  id: number | string;
  name: string;
  secondaryName: string;
  state: string;
  stateAbbrev: string;
  country: string;
  latitude: number;
  longitude: number;
  stationType: 'tide' | 'current';
  type: 'harmonic' | 'subordinate'; // harmonic = active, subordinate = inactive
}
```
