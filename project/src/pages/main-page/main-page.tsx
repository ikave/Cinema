import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { FilmType } from '../../types/film';
import { State } from '../../types/state';

import { AppRoute, DEFAULT_GENRE } from '../../const';

import Footer from '../../layout/footer';
import Header from '../../layout/header';
import MovieList from '../../components/movie-list/movie-list';
import GenreList from '../../components/genre-list/genre-list';

interface MainPageProps {
  movie: FilmType;
}

const mapStateToProps = ({ genre, films }: State) => ({
  genre,
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainPageProps;

function MainPage({
  movie,
  films,
  genre,
}: ConnectedComponentProps): JSX.Element {
  const [filteredFilms, setFilteredFilms] = useState(films);

  const getFilteredFilms = () => {
    if (genre === DEFAULT_GENRE) {
      return films;
    }
    return films.filter((film) => film.genre === genre);
  };

  useEffect(() => {
    setFilteredFilms(getFilteredFilms());
  }, [genre, films]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={movie.posterImage}
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${movie.id}`}
                  className="btn btn--play film-card__button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  to={AppRoute.MY_LIST}
                  className="btn btn--list film-card__button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />

          <MovieList films={filteredFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export { MainPage };

export default connector(MainPage);
