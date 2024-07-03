import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { TimePage } from "./routes/TimePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TimePage />
  </React.StrictMode>
);
