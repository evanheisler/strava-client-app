import { Alert, Box, Grid, Skeleton } from '@mui/material';
import { useQuery } from 'react-query';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useStravaHttpClient } from '../hooks/useStravaHttpClient';
import { StravaRoute } from './StravaRoute';
import { StravaRouteType } from '../types';

// TODO: Add pagination
const PER_PAGE = 6;

export const StravaRoutes = () => {
  const { error: userError, user, isLoading: isLoadingUser } = useCurrentUser();
  const { stravaApi } = useStravaHttpClient();

  const userId = user?.id;

  const {
    data: userRoutes,
    error: routesError,
    isLoading: isLoadingRoutes,
  } = useQuery<StravaRouteType[]>({
    queryKey: ['getUserRoutes', userId],
    queryFn: async () =>
      typeof userId === 'undefined'
        ? Promise.reject(new Error('User id is missing from routes query'))
        : (
            await stravaApi.get(
              `/athletes/${encodeURIComponent(
                userId
              )}/routes?per_page=${PER_PAGE}`
            )
          ).data,
    enabled: !!userId,
  });

  const error = userError || (routesError as boolean);
  const isLoading = isLoadingUser || isLoadingRoutes;

  return (
    <>
      <Box sx={{ flexGrow: 1 }} marginTop={4}>
        {error && <Alert severity="error">Something went wrong.</Alert>}
        {isLoading && <Skeleton variant="text" sx={{ fontSize: '1rem' }} />}

        <Grid container spacing={3}>
          {userRoutes?.map((route) => (
            <Grid item xs={4} key={route.id}>
              <StravaRoute route={route} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
