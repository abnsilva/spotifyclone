export const environment = {
  production: true
};
export const SpotifyConfiguration = {
  clientId: '16741c7a672c44a9872a5e537733a5da',
  autEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http:/localhost:4200/login/',
  /* permissões vindas do spot */
  scopes: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-colaborative"
  ]}