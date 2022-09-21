export const environment = {
  production: false
};
export const SpotifyConfiguration = {
  clientId: '16741c7a672c44a9872a5e537733a5da',
  autEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http:/localhost:4200/login/',
  /* permissões vindas do spot */
  scopes: [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read", // ler biblioteca dos usuarios
    "playlist-read-private", // ler playlists privads
    "playlist-read-collaborative" // ler playlists colaborativas
  ]
}
