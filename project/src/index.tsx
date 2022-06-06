import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { favoritesFilms } from './mocks/favorites-films';
import { movie } from './mocks/film';
import { Provider } from 'react-redux';
import store from './store';
import { checkUserAuth, fetchFilms, fetchPromo } from './store/api-action';

store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(checkUserAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} favoritesFilms={favoritesFilms} movie={movie} />
    </Provider>
  </React.StrictMode>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);
