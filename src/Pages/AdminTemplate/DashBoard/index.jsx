import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { listUserApi } from "Reducer/listUser";
import {listMovieApi} from "Reducer/listMovie"
import Loading from "Components/Loading";
// import HeaderComp from "./HeaderComp/HeaderComp";




function DashBoard(props) {
  const dispatch = useDispatch()
  const loadingListMovies = useSelector(state => state.listMovie.loading)
  useEffect(() => {
    
    dispatch(listMovieApi())
  }, [])
  if( loadingListMovies) return <Loading/>
  return (
   <div>DashBoard</div>
  );
}

export default DashBoard;
