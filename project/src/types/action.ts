import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './state';
import {
  changeActiveGenre,
  fetchFilms,
  setIsLoading,
  // eslint-disable-next-line comma-dangle
  requireAuthorization,
} from '../store/action';

export enum ActionType {
  ChangeActiveGenre = 'films/changeActiveGenre',
  FetchFilms = 'films/fetchFilms',
  RequireAuthorization = 'user/requireAuthorization',
  SetIsLoading = 'films/loading',
}

export type Actions =
  | ReturnType<typeof changeActiveGenre>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof fetchFilms>
  | ReturnType<typeof setIsLoading>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
