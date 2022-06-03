import { configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { createApi } from '../services/api';
import filmsSlice from './film-data/filmsSlice';

export const api = createApi();

const store = configureStore({
  reducer: {
    [NameSpace.films]: filmsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
