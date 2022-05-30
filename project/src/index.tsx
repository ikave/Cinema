import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { favoritesFilms } from './mocks/favorites-films';
import { movie } from './mocks/film';
import { Provider } from 'react-redux';
import { updateStore } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createApi } from './services/api';
import { requireAuthorization } from './store/action';
import { AuthStatus } from './const';

const api = createApi(() =>
  // eslint-disable-next-line comma-dangle
  store.dispatch(requireAuthorization(AuthStatus.NoAuth))
);

const store = createStore(
  updateStore,
  // eslint-disable-next-line comma-dangle
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App reviews={reviews} favoritesFilms={favoritesFilms} movie={movie} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);
