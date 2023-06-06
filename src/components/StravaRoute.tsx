import { CardContent, Typography } from '@mui/material';
import { StravaRouteType } from '../types';
import { normalizeSeconds } from '../utils/dateTime';

export const StravaRoute = ({ route }: { route: StravaRouteType }) => {
  // TODO/DEBT: Get route segment information. Seems to be missing from API?

  // const { stravaApi } = useStravaHttpClient();

  // const { data: stravaRoute } = useQuery<StravaRouteType>({
  //   queryKey: ['stravaRoute', route.id],
  //   queryFn: async () => {
  //     const res = await stravaApi.get(
  //       `/routes/${encodeURIComponent(route.id)}`
  //     );
  //     return res.data;
  //   },
  //   retry: false,
  // });

  // console.log({ stravaRoute });

  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Name
      </Typography>
      <Typography variant="h5" component="div">
        {route.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Est. Moving Time
      </Typography>
      <Typography variant="body2">
        {normalizeSeconds(route.estimated_moving_time)}
      </Typography>
    </CardContent>
  );
};
