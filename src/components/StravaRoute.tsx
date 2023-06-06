import { CardContent, Paper, Typography } from '@mui/material';
import { StravaRouteType } from '../types';
import { normalizeSeconds } from '../utils/dateTime';
import { makeStyles } from '@mui/styles';
import { useStravaHttpClient } from '../hooks/useStravaHttpClient';
import { useQuery } from 'react-query';

const useStyles = makeStyles(() => ({
  routeWrapper: {
    height: '100%',
    textAlign: 'left',
  },
}));

export const StravaRoute = ({ route }: { route: StravaRouteType }) => {
  const classes = useStyles();

  const { stravaApi } = useStravaHttpClient();

  const { data: stravaRoute, isLoading } = useQuery<StravaRouteType>({
    queryKey: ['stravaRoute', route.id_str],
    queryFn: async () => {
      const res = await stravaApi.get(
        `/routes/${encodeURIComponent(route.id_str)}`
      );
      return res.data;
    },
    retry: false,
  });

  return (
    <Paper className={classes.routeWrapper}>
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
        <hr />
        {!isLoading && stravaRoute ? (
          <ul>
            {stravaRoute.segments?.map((segment) => (
              <li key={segment.id}>{segment.name}</li>
            ))}
          </ul>
        ) : (
          'No Segments to display'
        )}
      </CardContent>
    </Paper>
  );
};
