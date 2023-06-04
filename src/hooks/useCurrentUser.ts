import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import { useStravaHttpClient } from './useStravaHttpClient';
import { useQuery } from 'react-query';

type StravaAthlete = {
  id: string;
};

export const useCurrentUser = () => {
  const { token: accessToken } = useContext(AuthContext);

  const { stravaApi } = useStravaHttpClient();

  const { data, error } = useQuery<StravaAthlete>(
    'getAthlete',
    async () => await stravaApi.get(`/athlete`),
    { enabled: !!accessToken }
  );

  // if (!data) {
  //   throw new Error('FIX ME');
  // }

  return {
    data,
    error,
  };
};
