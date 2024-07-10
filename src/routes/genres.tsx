import { useState } from "react";
import { GenreButton } from "../components/genre";
import { knownGenres, Genre } from "../utils/genre";
import { Button } from "../components/button";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";

export default function GenreOverviewPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedGenres, setSelectedGenres] = useState<Genre[]>(location.state);

  const handleGenreClick = (genre: Genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  function navigateBack() {
    navigate("/");
  }

  function navigateBackWithData() {
    navigate("/", { state: { selectedGenres } });
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col p-3">
      <div className="flex items-center justify-between mb-4">
        <button onClick={navigateBack} className="mb-12 text-white text-sm">
          <IoIosArrowBack />
        </button>
        <h1 className="mb-12 text-white text-sm font-semibold">Genres</h1>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-4 place-items-center">
        {knownGenres.map((genre) => (
          <GenreButton
            key={genre}
            genre={genre}
            selected={selectedGenres.includes(genre)}
            onClick={() => handleGenreClick(genre)}
          />
        ))}
      </div>
      <div className=" w-full flex gap-1 mt-11 text-white-dimmed text-sm text-center">
        <div className="text-white font-semibold">{selectedGenres.length}</div>{" "}
        Genres selected
      </div>
      <Button className="mt-4" variant="primary" onClick={navigateBackWithData}>
        Confirm selected Genres
      </Button>
    </div>
  );
}
