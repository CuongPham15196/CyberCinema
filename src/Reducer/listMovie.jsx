import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const listMovieApi = createAsyncThunk("listMovie/listMovieApi", async () => {
  return await movieService.listMovieApi();
});

const listMovie = createSlice({
  name: "listMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [listMovieApi.pending]: (state) => {
      state.loading = true;
      state.data = null;
      state.err = null;
    },
    [listMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [listMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = listMovie.actions;
export default listMovie.reducer;
