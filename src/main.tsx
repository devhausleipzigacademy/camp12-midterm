import React from "react";
import ReactDOM from "react-dom/client";
import CastPage from "./routes/cast-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./layouts/loginpage";
import { Navbar } from "./layouts/navbar";
import { Home } from "./layouts/homepage";
import { Movies } from "./layouts/movies";
import { Bookmarks } from "./layouts/bookmarks";
import { Profile } from "./layouts/account";
import { Genre } from "./layouts/genre";
import { MovieDetails } from "./layouts/movie-details";
import "./index.css";
import { CastAndCrew } from "./layouts/castAndCrew";
import { TimeSelect } from "./layouts/timeSelect";
import { SeatsSelect } from "./layouts/seatsSelect";
import { TicketPage } from "./layouts/ticketPage";
import { FullPage } from "./layouts/fullPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "bookmarks", element: <Bookmarks /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "/full-page",
    element: <FullPage />,
  },
  {
    path: "/full-page/genre",
    element: <Genre />,
  },
  {
    path: "full-page/movie-details",
    element: <MovieDetails />,
  },
  {
    path: "/full-page/movies",
    element: <Movies />,
  },
  {
    path: "full-page/cast-and-crew",
    element: <CastAndCrew />,
  },
  {
    path: "/full-page/select-time",
    element: <TimeSelect />,
  },
  {
    path: "/full-page/select-seats",
    element: <SeatsSelect />,
  },
  {
    path: "/full-page/tickets",
    element: <TicketPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

import { NavBar } from "./components/nav-bar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
