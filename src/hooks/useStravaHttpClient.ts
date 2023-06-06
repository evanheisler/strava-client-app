import axios from 'axios';
import { useContext } from 'react';
import {
  AuthContext,
  TAuthConfig,
  TRefreshTokenExpiredEvent,
} from 'react-oauth2-code-pkce';

export const stravaOauth2Config: TAuthConfig = {
  clientId: import.meta.env.VITE_STRAVA_CLIENT_ID,
  authorizationEndpoint: 'https://www.strava.com/oauth/authorize',
  tokenEndpoint: 'https://www.strava.com/oauth/token',
  redirectUri: 'http://localhost:5173/',
  scope: 'read_all',
  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => event.login(),
  extraAuthParameters: {
    responseType: 'code',
  },
  extraTokenParameters: {
    client_secret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
  },
  autoLogin: false,
  decodeToken: false,
};

const stravaApi = axios.create({
  baseURL: 'https://www.strava.com/api/v3',
  headers: {
    'Content-type': 'application/json',
  },
});

export const useStravaHttpClient = () => {
  const { token } = useContext(AuthContext);

  stravaApi.interceptors.request.use(
    async (config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    stravaApi,
  };
};
