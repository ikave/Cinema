import browserHistory from '../../browser-history';
import { Middleware } from '@reduxjs/toolkit';

export const redirect: Middleware = (_store) => (next) => (action) => {
  if (action.type === 'user/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
