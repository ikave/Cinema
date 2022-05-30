import { FilmType } from './film';

export type State = {
  films: FilmType[];
  filteredFilms: FilmType[];
  genre: string;
  isLoading: boolean;
};
