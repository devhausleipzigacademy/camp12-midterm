import { GenreButton } from "../components/genre";
import { HomepageHeader } from "../components/homepage-header";
import { Input } from "../components/input";
import { SectionTitle } from "../components/section-title";
import { useState } from "react";
import { Genre } from "../utils/genre";
import { getMoviesByGenre } from "../services/tmdb";

export function Homepage() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

  function handleClick(genre: Genre) {
    //Setter funcion with prev as parameter
    setSelectedGenres((prev) =>
      //If in selectedGenres exists genre
      prev.includes(genre)
        ? // then filter it and remove any other films that are not in the genre
          prev.filter((g) => g !== genre)
        : // else return the selectedGenres
          [...prev, genre]
    );

    //getMoviesByGenre(genre);
  }

  return (
    <div className="h-screen bg-dark overflow-hidden">
      <div className="px-5 pt-8 pb-4 flex flex-col gap-6">
        <HomepageHeader
          userName={"Herr Vogel"}
          userImage={
            "https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjulian.b86ca7f2.jpg&w=3840&q=75"
          }
        />
        <Input placeholder={"Search"} icon={undefined} />
        <div className="flex flex-col gap-4">
          <SectionTitle text={"Genre"} />
          <div className="flex justify-between">
            <GenreButton
              genre={"Romance"}
              selected={selectedGenres.includes("Romance")}
              onClick={() => handleClick("Romance")}
            />
            <GenreButton
              genre={"Comedy"}
              selected={selectedGenres.includes("Comedy")}
              onClick={() => handleClick("Comedy")}
            />
            <GenreButton
              genre={"Horror"}
              selected={selectedGenres.includes("Horror")}
              onSelect={() => handleClick("Horror")}
            />
            <GenreButton
              genre={"Drama"}
              selected={selectedGenres.includes("Drama")}
              onSelect={() => handleClick("Drama")}
            />
          </div>
        </div>
        <SectionTitle text={"Upcoming Movies"} />
      </div>
      <div className="flex gap-6 overflow-y-hidden scrollbar-hide snap-x h-56 -mx-5">
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          alt="star wars"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
          alt="shrek"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
          alt="home alone"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          alt="star wars "
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
          alt="shrek"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
          alt="home alone"
        />
      </div>
    </div>
  );
}
