import allBuoys from "./buoys";

type Nullable<T> = T | null | undefined;

export interface Buoy {
  id: number | string;
  name: string;
  secondaryName?: Nullable<string>;
  state?: Nullable<string>;
  stateAbbrev?: Nullable<string>;
  country: string;
  latitude: number;
  longitude: number;
  stationType: string;
  type: string;
}

const buoys = {
  getAll: (): Buoy[] => allBuoys,
  getTides: (): Buoy[] => allBuoys.filter((buoy: Buoy) => buoy.type === "tide"),
  getCurrents: (): Buoy[] =>
    allBuoys.filter((buoy: Buoy) => buoy.type === "current"),
  getAllActive: (): Buoy[] =>
    allBuoys.filter((buoy: Buoy) => buoy.stationType === "harmonic"),
  getActiveTides: (): Buoy[] =>
    allBuoys.filter(
      buoy => buoy.type === "tide" && buoy.stationType === "harmonic"
    ),
  getActiveCurrents: (): Buoy[] =>
    allBuoys.filter(
      buoy => buoy.type === "current" && buoy.stationType === "harmonic"
    ),
  getAllInactive: (): Buoy[] =>
    allBuoys.filter((buoy: Buoy) => buoy.type === "subordinate"),
  getInactiveTides: (): Buoy[] =>
    allBuoys.filter(
      buoy => buoy.type === "tide" && buoy.stationType === "subordinate"
    ),
  getInactiveCurrents: (): Buoy[] =>
    allBuoys.filter(
      buoy => buoy.type === "current" && buoy.stationType === "subordinate"
    ),
};

export { allBuoys };
export default buoys;
