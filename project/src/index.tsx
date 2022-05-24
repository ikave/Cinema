import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App title='The Grand Budapest Hotel' genre='Drama' release='2014' image='img/bg-the-grand-budapest-hotel.jpg' poster='img/the-grand-budapest-hotel-poster.jpg' />
  </React.StrictMode>,
  document.getElementById('root'));
