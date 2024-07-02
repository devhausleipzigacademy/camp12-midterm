import React from "react";
import ReactDOM from "react-dom/client";
import CastPage from "./routes/cast-page";

import "./index.css";
import NowPlayingMovies from "./components/nowplayingmovies";

import { NavBar } from "./components/nav-bar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <CastPage
      name={"Jake Jakeson"}
      role={"Foo the Fork"}
      image={"https://i.imgflip.com/qixjk.jpg"}
    ></CastPage>
    <div className="bg-dark p-20 h-screen grid grid-cols-4 gap-20">
      <div className="bg-dark-light"></div>
      <div className="bg-white"></div>
      <div className="bg-white-dimmed"></div>
      <div className="bg-white-dimmed-heavy"></div>
      <div className="bg-yellow"></div>
      <div className="bg-red"></div>
      <div className="bg-green flex items-center justify-center"></div>
    </div>
    <div>
      <NowPlayingMovies />
    </div>
  </React.StrictMode>
);
