/* eslint-disable comma-dangle */
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Details from '../../components/details/details';
import Overview from '../../components/overview/overview';
import Reviews from '../../components/reviews/reviews';
import SimilarList from '../../components/similar-list/similar-list';
import Tabs from '../../components/tabs/tabs';
import { AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../layout/footer';
import Header from '../../layout/header';
import {
  fetchComments,
  fetchFilm,
  fetchSimilarFilms,
} from '../../store/api-action';
import { FilmType } from '../../types/film';
import NotFound from '../not-found/not-found';

function Film(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie: FilmType = useAppSelector((state) => state.FILMS.activeFilm);
  const auth = useAppSelector((state) => state.USER.authorizationStatus);

  useEffect(() => {
    dispatch(fetchFilm(Number(id)));
    dispatch(fetchSimilarFilms(Number(id)));
    dispatch(fetchComments(Number(id)));
  }, [dispatch, id]);

  const tabs = [
    {
      title: 'Overview',
      content: <Overview />,
    },
    {
      title: 'Details',
      content: <Details />,
    },
    {
      title: 'Reviews',
      content: <Reviews />,
    },
  ];

  if (!movie.id) {
    return <NotFound />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {auth === AuthStatus.Auth && (
                  <Link
                    to={`/films/${id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={movie.posterImage}
                alt={movie.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <SimilarList />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
