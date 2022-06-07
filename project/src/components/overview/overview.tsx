import { useAppSelector } from '../../hooks';
import { getMovieGrade } from '../../services/grade';
import { FilmType } from '../../types/film';
import { createMarkup } from '../../utils';

function Overview(): JSX.Element {
  const movie: FilmType = useAppSelector((state) => state.FILMS.activeFilm);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getMovieGrade(movie.rating)}
          </span>
          <span className="film-rating__count">
            {movie.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p dangerouslySetInnerHTML={createMarkup<string>(movie.description)} />

        <p className="film-card__director">
          <strong>Director: {movie.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {movie.starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
