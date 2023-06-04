import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';
import { Routes } from './Routes';

export const AuthedContainer = () => {
  const { logOut, idTokenData } = useContext(AuthContext);

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box marginLeft="auto">
              <Button
                variant="outlined"
                onClick={() => logOut('rememberThis', idTokenData?.tid)}>
                Log Out
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Routes />
    </>
  );
};
