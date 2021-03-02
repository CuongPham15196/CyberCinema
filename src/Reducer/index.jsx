import { combineReducers } from "redux";
import listMovie from "./listMovie";
import listMovieForPage from "./listMovieForPage";
import detailMovie from "./detailMovie";
import showTimesMovie from "./showTimesMoive";

const rootReducer = combineReducers({
  listMovie,
  listMovieForPage,
  detailMovie,
  showTimesMovie,
});

export default rootReducer;
