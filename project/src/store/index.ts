import { configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { createApi } from '../services/api';
import filmsSlice from './film-data/filmsSlice';
import { redirect } from './middlewares/redirect';
import userSlice from './user/userSlice';

export const api = createApi();

const store = configureStore({
  reducer: {
    [NameSpace.films]: filmsSlice,
    [NameSpace.user]: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
