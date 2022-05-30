import { ThunkActionResult } from '../types/action';
import { FilmTypeFromServer } from '../types/film';
import { adaptToFilm } from '../utils';
import { fetchFilms, setIsLoading } from './action';

export const getFilms = (): ThunkActionResult => async (dispatch, _getState, api) => {
  dispatch(setIsLoading());
  const { data } = await api.get('/films');
  const adaptedData = data.map((film: FilmTypeFromServer) => adaptToFilm(film));
  dispatch(fetchFilms(adaptedData));
  dispatch(setIsLoading());
};
