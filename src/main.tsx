import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SeatPrice from "./components/SeatPrice";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-dark p-20 h-screen grid grid-cols-4 gap-20">
      <SeatPrice number={1} category={{ title: " Front", price: 12.95 }} />
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
