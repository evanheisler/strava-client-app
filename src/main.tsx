import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oauth2-code-pkce';
import App from './App.tsx';
import { stravaOauth2Config } from './hooks/useStravaHttpClient.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider authConfig={stravaOauth2Config}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
