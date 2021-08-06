import { RootState } from "./../configStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Movie {
  id: string;
  backgroundImg: string;
  cardImg: string;
  description: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
}

interface MovieState {
  recommend: Movie[] | null;
  trending: Movie[] | null;
  new: Movie[] | null;
  original: Movie[] | null;
}

const initialState: MovieState = {
  recommend: null,
  trending: null,
  new: null,
  original: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieState>) => {
      state.recommend = action.payload.recommend;
      state.trending = action.payload.trending;
      state.new = action.payload.new;
      state.original = action.payload.original;
    },
  },
});
export const getRecommends = (state: RootState) => state.movies.recommend;
export const getTrendings = (state: RootState) => state.movies.trending;
export const getNews = (state: RootState) => state.movies.new;
export const getOriginals = (state: RootState) => state.movies.original;
export const getAllMovies = (state: RootState) => state.movies;
export default movieSlice.reducer;
export const { setMovies } = movieSlice.actions;
