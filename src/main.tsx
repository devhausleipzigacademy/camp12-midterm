import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Footer from "./components/NavigationBar";
import GenreOverview from "./layouts/GenreOverview";
import MovieDetail from "./layouts/MovieDetail";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MovieDetail />
    <GenreOverview />
    <Footer />
  </React.StrictMode>
);
