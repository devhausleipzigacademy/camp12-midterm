import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { TabButton } from "../components/tab-buttton";
import { useState } from "react";
import { Member } from "../components/member";
import { useGetSingleMovie } from "../hooks/useGetSingleMovie";
import { Link, useParams } from "react-router-dom";

export const CastPage = () => {
  //  movieId:
  const { movieId } = useParams();
  const { data: movie } = useGetSingleMovie(movieId!);
  console.log(movie?.credits);
  // toggle between cast and crew
  const [selectedTab, setSelectedTab] = useState<"cast" | "crew">("cast");

  function members(selectedTab: string) {
    if (selectedTab === "cast") {
      return movie?.credits.cast.map((person) => (
        <Member
          key={person.id}
          role={person.character}
          name={person.name}
          image={
            person.profile_path === null
              ? "/tDzCAAJinH4Xt3lSKsajfiTyRK9.jpg"
              : person.profile_path
          }
        />
      ));
    } else {
      return movie?.credits.crew.map((person) => (
        <Member
          key={person.id}
          role={person.job}
          name={person.name}
          image={
            person.profile_path === null
              ? "/tDzCAAJinH4Xt3lSKsajfiTyRK9.jpg"
              : person.profile_path
          }
        />
      ));
    }
  }

  return (
    <div className="bg-dark">
      <div className=" grid grid-cols-4 p-5 gap-4 justify-start items-start">
        <div className=" col-span-full items-center justify-center relative px-4">
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <Link
              to="/movies/:movieId"
              className="absolute left-4 text-white mb-2"
            >
              <IoIosArrowBack />
            </Link>
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

        <div className="col-span-full justify-start">
          {members(selectedTab)}
        </div>
      </div>
    </div>
  );
};
