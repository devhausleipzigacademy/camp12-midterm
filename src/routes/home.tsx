import { GenreButton } from "../components/genre";
import { HomepageHeader } from "../components/homepage-header";
import { Input } from "../components/search-input";
import { SectionTitle } from "../components/section-title";
import { useState, useEffect } from "react";
import { Genre } from "../utils/genre";
import { getMoviesByGenre } from "../services/tmdb";
import { useLocation } from "react-router";
import { useGetMovies } from "../hooks/useGetMovies";
import { useGetGenres } from "../hooks/useGetGenres";

export function Homepage() {
  const location = useLocation();
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>(
    location.state?.selectedGenres || []
  );
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const genresontop: Genre[] = ["Romance", "Comedy", "Horror", "Drama"];

  // load movies everytime when selectedGenres changes
  useEffect(() => {
    filterMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenres]);

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

  if (MovieIsLoading || GenreIsLoading) {
    return <div>Loading...</div>;
  }

  if (MovieIsError || GenreIsError) {
    return <div>Error loading movies...</div>;
  }

  if (genres) {
    const genreNames = genres.map((genre) => genre.name);
    const genreIds = genres.map((genre) => genre.id);
    console.log(movies);
    console.log(genreIds); // Array von { id: number, name: string }
    console.log(genreNames); // Array von Strings (Genre-Namen)
  }

  async function filterMovies() {
    try {
      //activate loading
      setIsLoading(true);
      // Check if selectedGenres is empty, if so, display all movies / i.o.w disable filtering
      let allMoviesPromises;
      selectedGenres.length === 0
        ? (allMoviesPromises = genresontop.map((genre) =>
            getMoviesByGenre(genre)
          ))
        : (allMoviesPromises = selectedGenres.map((genre) =>
            getMoviesByGenre(genre)
          ));

      const allMoviesResults = await Promise.all(allMoviesPromises);
      const uniqueMovies = [
        // use Spread Operator to make it an array and
        // give it the type Map to get rid of duplicates, by assigning every movie a id as a key
        ...new Map(
          // flat the Array, and return pairs of movieId and the movie itself
          allMoviesResults.flat().map((movie) => [movie.id, movie])
          // use values() as an iterator for the values
        ).values(),
      ];
      setFilteredMovies(uniqueMovies);
    } catch (error) {
      console.error("Error loading movies:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleClick(genre: Genre) {
    setSelectedGenres((prev) =>
      // If the list of all active genres includes the genre then..
      prev.includes(genre)
        ? // remove the genre from the list
          prev.filter((g) => g !== genre)
        : // else return all elements with the newly added genre
          [...prev, genre]
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
          <SectionTitle
            text={"Genre"}
            ShowSeeAll={true}
            route="/genres"
            state={selectedGenres}
          />
          <div className="flex justify-between">
            {genres?.slice(0, 4).map((genre) => (
              <GenreButton
                key={genre.id}
                genre={genre.name}
                selected={selectedGenres.includes(genre.name)}
                onClick={() => handleClick(genre.name)}
              />
            ))}
          </div>
        </div>
        <SectionTitle text={"Upcoming Movies"} />
      </div>

      <div className="flex gap-6 overflow-y-hidden scrollbar-hide snap-x h-56 mx-4 text-white">
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
