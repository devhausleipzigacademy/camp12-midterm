import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GenreButton } from "../components/genre";
import { genres, Genre } from "../utils/genre";
import { Button } from "../components/button";
import { IoIosArrowBack } from "react-icons/io";

export function GenreOverviewPage() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const navigate = useNavigate();

  const handleGenreClick = (genre: Genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col p-4">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate("/")} className="text-white text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="text-white text-xl font-bold">Genres</h1>
        <div></div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center">
        {genres.map((genre) => (
          <GenreButton
            key={genre}
            genre={genre}
            selected={selectedGenres.includes(genre)}
            onSelect={() => handleGenreClick(genre)}
          />
        ))}
      </div>
      <div className="flex gap-1 mt-4 text-white-dimmed text-center">
        <div className="text-white font-bold">{selectedGenres.length}</div>{" "}
        Genres selected
      </div>
      <Button
        className="mt-auto"
        variant="primary"
        onClick={() => console.log("Selected genres:", selectedGenres)}
      >
        Confirm selected Genres
      </Button>
    </div>
  );
}

export default GenreOverviewPage;
