# Strava Client App

## About
Small, proof-of-concept implementation of the Strava OAuth2 authentication flow and reading user data.

⚠️ WARNING: The project uses browser-based authentication. OAuth2 uses refresh/access tokens and Strava enforces a strict 6 hour timeout, however be aware that there is potential for XSS. However, this project only **reads** data and does not write anything at this time.

### Technology of Note
* [ReactJS](https://react.dev/learn)
* [Strava OAuth2 API](https://developers.strava.com/)
* [Oauth2 library](https://github.com/soofstad/react-oauth2-pkce)
* [@tanstack/react-query](https://tanstack.com/query/v3/docs/react/overview)
* [Material UI](https://v4.mui.com/)
* [Vite](https://vitejs.dev/) & [Vitest](https://vitest.dev/)

## Getting Started

```bash
$ yarn install
$ yarn dev
```
You should now have a server running locally at [http://localhost:5173](http://localhost:5173).

### Tests

```bash
$ yarn test
```
Automatically watches for changes. Use `yarn test run` if you don't want to `watch`.