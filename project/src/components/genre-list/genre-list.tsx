import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_GENRE } from '../../const';

interface GenreListProps {
  genres: string[];
}

function GenreList({ genres }: GenreListProps): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        if (activeGenre === genre) {
          return (
            <li
              key={genre}
              className="catalog__genres-item catalog__genres-item--active"
            >
              <Link
                to="/"
                className="catalog__genres-link"
                onClick={(evt) => evt.preventDefault()}
              >
                {genre}
              </Link>
            </li>
          );
        }

        return (
          <li
            key={genre}
            className="catalog__genres-item"
            onClick={() => setActiveGenre(genre)}
          >
            <Link
              to="/"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                // onChangeActiveGenre(genre);
              }}
            >
              {genre}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default GenreList;
