import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginPage } from "./routes/login";
import { MovieDetails } from "./routes/movie-details";
import { NavBarLayout } from "./layouts/navbar-layout";
import { Homepage } from "./routes/home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import BookmarkedMovies from "./routes/bookmarks";
import { CastPage } from "./routes/cast-page";
import { MoviePage } from "./components/movie-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/genres",
    element: <p>Genre Page</p>,
  },
  {
    path: "/",
    element: <NavBarLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "movies",
        element: <p>Movies Page</p>,
      },
      {
        path: "bookmarks",
        element: <BookmarkedMovies />,
      },
      {
        path: "profile",
        element: <p>Profile Page</p>,
      },
    ],
  },
  {
    path: "/movies/:movieId",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <MovieDetails movieId={0} />,
      },
      {
        path: "cast-and-crew",
        element: <CastPage />,
      },
      {
        path: "select-time",
        element: <p>Select Time Page</p>,
      },
      {
        path: "select-seats",
        element: <p>Select Seats Page</p>,
      },
      {
        path: "ticket",
        element: <p>Ticket Page</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
