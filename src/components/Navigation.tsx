import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';

export const Navigation = () => {
  const { token, login, logOut, idTokenData } = useContext(AuthContext);
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box marginLeft="auto">
            {token ? (
              <Button
                variant="outlined"
                onClick={() => logOut('rememberThis', idTokenData?.tid)}>
                Log Out
              </Button>
            ) : (
              <Button onClick={() => login('strava')}>Login</Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
