import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}
