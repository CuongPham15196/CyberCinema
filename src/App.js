import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "Pages/HomeTemplate";
import PageNotFound from "Pages/PageNotFound";
import { routerHome, routerAdmin } from "Route";

function App() {
  const showLayoutHome = (routerHome) => {
    return routerHome?.map((page, index) => {
      return (
        <HomeTemplate path={page.path} Component={page.component} exact={page.exact} key={index} />
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routerHome)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
