import NavBarHome from "Components/NavBarHome";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Loading from "Components/Loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listMovieApi } from "Reducer/listMovie";

function HomeLayout(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.listMovie.loading);

  useEffect(() => {
    dispatch(listMovieApi());
  }, []);

  if (loading) return <Loading loading={loading} />;

  return (
    <div>
      <NavBarHome />
      {props.children}
    </div>
  );
}

function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}

export default HomeTemplate;
