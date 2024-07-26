import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RegistrationPage } from "./routes/register-page";
import { LoginPage } from "./routes/login";
import { MovieDetails } from "./routes/movie-details";
import { NavBarLayout } from "./layouts/navbar-layout";
import { Homepage } from "./routes/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BookmarkedMovies from "./routes/bookmarks";
import { CastPage } from "./routes/cast-page";
// import { MoviePage } from "./components/movie-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProfileCustomization } from "./routes/profile-customization";
import { TimePage } from "./routes/select-time";
import { Movies } from "./routes/movies";
import GenreOverviewPage from "./routes/genres";
import { Ticket } from "./routes/ticket";
import { ReservationPage } from "./routes/reservation-page";

const queryClient = new QueryClient();

const router = createBrowserRouter([
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
        element: <ProfileCustomization />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/genres",
    element: <GenreOverviewPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
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
        element: <MovieDetails />,
      },
      {
        path: "cast-and-crew",
        element: <CastPage />,
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
        element: <Ticket />,
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
