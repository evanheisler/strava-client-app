import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import { useStravaHttpClient } from './useStravaHttpClient';
import { useQuery } from 'react-query';

type StravaAthlete = {
  data: {
    id: string;
  };
};

export const useCurrentUser = () => {
  const { token: accessToken } = useContext(AuthContext);

  const { stravaApi } = useStravaHttpClient();

  const { data, error, isLoading } = useQuery<StravaAthlete>(
    'getAthlete',
    async () => await stravaApi.get(`/athlete`),
    { enabled: !!accessToken }
  );

  return {
    data,
    error,
    isLoading,
  };
};
