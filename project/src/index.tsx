import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { reviews } from './mocks/reviews';
import { favoritesFilms } from './mocks/favorites-films';
import { movie } from './mocks/film';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        title='The Grand Budapest Hotel'
        genre='Drama'
        release='2014'
        image='img/bg-the-grand-budapest-hotel.jpg'
        poster='img/the-grand-budapest-hotel-poster.jpg'
        films={films}
        reviews={reviews}
        favoritesFilms={favoritesFilms}
        movie={movie}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
