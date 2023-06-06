import { Alert, Box, Container } from '@mui/material';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useQuery } from 'react-query';
import { useStravaHttpClient } from '../hooks/useStravaHttpClient';

export const StravaRoutes = () => {
  const { error: userError, data: user } = useCurrentUser();
  const { stravaApi } = useStravaHttpClient();

  const { data: userRoutes, error: routesError } = useQuery({
    queryKey: 'getUserRoutes',
    queryFn: async () =>
      await stravaApi.get(
        `/athletes/${encodeURIComponent(user.data.id)}/routes`
      ),
  });

  const error = userError || routesError;

  return (
    <>
      {error && <Alert severity="error">Something went wrong.</Alert>}
      {userRoutes?.data.map((route) => JSON.stringify(route))}
    </>
  );
};
