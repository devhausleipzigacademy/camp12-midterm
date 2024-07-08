import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav-bar";

export default function Home() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}
