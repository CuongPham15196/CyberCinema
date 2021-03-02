import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const listMovieForPageApi = createAsyncThunk(
  "listMovie/listMovieForPageApi",
  async (page) => {
    return await movieService.listMovieForPageApi(page);
  }
);

const listMovieForPage = createSlice({
  name: "listMovieForPage",
  initialState,
  reducers: {},
  extraReducers: {
    [listMovieForPageApi.pending]: (state) => {
      state.loading = true;
      state.data = null;
      state.err = null;
    },
    [listMovieForPageApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [listMovieForPageApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = listMovieForPage.actions;
export default listMovieForPage.reducer;
