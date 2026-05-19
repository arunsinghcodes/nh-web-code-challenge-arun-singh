export type Clinician = {
  id: number;
  name: string;
  address: string;
};

export type Lab = {
  id: number;
  name: string;
  address: string;
};

export type MatchResult = {
  clinicianName: string;
  totalDistance: number;
  routeType: 'Standard Visit' | 'Lab Visit';
};
