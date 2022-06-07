import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../layout/header';
import { fetchFilm } from '../../store/api-action';

function AddReview(): JSX.Element {
  const movie = useAppSelector((state) => state.FILMS.activeFilm);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(Number(id)));
  }, [dispatch, id]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">
                  {movie.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={movie.posterImage}
            alt={movie.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm id={Number(id)} />
      </div>
    </section>
  );
}

export default AddReview;
