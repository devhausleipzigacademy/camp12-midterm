import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Member from "./components/Member";
import { NavBar } from "./components/NavBar";
import { LoginPage } from "./routes/LoginPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginPage />
    {/* <NavBar></NavBar>
    <div className="bg-dark p-20 h-screen grid grid-cols-4 gap-20">
      <Member
        name={"Jake Jakeson"}
        role={"Foo the Fork"}
        image={"https://i.imgflip.com/qixjk.jpg"}
      />
      <div className="bg-dark-light"></div>
      <div className="bg-white"></div>
      <div className="bg-white-dimmed"></div>
      <div className="bg-white-dimmed-heavy"></div>
      <div className="bg-yellow"></div>
      <div className="bg-red"></div>
      <div className="bg-green"></div>
    </div> */}
  </React.StrictMode>
);
