import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { TicketPage } from "./layouts/TicketPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TicketPage
      img="no image"
      title="movie"
      date="13 March"
      time="14:00"
      price={44.67}
      seats={["C-1", "C-2", "C-3"]}
      barcode="1231231"
    />
  </React.StrictMode>
);
