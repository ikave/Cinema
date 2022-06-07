import { SIMILAR_COUNT } from '../../const';
import { useAppSelector } from '../../hooks';
import MovieCard from '../movie-card/movie-card';

function SimilarList(): JSX.Element {
  const films = useAppSelector((state) => state.FILMS.similar);
  return (
    <div className="catalog__films-list">
      {films.slice(0, SIMILAR_COUNT).map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default SimilarList;
