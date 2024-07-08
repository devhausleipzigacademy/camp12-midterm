import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { TabButton } from "../components/tab-buttton";
import { useState } from "react";
import { Member } from "../components/member";

const cast = [
  {
    name: "Chris Hemsworth",
    role: "Thor",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_UX150_CR0,0,150,218_AL_.jpg",
  },
  {
    name: "Anthony Hopkins",
    role: "Odin",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTg5ODk1NTc5Ml5BMl5BanBnXkFtZTYwMjAwOTI4._V1_UY218_CR3,0,150,218_AL_.jpg",
  },
  {
    name: "Natalie Portman",
    role: "Jane Foster",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX150_CR0,0,150,218_AL_.jpg",
  },
  {
    name: "Tom Hiddleston",
    role: "Loki",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY218_CR5,0,150,218_AL_.jpg",
  },
];

const crew = [
  {
    name: "Kenneth Branagh",
    role: "Director",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI0NTQ4Mjk5Ml5BMl5BanBnXkFtZTcwMDc1NjkzNw@@._V1_UY109_CR0,0,75,109_AL_.jpg",
  },
  {
    name: "Kenneth Branagh",
    role: "Director",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI0NTQ4Mjk5Ml5BMl5BanBnXkFtZTcwMDc1NjkzNw@@._V1_UY109_CR0,0,75,109_AL_.jpg",
  },
  {
    name: "Kenneth Branagh",
    role: "Director",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI0NTQ4Mjk5Ml5BMl5BanBnXkFtZTcwMDc1NjkzNw@@._V1_UY109_CR0,0,75,109_AL_.jpg",
  },
];

export const CastPage = () => {
  const [selectedTab, setSelectedTab] = useState<"cast" | "crew">("cast");

  function members(selectedTab: string) {
    if (selectedTab === "cast") {
      return cast.map((person) => (
        <Member role={person.role} name={person.name} image={person.image} />
      ));
    } else {
      return crew.map((person) => (
        <Member role={person.role} name={person.name} image={person.image} />
      ));
    }
  }

  return (
    <div className="bg-dark min-h-screen grid grid-cols-4 p-5 gap-4 justify-start items-start">
      <div className=" col-span-full items-center justify-center relative px-4">
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <div className="absolute left-4 text-white mb-2">
            <IoIosArrowBack />
          </div>
        </IconContext.Provider>

        <h1 className="text-center text-white mb-2">Cast & Crew</h1>
      </div>

      <div className="col-start-1 col-end-3 mb-1">
        <TabButton
          selected={selectedTab === "cast"}
          label={"Cast"}
          onSelect={() => setSelectedTab("cast")}
        />
      </div>

      <div className="col-start-3 col-end-5 mb-1">
        <TabButton
          selected={selectedTab === "crew"}
          label={"Crew"}
          onSelect={() => setSelectedTab("crew")}
        />
      </div>

      <div className="col-span-full justify-start">{members(selectedTab)}</div>
    </div>
  );
};
