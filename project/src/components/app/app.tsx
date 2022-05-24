import { Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main-page/main-page';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import Signin from '../../pages/signin/signin';
import { FilmType } from '../../types/film';
import { ReviewsType } from '../../types/reviews';
import ProtectedRoute from '../protected-route/protected-route';

interface AppProps {
  title: string,
  genre: string,
  release: string,
  image: string,
  poster: string
  films: FilmType[],
  reviews: ReviewsType[]
}

function App ({title, genre, release, image, poster, films, reviews}: AppProps): JSX.Element {
  return (
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <MainPage title={title} genre={genre} release={release} image={image} poster={poster} />
      </Route>
      <Route path={AppRoute.SIGNIN} exact>
        <Signin />
      </Route>
      <Route path={AppRoute.FILM} exact>
        <Film />
      </Route>
      <Route path={AppRoute.PLAYER} exact>
        <Player />
      </Route>
      <Route path={AppRoute.ADD_REVIEW} exact>
        <AddReview />
      </Route>
      <ProtectedRoute
        exact
        path={AppRoute.MY_LIST}
        render={() => <MyList />}
      >
      </ProtectedRoute>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
