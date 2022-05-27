import { genres } from '../const';
import { films } from '../mocks/films';
import { Action, ActionType } from '../types/action';
import { State } from '../types/state';

export const initialState = {
  films: films,
  filteredFilms: films,
  genre: genres[0],
};

function updateStore(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionType.ChangeActiveGenre:
      return { ...state, genre: action.payload };
    default:
      return state;
  }
}

export { updateStore };
