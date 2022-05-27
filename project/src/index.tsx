import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { favoritesFilms } from './mocks/favorites-films';
import { movie } from './mocks/film';
import { Provider } from 'react-redux';
import { updateStore } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(updateStore, composeWithDevTools());

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
