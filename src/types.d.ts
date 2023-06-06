export type StravaRouteType = {
  name: string;
  id: number;
  id_str: string;
  estimated_moving_time: number; // Seconds
  segments?: Record<string, any>[];
};

export type StravaAthleteType = {
  id: string;
};
