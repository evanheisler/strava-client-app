import { Alert, Skeleton } from '@mui/material';
import { useQuery } from 'react-query';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useStravaHttpClient } from '../hooks/useStravaHttpClient';

type StravaRoute = {
  name: string;
  id: string;
};

export const StravaRoutes = () => {
  const {
    error: userError,
    data: user,
    isLoading: isLoadingUser,
  } = useCurrentUser();
  const { stravaApi } = useStravaHttpClient();

  const userId = user?.data.id;

  const {
    data: userRoutes,
    error: routesError,
    isLoading: isLoadingRoutes,
  } = useQuery({
    queryKey: ['getUserRoutes', userId],
    queryFn: async () =>
      typeof userId === 'undefined'
        ? Promise.reject(new Error('User id is missing from routes query'))
        : await stravaApi.get(`/athletes/${encodeURIComponent(userId)}/routes`),
    enabled: !!userId,
  });

  const error = userError || routesError;
  const isLoading = isLoadingUser || isLoadingRoutes;

  return (
    <>
      {error && <Alert severity="error">Something went wrong.</Alert>}
      {isLoading && <Skeleton variant="text" sx={{ fontSize: '1rem' }} />}
      {userRoutes?.data.map((route: StravaRoute) => JSON.stringify(route.name))}
    </>
  );
};
