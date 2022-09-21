export const environment = {
  production: true
};
export const SpotifyConfiguration = {
  clientId: '9d170f0120fb423581ac554646ee9a45',
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