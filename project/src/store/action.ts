/* eslint-disable comma-dangle */
import { ActionType, ChangeActiveGenre } from '../types/action';

export function changeActiveGenre(genre: string): ChangeActiveGenre {
  return {
    type: ActionType.ChangeActiveGenre,
    payload: genre,
  } as const;
}
