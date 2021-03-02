import HomePage from "Pages/HomeTemplate/HomePage";

const routerHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
];

const routerAdmin = [];

export { routerHome, routerAdmin };
