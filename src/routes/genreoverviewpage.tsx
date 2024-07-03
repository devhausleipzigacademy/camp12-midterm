import { useState } from "react";
import { GenreButton } from "../components/genre";
import { genres, Genre } from "../utils/genre";
import { Button } from "../components/button";
import { IoIosArrowBack } from "react-icons/io";

export function GenreOverviewPage() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

  const handleGenreClick = (genre: Genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const handleConfirmClick = () => {
    console.log("Selected genres:", selectedGenres);
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col p-2">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handleBackClick} className="text-white text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="text-white text-xl font-bold">Genres</h1>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-4 place-items-center">
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
        onClick={handleConfirmClick}
      >
        Confirm selected Genres
      </Button>
    </div>
  );
}

export default GenreOverviewPage;
