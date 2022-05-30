import { genres } from '../const';
import { films } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

export const initialState = {
  films: films,
  filteredFilms: films,
  genre: genres[0],
  isLoading: false,
};

function updateStore(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.ChangeActiveGenre:
      return { ...state, genre: action.payload };
    case ActionType.FetchFilms:
      return { ...state, films: action.payload };
    case ActionType.SetIsLoading:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

export { updateStore };
