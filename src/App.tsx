import { Alert, Button } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import './App.css';
import { AuthedContainer } from './components/AuthedContainer';

function App() {
  const {
    token: accessToken,
    login,
    error,
    loginInProgress,
  } = useContext(AuthContext);

  if (loginInProgress) return null;

  return (
    <>
      {error && (
        <Alert severity="error">
          Looks like there was a problem accessing your information. Please try
          again
        </Alert>
      )}

      {accessToken ? (
        <AuthedContainer />
      ) : (
        <Button onClick={() => login('customLoginState')}>Login</Button>
      )}
    </>
  );
}

export default App;
