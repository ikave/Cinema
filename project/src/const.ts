export enum AppRoute {
  MAIN = '/',
  SIGNIN = '/login',
  MY_LIST = '/mylist',
  FILM = '/films/:id',
  ADD_REVIEW = '/films/:id/review',
  PLAYER = '/player/:id',
  NOT_FOUND = '/404',
}

export const ApiRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  COMMENTS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const reviewStars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const HOUR = 60;

export const SHOW_FILMS_COUNT = 8;

export const DEFAULT_GENRE = 'All genres';

export const genres = [
  'All genres',
  'Comedy',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export enum NameSpace {
  films = 'FILMS',
  user = 'USER',
}
