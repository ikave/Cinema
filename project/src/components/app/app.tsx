import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main-page/main-page';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import Signin from '../../pages/signin/signin';
import { FilmType } from '../../types/film';
import { ReviewsType } from '../../types/reviews';
import HistoryRouter from '../history-route/history-route';
import ProtectedRoute from '../protected-route/protected-route';

interface AppProps {
  reviews: ReviewsType[];
  favoritesFilms: FilmType[];
  movie: FilmType;
}

function App({ favoritesFilms, movie, reviews }: AppProps): JSX.Element {
  const auth = useAppSelector((state) => state.USER.authorizationStatus);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.MAIN} element={<MainPage />} />
        <Route path={AppRoute.SIGNIN} element={<Signin />} />
        <Route path={AppRoute.FILM} element={<Film movie={movie} />} />
        <Route path={AppRoute.PLAYER} element={<Player movie={movie} />} />
        <Route
          path={AppRoute.ADD_REVIEW}
          element={<AddReview movie={movie} />}
        />
        <Route
          path={AppRoute.MY_LIST}
          element={
            <ProtectedRoute authorizationStatus={auth}>
              <MyList films={favoritesFilms} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
