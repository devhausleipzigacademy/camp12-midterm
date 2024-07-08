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
    <div className="min-h-screen bg-dark flex flex-col p-3">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handleBackClick} className="mb-12 text-white text-sm">
          <IoIosArrowBack />
        </button>
        <h1 className="mb-12 text-white text-sm font-semibold">Genres</h1>
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
      <div className=" w-full flex gap-1 mt-11 text-white-dimmed text-sm text-center">
        <div className="text-white font-semibold">{selectedGenres.length}</div>{" "}
        Genres selected
      </div>
      <Button className="mt-4" variant="primary" onClick={handleConfirmClick}>
        Confirm selected Genres
      </Button>
    </div>
  );
}

export default GenreOverviewPage;
