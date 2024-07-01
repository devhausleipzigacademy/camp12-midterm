import { useState } from "react";

import {
  FilmIcon,
  HomeIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export function NavBar() {
  const [icon, setIconState] = useState("home");

  return (
    <div className="bg-dark flex pl-16 pr-16 pt-8 pb-8 gap-6 justify-evenly items-center">
      <HomeIcon
        className={`size-6 ${
          icon === "home" ? "text-white" : "text-white-dimmed"
        }`}
        onClick={() => setIconState("home")}
      />

      <FilmIcon
        className={`size-6 ${
          icon === "film" ? "text-white" : "text-white-dimmed"
        }`}
        onClick={() => setIconState("film")}
      />
      <QueueListIcon
        className={`size-6 ${
          icon === "queueList" ? "text-white" : "text-white-dimmed"
        }`}
        onClick={() => setIconState("queueList")}
      />
      <UserIcon
        className={`size-6 ${
          icon === "user" ? "text-white" : "text-white-dimmed"
        }`}
        onClick={() => setIconState("user")}
      />
    </div>
  );
}
