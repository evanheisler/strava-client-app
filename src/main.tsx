import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oauth2-code-pkce';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx';
import { stravaOauth2Config } from './hooks/useStravaHttpClient.ts';
import { StyledEngineProvider } from '@mui/material';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AuthProvider authConfig={stravaOauth2Config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
