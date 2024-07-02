import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Outlet />
      <nav className="w-[375px] h-[88px] bg-green text-white flex items-center justify-around">
        <ul className="flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
