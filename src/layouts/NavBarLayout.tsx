import { NavBar } from "../components/NavBar";
import {
  FilmIcon,
  HomeIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export function NavBarLayout() {
  const navItems = [
    { icon: HomeIcon, route: "/" },
    { icon: FilmIcon, route: "movies" },
    { icon: QueueListIcon, route: "bookmarks" },
    { icon: UserIcon, route: "profile" },
  ];

  return (
    <footer>
      <nav>
        <NavBar items={navItems} />
      </nav>
    </footer>
  );
}
