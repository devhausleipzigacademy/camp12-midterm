import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { TabButton } from "../components/tab-buttton";
import { useState } from "react";
import { Member } from "../components/member";
import { useGetSingleMovie } from "../hooks/useGetSingleMovie";
import { NavLink, useParams } from "react-router-dom";

export const CastPage = () => {
  //  movieId:
  const { movieId } = useParams();
  const { data: movie } = useGetSingleMovie(Number(movieId!));
  console.log(movie?.credits);
  // toggle between cast and crew
  const [selectedTab, setSelectedTab] = useState<"cast" | "crew">("cast");

  function members(selectedTab: string) {
    if (selectedTab === "cast") {
      return movie?.credits.cast.map((person) => (
        <Member
          role={person.character}
          name={person.name}
          image={
            person.profile_path === null
              ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              : `https://image.tmdb.org/t/p/w500/${person.profile_path}`
          }
        />
      ));
    } else {
      return movie?.credits.crew.map((person) => (
        <Member
          role={person.job}
          name={person.name}
          image={
            person.profile_path === null
              ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              : `https://image.tmdb.org/t/p/w500/${person.profile_path}`
          }
        />
      ));
    }
  }

  return (
    <div className="bg-dark h-fit">
      <div className="grid grid-cols-4 p-5 gap-4 justify-start items-start">
        <div className="col-span-full items-center justify-center relative px-4">
          <div className="fixed top-0 left-0 w-full bg-dark p-4 z-10 flex flex-col">
            <div className="relative flex items-center">
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <NavLink
                  to={`/movies/${movieId}`}
                  className="absolute left-4 text-white mb-2"
                >
                  <IoIosArrowBack />
                </NavLink>
              </IconContext.Provider>
              <h1 className="text-center text-white w-full mb-2">
                Cast & Crew
              </h1>
            </div>
            <div className="flex justify-around mt-2">
              <TabButton
                selected={selectedTab === "cast"}
                label={"Cast"}
                onSelect={() => setSelectedTab("cast")}
              />
              <TabButton
                selected={selectedTab === "crew"}
                label={"Crew"}
                onSelect={() => setSelectedTab("crew")}
              />
            </div>
          </div>
        </div>
        <div className="col-span-full justify-start">
          {members(selectedTab)}
        </div>
      </div>
    </div>
  );
};
