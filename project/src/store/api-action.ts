import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '.';
import { loadFilms, loadPromo, setGenres } from './film-data/filmsSlice';
import { FilmTypeFromServer } from '../types/film';
import { adaptToFilm } from '../utils';

export const fetchFilms = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('films/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<FilmTypeFromServer[]>('/films');

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
    const { data } = await api.get<FilmTypeFromServer>('/promo');
    const adaptedData = adaptToFilm(data);
    dispatch(loadPromo(adaptedData));
  } catch (error) {
    // console.log(error.message);
  }
});
