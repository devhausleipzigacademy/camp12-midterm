import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Input } from "./components/input";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-dark p-20 h-screen grid grid-cols-4 gap-20">
      <div className="bg-dark-light"></div>
      <div className="bg-white"></div>
      <div className="bg-white-dimmed"></div>
      <div className="bg-white-dimmed-heavy"></div>
      <div className="bg-yellow"></div>
      <div className="bg-red"></div>
      <div className="bg-green flex items-center justify-center">
        <Input placeholder="Search" />
      </div>
    </div>
  </React.StrictMode>
);
