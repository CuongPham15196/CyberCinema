import { combineReducers } from "redux";
import listMovie from "./listMovie";
import showTimesMovie from "./showTimesMoive";
import listCinema from "./listCinema";
import listMovieShowTimeByCinema from "./listMovieShowTimeByCinema";
import listInformationCinema from "./listInformationCinema";
import userLogin from "./userLogin";
import userSignUp from "./userSignUp";

const rootReducer = combineReducers({
  listMovie,
  showTimesMovie,
  listCinema,
  listMovieShowTimeByCinema,
  listInformationCinema,
  userLogin,
  userSignUp,
});

export default rootReducer;
