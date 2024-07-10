import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginPage } from "./routes/login";
import { MovieDetails } from "./routes/movie-details";
import { NavBarLayout } from "./layouts/navbar-layout";
import { Homepage } from "./routes/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BookmarkedMovies from "./routes/bookmarks";
import { TimePage } from "./routes/select-time";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Movies } from "./routes/movies";
import { ReservationPage } from "./layouts/reservation-page";

const queryClient = new QueryClient();

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
        element: <MovieDetails movieId={748783} />,
      },
      {
        path: "cast-and-crew",
        element: <p>Cast and Crew Page</p>,
      },
      {
        path: "select-time",
        element: <TimePage />,
      },
      {
        path: "select-seats",
        element: <ReservationPage />,
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
