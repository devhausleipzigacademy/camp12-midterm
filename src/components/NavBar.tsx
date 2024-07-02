import { useState } from "react";

import {
  FilmIcon,
  HomeIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export function NavBar() {
  const [icon, setIconState] = useState("home");

  const navItems = [
    { icon: HomeIcon, state: "home" },
    { icon: FilmIcon, state: "film" },
    { icon: QueueListIcon, state: "queueList" },
    { icon: UserIcon, state: "user" },
  ];

  return (
    <div className="bg-dark flex pl-16 pr-16 pt-8 pb-8 gap-6 justify-evenly items-center">
      {navItems.map((item, index) => (
        <item.icon
          key={index}
          className={`size-6 ${
            icon === item.state ? "text-white" : "text-white-dimmed"
          }`}
          onClick={() => setIconState(item.state)}
        />
      ))}
    </div>
  );
}
