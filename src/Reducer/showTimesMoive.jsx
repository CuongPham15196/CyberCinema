import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "Services";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export const showTimesMovieApi = createAsyncThunk(
  "showTimesMovie/showTimesMovieApi",
  async (id) => {
    return await movieService.showTimesMovieApi(id);
  }
);

const showTimesMoive = createSlice({
  name: "showTimesMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [showTimesMovieApi.pending]: (state) => {
      state.loading = true;
      state.data = null;
      state.err = null;
    },
    [showTimesMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.err = null;
    },
    [showTimesMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

export const {} = showTimesMoive.actions;
export default showTimesMoive.reducer;
