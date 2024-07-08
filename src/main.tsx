import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { LoginPage } from "./routes/login";
import { MovieDetails } from "./routes/movie-details";

import { NavBarLayout } from "./layouts/navbar-layout";
import { Homepage } from "./routes/home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import BookmarkedMovies from "./routes/bookmarks";
import { ProfileCustomization } from "./routes/profile-customization";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    // element: <LoginPage />,
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
        element: <ProfileCustomization />,
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
        element: <MovieDetails />,
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
    <RouterProvider router={router} />
    {/* <NavBar></NavBar>
    <div className="bg-dark p-20 h-screen grid grid-cols-4 gap-20">
      <Member
        name={"Jake Jakeson"}
        role={"Foo the Fork"}
        image={"https://i.imgflip.com/qixjk.jpg"}
      />
      <div className="bg-dark-light"></div>
      <div className="bg-white"></div>
      <div className="bg-white-dimmed"></div>
      <div className="bg-white-dimmed-heavy"></div>
      <div className="bg-yellow"></div>
      <div className="bg-red"></div>
      <div className="bg-green"></div>
    </div> */}
  </React.StrictMode>
);
