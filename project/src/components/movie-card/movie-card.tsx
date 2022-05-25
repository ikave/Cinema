import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmType } from '../../types/film';
import Videoplayer from '../videoplayer/videoplayer';

interface MovieCardProps {
  film: FilmType;
}

function MovieCard({ film }: MovieCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearTimer() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function handleMouseEnter() {
    setIsTimeout(true);
  }

  function handleMouseLeave() {
    setIsTimeout(false);
  }

  useEffect(() => {
    if (isTimeout) {
      timer.current = setTimeout(() => {
        setIsPlaying(true);
      }, 1000);
    } else if (isPlaying) {
      setIsPlaying(false);
    }

    return clearTimer;
  }, [isPlaying, isTimeout]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        {isPlaying ? (
          <Videoplayer
            isPlaying={isPlaying}
            src={film.previewVideoLink}
            poster={film.previewImage}
          />
        ) : (
          <img
            src={film.posterImage}
            alt={film.name}
            width="280"
            height="175"
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
