import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

import Footer from '../../layout/footer';
import Header from '../../layout/header';
import MovieList from '../../components/movie-list/movie-list';
import GenreList from '../../components/genre-list/genre-list';
import Spinner from '../../components/spinner/spinner';
import { useAppSelector } from '../../hooks';

function MainPage(): JSX.Element {
  const { films, isLoading, promo, gengeList } = useAppSelector(
    // eslint-disable-next-line comma-dangle
    (state) => state.FILMS
  );

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promo.posterImage}
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${promo.id}`}
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
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <GenreList genres={gengeList} />
              <MovieList films={films} />
            </>
          )}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
