import { useState } from "react";
import { genres } from "../utils/data";
import FilterButton from "../components/FilterButton";

export default function GenreOverview() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (name: string) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(name)
        ? prevSelectedGenres.filter((genre) => genre !== name)
        : [...prevSelectedGenres, name]
    );
  };

  return (
    <section className="flex flex-col bg-dark px-8">
      <div className="flex flex-row justify-between">
        <span className="text-white">{"<"}</span>
        <h1 className="text-white">Genres</h1>
        <span></span>
      </div>
      <div className="grid grid-flow-row grid-cols-4 text-center gap-4">
        {genres.map((genre) => (
          <FilterButton
            key={genre.name}
            name={genre.name}
            icon={genre.icon}
            isSelected={selectedGenres.includes(genre.name)}
            onClick={() => toggleGenre(genre.name)}
          />
        ))}
      </div>
      <div className="flex flex-row">
        <span className="text-white">{selectedGenres.length}&nbsp;</span>
        <span className="text-white-dimmed">genres selected</span>
      </div>
      <button className="bg-yellow text-white">Confirm selected Genres</button>
    </section>
  );
}
