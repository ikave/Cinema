import { useEffect, useState } from 'react';
import { SHOW_FILMS_COUNT } from '../../const';
import { FilmType } from '../../types/film';
import CatalogMoreButton from '../catalog-more-button/catalog-more-button';
import MovieCard from '../movie-card/movie-card';

interface MovieListProps {
  films: FilmType[];
}

function MovieList({ films }: MovieListProps): JSX.Element {
  const [shownCards, setShownCards] = useState(
    // eslint-disable-next-line comma-dangle
    films.slice(0, SHOW_FILMS_COUNT)
  );
  const [count, setCount] = useState(8);

  const handleClick = () => {
    setCount((prevCount) => prevCount + SHOW_FILMS_COUNT);
  };

  useEffect(() => {
    setShownCards(films.slice(0, count));
  }, [count, films]);

  useEffect(() => {
    setCount(SHOW_FILMS_COUNT);
  }, [films]);

  return (
    <>
      <div className="catalog__films-list">
        {shownCards.map((film) => (
          <MovieCard key={film.id} film={film} />
        ))}
      </div>
      {films.length > count && <CatalogMoreButton handleClick={handleClick} />}
    </>
  );
}

export default MovieList;
