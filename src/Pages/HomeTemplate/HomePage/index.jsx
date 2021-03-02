import Carousel from "Components/Carousel";
import NavTicket from "Components/NavTicket";
import ListMovie from "Components/ListMovie";
import React from "react";
import { CssBaseline } from "@material-ui/core";

function HomePage(props) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <CssBaseline />
      <Carousel />
      <NavTicket />
      <ListMovie />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, explicabo.</div>
    </div>
  );
}

export default HomePage;
