import SignUp from "Pages/HomeTemplate/SignUp";
import DetailMovie from "Pages/HomeTemplate/DetailMovie";
import DetailCinema from "Pages/HomeTemplate/DetailCinema";
import HomePage from "Pages/HomeTemplate/HomePage";
import Login from "Pages/HomeTemplate/Login";
import CinemaMobile from "Pages/HomeTemplate/CinemaMobile";

const routerHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/dang-nhap",
    component: Login,
    exact: false,
  },
  {
    path: "/dang-ky",
    component: SignUp,
    exact: false,
  },
  {
    path: "/cum-rap",
    component: CinemaMobile,
    exact: false,
  },
  {
    path: "/phim/:maPhim/:tenPhim",
    component: DetailMovie,
    exact: false,
  },
  {
    path: "/rap/:maHeThongRap/:maCumRap",
    component: DetailCinema,
    exact: false,
  },
];

const routerAdmin = [];

export { routerHome, routerAdmin };
