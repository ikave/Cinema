import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { movie } from '../../mocks/film';
import { FilmType } from '../../types/film';
import { CommentsType } from '../../types/reviews';
import { fetchFilms } from '../api-action';

type FilmsState = {
  films: FilmType[];
  activeFilm: FilmType;
  similar: FilmType[];
  comments: CommentsType[];
  isLoading: boolean;
  promo: FilmType;
  gengeList: string[];
};

const initialState: FilmsState = {
  films: [],
  similar: [],
  comments: [],
  activeFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
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
    loadFilmId(state, action: PayloadAction<FilmType>) {
      state.activeFilm = action.payload;
    },
    loadSimilarFilms(state, action: PayloadAction<FilmType[]>) {
      state.similar = action.payload;
    },
    loadComments(state, action: PayloadAction<CommentsType[]>) {
      state.comments = action.payload;
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

export const {
  loadFilms,
  loadPromo,
  setGenres,
  loadFilmId,
  loadSimilarFilms,
  loadComments,
} = filmsSlice.actions;
export default filmsSlice.reducer;
