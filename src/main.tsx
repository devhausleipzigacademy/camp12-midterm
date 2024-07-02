import React from "react";
import ReactDOM from "react-dom/client";
import CastPage from "./layouts/CastPage";

import "./index.css";

import { NavBar } from "./components/NavBar";

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
      <div className="bg-green"></div>
    </div>
  </React.StrictMode>
);
