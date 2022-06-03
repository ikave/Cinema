import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { movie } from '../../mocks/film';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmType } from '../../types/film';
import { fetchFilms } from '../api-action';

type FilmsState = {
  films: FilmType[];
  isLoading: boolean;
  promo: FilmType;
  gengeList: string[];
};

const initialState: FilmsState = {
  films: [],
  isLoading: true,
  promo: movie,
  gengeList: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    loadFilms(state, action: PayloadAction<FilmType[]>) {
      state.films = action.payload;
    },
    loadPromo(state, action: PayloadAction<FilmType>) {
      state.promo = action.payload;
    },
    setGenres(state, action) {
      state.gengeList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { loadFilms, loadPromo, setGenres } = filmsSlice.actions;
export default filmsSlice.reducer;
