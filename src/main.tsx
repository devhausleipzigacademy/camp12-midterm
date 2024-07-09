import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginPage } from "./routes/login";
import { MovieDetails } from "./routes/movie-details";
import { NavBarLayout } from "./layouts/navbar-layout";
import { Homepage } from "./routes/home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import BookmarkedMovies from "./routes/bookmarks";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Movies } from "./routes/movies";
import GenreOverviewPage from "./routes/genres";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/genres",
    element: <GenreOverviewPage />,
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
        element: <Movies />,
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
        element: <p>Cast and Crew Page</p>,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
