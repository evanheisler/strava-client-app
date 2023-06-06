import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import { useStravaHttpClient } from './useStravaHttpClient';
import { useQuery } from 'react-query';
import { StravaAthleteType } from '../types';

export const useCurrentUser = () => {
  const { token: accessToken } = useContext(AuthContext);

  const { stravaApi } = useStravaHttpClient();

  const {
    data: user,
    error,
    isLoading,
  } = useQuery<StravaAthleteType>({
    queryKey: 'getAthlete',
    queryFn: async () => {
      const res = await stravaApi.get(`/athlete`);
      return res.data;
    },
    enabled: !!accessToken,
  });

  return {
    user,
    error,
    isLoading,
  };
};
