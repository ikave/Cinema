import { HOUR } from '../const';
import { FilmTypeFromServer, FilmType } from '../types/film';

export function createMarkup<T>(text: T): { __html: T } {
  return { __html: text };
}

export function formatTime(number: number): string {
  if (number < 60) {
    return `0h ${number}m`;
  }

  return `${Math.floor(number / HOUR)}h ${number % HOUR}m`;
}

export function adaptToFilm(film: FilmTypeFromServer): FilmType {
  const adaptedFim = {
    id: film['id'],
    name: film['name'],
    posterImage: film['poster_image'],
    previewImage: film['preview_image'],
    backgroundImage: film['background_image'],
    backgroundColor: film['background_color'],
    videoLink: film['video_link'],
    previewVideoLink: film['preview_video_link'],
    description: film['description'],
    rating: film['rating'],
    scoresCount: film['scores_count'],
    director: film['director'],
    actors: film['starring'],
    runTime: film['run_time'],
    genre: film['genre'],
    released: film['released'],
    isFavorite: film['is_favorite'],
    starring: film['starring'],
  };

  return adaptedFim;
}
