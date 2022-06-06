import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '.';
import { loadFilms, loadPromo, setGenres } from './film-data/filmsSlice';
import { FilmTypeFromServer } from '../types/film';
import { adaptToFilm } from '../utils';
import { ApiRoute, AppRoute, AuthStatus } from '../const';
import { setUserAuth } from './user/userSlice';
import { AuthData } from '../types/user';
import { saveToken } from '../services/token';
import { redirectToRoute } from './action';

export const fetchFilms = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('films/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<FilmTypeFromServer[]>(ApiRoute.FILMS);

    const adaptedData = data.map((film: FilmTypeFromServer) =>
      // eslint-disable-next-line comma-dangle
      adaptToFilm(film)
    );
    const genresSet = new Set();
    adaptedData.map((film) => genresSet.add(film.genre));
    const sortedSet = [...genresSet].sort();

    dispatch(setGenres(['All genres', ...sortedSet]));
    dispatch(loadFilms(adaptedData));
  } catch (error) {
    // console.log(error.message);
  }
});

export const fetchPromo = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('films/fetchPromo', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<FilmTypeFromServer>(ApiRoute.PROMO);
    const adaptedData = adaptToFilm(data);
    dispatch(loadPromo(adaptedData));
  } catch (error) {
    // console.log(error.message);
  }
});

export const checkUserAuth = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('user/checkUserAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(ApiRoute.LOGIN);
    dispatch(setUserAuth(AuthStatus.Auth));
  } catch (error) {
    dispatch(setUserAuth(AuthStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('user/loginAction', async ({ email, password }, { dispatch, extra: api }) => {
  try {
    const {
      data: { token },
    } = await api.post(ApiRoute.LOGIN, { email, password });
    saveToken(token);
    dispatch(setUserAuth(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MAIN));
  } catch (error) {
    setUserAuth(AuthStatus.NoAuth);
  }
});
