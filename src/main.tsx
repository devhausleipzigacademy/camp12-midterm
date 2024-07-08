import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { LoginPage } from "./routes/LoginPage";

import { NavBarLayout } from "./layouts/NavBarLayout";
import { Homepage } from "./routes/Homepage";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

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
    element: (
      <div>
        <Outlet />
        <NavBarLayout />
      </div>
    ),
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
        element: <p>Bookmarks Page</p>,
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
        <p>Full Page</p>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <p>Movie Details Page</p>,
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
