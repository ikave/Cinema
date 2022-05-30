import { Dispatch } from 'redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_GENRE, genres } from '../../const';
import { changeActiveGenre } from '../../store/action';
import { Actions } from '../../types/action';
import { connect, ConnectedProps } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeActiveGenre(genre: string) {
    dispatch(changeActiveGenre(genre));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function GenreList({
  onChangeActiveGenre,
}: ConnectedComponentProps): JSX.Element {
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
                onChangeActiveGenre(genre);
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
export { GenreList };
export default connector(GenreList);
