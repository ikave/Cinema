import { FilmType } from '../../types/film';
import MovieCard from '../movie-card/movie-card';

interface MovieListProps {
  films: FilmType[]
}

function MovieList({films}: MovieListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <MovieCard key={film.id} film={film} />)}
    </div>
  );
}

export default MovieList;
