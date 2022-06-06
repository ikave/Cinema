const AUTH_TOKEN_KEY = 'movies-token';

export type Token = string;

export const getToken = (): Token => {
  const token = document.cookie.match(/movies-token=(.+?)(;|$)/);
  return token ? decodeURIComponent(token[1]) : '';
};

export const saveToken = (token: Token): void => {
  document.cookie = `${AUTH_TOKEN_KEY}=${token}`;
};

export const dropToken = (): void => {
  const token = getToken();
  document.cookie = `${AUTH_TOKEN_KEY}=${token};max-age=-1`;
};
