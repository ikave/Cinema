/* eslint-disable comma-dangle */
import { AuthStatus } from '../const';
import { ActionType } from '../types/action';
import { FilmType } from '../types/film';

export const changeActiveGenre = (genre: string) =>
  ({
    type: ActionType.ChangeActiveGenre,
    payload: genre,
  } as const);

export const requireAuthorization = (authStatus: AuthStatus) =>
  ({
    type: ActionType.RequireAuthorization,
    payload: authStatus,
  } as const);

export const fetchFilms = (films: FilmType[]) =>
  ({
    type: ActionType.FetchFilms,
    payload: films,
  } as const);

export const setIsLoading = () =>
  ({
    type: ActionType.SetIsLoading,
  } as const);
