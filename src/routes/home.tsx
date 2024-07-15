import { GenreButton } from "../components/genre";
import { HomepageHeader } from "../components/homepage-header";
import { ComboSearchBox } from "../components/search-box";
import { SectionTitle } from "../components/section-title";
import { useState, useEffect } from "react";
import { Genre } from "../utils/genre";
import { useLocation } from "react-router";
import { useGetMovies } from "../hooks/useGetMovies";
import { useGetGenres } from "../hooks/useGetGenres";
import { Movie } from "../types/movie";

export function Homepage() {
  // If there is data from the genreoverview, use it, else the array is by default empty
  const location = useLocation();
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>(
    location.state?.selectedGenres || []
  );
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  // Get the tanstack queries
  const {
    data: movies,
    isLoading: MovieIsLoading,
    isError: MovieIsError,
  } = useGetMovies();
  const {
    data: genres,
    isLoading: GenreIsLoading,
    isError: GenreIsError,
  } = useGetGenres();

  useEffect(() => {
    // If movies is undefined, abort
    if (!movies) return;
    let filteredMovies: Movie[];
    selectedGenres.length === 0
      ? // if no genres selected, show all movies
        (filteredMovies = movies)
      : // else filter by id
        (filteredMovies = movies.filter((movie: Movie) =>
          // check if any of the ids inside the movie fulfills the condition of
          movie.genre_ids.some((genreId: number) =>
            //selectedGenres containing the genreId of the movie.genre.id
            selectedGenres.includes(
              // if so, return the name of the genre, else an empty string
              genres?.find((g) => g.id === genreId)?.name || ""
            )
          )
        ));
    // get rid of duplicates by turning it into a map and again into an array
    const uniqueMovies = [
      ...new Map(filteredMovies.map((movie) => [movie.id, movie])).values(),
    ];
    setFilteredMovies(uniqueMovies);
  }, [selectedGenres, movies, genres]);

  function handleClick(genre: Genre) {
    // If genre is already in the selectedGenre array, then remove it, else add it
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
        <ComboSearchBox placeholder={"Search"} />
        <div className="flex flex-col gap-4">
          <SectionTitle
            text={"Genre"}
            ShowSeeAll={true}
            route="/genres"
            state={selectedGenres}
          />
          <div className="flex justify-between text-white">
            {GenreIsLoading ? (
              <p>Loading genres...</p>
            ) : GenreIsError ? (
              <p>Error loading genres. Please try again later.</p>
            ) : genres?.length ? (
              genres
                .slice(0, 4)
                .map((genre) => (
                  <GenreButton
                    key={genre.id}
                    genre={genre.name}
                    selected={selectedGenres.includes(genre.name)}
                    onClick={() => handleClick(genre.name)}
                  />
                ))
            ) : (
              <p>No genres available.</p>
            )}
          </div>
        </div>
        <SectionTitle text={"Upcoming Movies"} />
      </div>
      <div className="flex gap-6 overflow-y-hidden scrollbar-hide snap-x h-56 mx-4 text-white">
        {MovieIsLoading ? (
          <p>Loading movies...</p>
        ) : MovieIsError ? (
          <p>Error loading movies. Please try again later.</p>
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
