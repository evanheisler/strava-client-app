import { Alert, Skeleton } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import './App.css';
import { AuthedContainer } from './components/AuthedContainer';
import { Navigation } from './components/Navigation';

function App() {
  const {
    token: accessToken,
    error,
    loginInProgress,
  } = useContext(AuthContext);

  if (loginInProgress) return null;

  return (
    <>
      <Navigation />

      {error && (
        <Alert severity="error">
          Looks like there was a problem accessing your information. Please try
          again
        </Alert>
      )}

      {loginInProgress && <Skeleton variant="text" sx={{ fontSize: '1rem' }} />}

      {accessToken && <AuthedContainer />}
    </>
  );
}

export default App;
