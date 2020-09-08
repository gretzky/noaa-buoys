type Nullable<T> = T | null;

export enum StatesTerritoriesAbbrev {
  WI = "WI",
  IL = "IL",
  IN = "IN",
  MI = "MI",
  MN = "MN",
  OH = "OH",
  ME = "ME",
  NH = "NH",
  MA = "MA",
  RI = "RI",
  CT = "CT",
  NY = "NY",
  NJ = "NJ",
  DE = "DE",
  PA = "PA",
  DC = "DC",
  MD = "MD",
  VA = "VA",
  NC = "NC",
  SC = "SC",
  GA = "GA",
  FL = "FL",
  AL = "AL",
  MS = "MS",
  LA = "LA",
  TX = "TX",
  CA = "CA",
  OR = "OR",
  WA = "WA",
  AK = "AK",
  HI = "HI",
  PR = "PR",
  VI = "VI",
  BC = "BC",
}

export enum StatesTerritories {
  WI = "Wisconsin",
  IL = "Illinois",
  IN = "Indiana",
  MI = "Michigan",
  MN = "Minnesota",
  OH = "Ohio",
  ME = "Maine",
  NH = "New Hampshire",
  MA = "Massachusetts",
  RI = "Rhode Island",
  CT = "Connecticut",
  NY = "New York",
  NJ = "New Jersey",
  DE = "Delware",
  PA = "Pennsylvania",
  DC = "Washington D.C.",
  MD = "Maryland",
  VA = "Virginia",
  NC = "North Carolina",
  SC = "South Carolina",
  GA = "Georgia",
  FL = "Florida",
  AL = "Alabama",
  MS = "Mississippi",
  LA = "Louisiana",
  TX = "Texas",
  CA = "California",
  OR = "Oregon",
  WA = "Washington",
  AK = "Alaska",
  HI = "Hawaii",
  PR = "Puerto Rico",
  VI = "US Virgin Islands",
  BC = "British Columbia",
  AS = "American Samoa",
  UM = "United States Minor Outlying Islands",
  GU = "Guam",
  TK = "Tokelau",
  BM = "Bermuda",
}

export enum Countries {
  US = "USA",
  MH = "Marshall Islands",
  CA = "Canada",
  CL = "Chile",
  NZ = "New Zealand",
  AG = "Antigua and Barbuda",
  BS = "Bahamas",
  BOTS = "British Overseas Territory",
}

export enum TimeZones {
  CHICAGO = "America/Chicago",
  DETROIT = "America/Detroit",
  NEW_YORK = "America/New_York",
  PUERTO_RICO = "America/Puerto_Rico",
  PORT_OF_SPAIN = "America/Port_of_Spain",
  GUAM = "Pacific/Guam",
  KWAJALEIN = "Pacific/Kwajalein",
  ANCHORAGE = "Alaska/Anchorage",
  BERMUDA = "Atlantic/Bermuda",
  WAKE = "Pacific/Wake",
  LOS_ANGELES = "America/Los_Angeles",
  HONOLULU = "Pacific/Honolulu",
  PAGO_PAGO = "Pacific/Pago_Pago",
  NIUE = "Pacific/Niue",
  ETC = "Etc/GMT+12",
  EASTER_ISLAND = "Pacific/EasterIsland",
  FAKAOFO = "Pacific/Fakaofo",
}

export interface Buoy {
  id: string;
  name: string;
  secondaryName?: Nullable<string>;
  stateTerritory?: Nullable<keyof typeof StatesTerritories>;
  stateAbbrev?: Nullable<StatesTerritories[keyof StatesTerritories]>;
  country: Countries[keyof Countries];
  latitude: number;
  longitude: number;
  type: string;
  timeZone: TimeZones[keyof TimeZones];
  isActive: boolean;
}

export enum BuoyTypes {
  TIDE = "tide",
  CURRENT = "current",
}
