import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const detailMovieApi = createAsyncThunk(
  "detailMovie/detailMovieApi",
  async (maPhim, thunkApi) => {
    return await movieService.detailMovieApi(maPhim);
  }
);

const detailMovie = createSlice({
  name: "detailMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [detailMovieApi.pending]: (state) => {
      state.loading = true;
      state.data = null;
      state.err = null;
    },
    [detailMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [detailMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = detailMovie.actions;
export default detailMovie.reducer;
