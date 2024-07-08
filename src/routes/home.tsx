import { GenreButton } from "../components/genre";
import { HomepageHeader } from "../components/homepage-header";
import { Input } from "../components/search-input";
import { SectionTitle } from "../components/section-title";
import { useState, useEffect } from "react";
import { Genre } from "../utils/genre";
import { getMoviesByGenre } from "../services/tmdb";

export function Homepage() {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const genres: Genre[] = ["Romance", "Comedy", "Horror", "Drama"];

  useEffect(() => {
    loadMovies();
  }, [selectedGenres]);

  async function loadMovies() {
    setIsLoading(true);
    try {
      if (selectedGenres.length === 0) {
        // if no genres selected, map every movie onto the page
        const allMoviesPromises = genres.map((genre) =>
          getMoviesByGenre(genre)
        );
        const allMoviesResults = await Promise.all(allMoviesPromises);
        const uniqueMovies = Array.from(
          new Set(allMoviesResults.flat().map((movie) => movie.id))
        ).map((id) => allMoviesResults.flat().find((movie) => movie.id === id));
        setFilteredMovies(uniqueMovies);
      } else {
        // load all movies with the genre
        const moviePromises = selectedGenres.map((genre) =>
          getMoviesByGenre(genre)
        );
        const movieResults = await Promise.all(moviePromises);
        const uniqueMovies = Array.from(
          new Set(movieResults.flat().map((movie) => movie.id))
        ).map((id) => movieResults.flat().find((movie) => movie.id === id));
        setFilteredMovies(uniqueMovies);
      }
    } catch (error) {
      // catch error
      console.error("Error loading movies:", error);
    } finally {
      // finish loading either way
      setIsLoading(false);
    }
  }

  function handleClick(genre: Genre) {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  }

  return (
    <div className="bg-dark overflow-hidden pt-8">
      <div className="px-5 mb-4 flex flex-col gap-6">
        <HomepageHeader
          userName={"Herr Vogel"}
          userImage={
            "https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjulian.b86ca7f2.jpg&w=3840&q=75"
          }
        />
        <Input placeholder={"Search"} />
        <div className="flex flex-col gap-4">
          <SectionTitle text={"Genre"} />
          <div className="flex justify-between">
            {genres.map((genre) => (
              <GenreButton
                key={genre}
                genre={genre}
                selected={selectedGenres.includes(genre)}
                onClick={() => handleClick(genre)}
              />
            ))}
          </div>
        </div>
        <SectionTitle text={"Upcoming Movies"} />
      </div>

      <div className="flex gap-6 overflow-y-hidden scrollbar-hide snap-x h-56 -mx-5">
        {isLoading ? (
          <p>Loading movies...</p>
        ) : filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <img
              key={movie.id}
              className="rounded-md snap-center"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          ))
        ) : (
          <p>No movies found for the selected genres.</p>
        )}
      </div>
    </div>
  );
}
