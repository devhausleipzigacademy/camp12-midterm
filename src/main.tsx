import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NavBar } from "./components/nav-bar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <p>Login Page</p>,
  },
  {
    path: "/genres",
    element: <p>Genre Page</p>,
  },
  {
    path: "/",
    element: (
      <div>
        <p>Navbar</p>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <p>Home Page</p>,
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
    <LoginPage />
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
