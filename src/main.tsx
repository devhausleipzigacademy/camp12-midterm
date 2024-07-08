import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import { LoginPage } from "./routes/LoginPage";
import { ProfileCustomization } from "./routes/profile-customization";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <ProfileCustomization />,
    // element: <LoginPage />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
