import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav-bar";
import {
  FilmIcon,
  HomeIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useAuthenticated } from "../hooks/useAuthenticated";

export function NavBarLayout() {
  // navigate to login page if no authentifictaion

  useAuthenticated();
  const navItems = [
    { icon: HomeIcon, route: "/" },
    { icon: FilmIcon, route: "movies" },
    { icon: QueueListIcon, route: "bookmarks" },
    { icon: UserIcon, route: "profile" },
  ];

  return (
    <div className="h-screen flex flex-col bg-dark">
      <div className="flex-1">
        <Outlet />
      </div>
      <nav>
        <NavBar items={navItems} />
      </nav>
    </div>
  );
}
