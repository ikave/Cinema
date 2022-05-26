import { FilmType } from '../../types/film';
import { createMarkup } from '../../utils';

interface OverviewProps {
  movie: FilmType;
}

function Overview({ movie }: OverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
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
