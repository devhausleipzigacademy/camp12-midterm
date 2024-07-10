import { GenreButton } from "../components/genre";
import { HomepageHeader } from "../components/homepage-header";
import { LoginInput } from "../components/input";
import { SectionTitle } from "../components/section-title";
import { useState, useEffect } from "react";
import { Genre } from "../utils/genre";
import { getMoviesByGenre } from "../services/tmdb";
import { useLocation } from "react-router";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TODOS:
// Implement the getmovies and getgenres function to display all movies or filtered by genre movies
// display only some of the genres at first and link the genreoverview page so that genres can be selected
// fix Input field
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function Homepage() {
  const location = useLocation();
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>(
    location.state?.selectedGenres || []
  );
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const genres: Genre[] = ["Romance", "Comedy", "Horror", "Drama"];

  // load movies everytime when selectedGenres changes
  // useEffect(() => {
  //   loadMovies();
  // }, [selectedGenres]);

  // async function loadMovies() {
  //   try {
  //     //activate loading
  //     // Check if selectedGenres is empty, if so, display all movies / i.o.w disable filtering
  //     let allMoviesPromises;
  //     movies?.length === 0
  //       ? (allMoviesPromises = movies)
  //       : (allMoviesPromises = movies?.filter((movie) => {
  //           movie.genre_ids.includes(selectedGenres);
  //         }));

  //     const allMoviesResults = await Promise.all(allMoviesPromises);
  //     const uniqueMovies = [
  //       // use Spread Operator to make it an array and
  //       // give it the type Map to get rid of duplicates, by assigning every movie a id as a key
  //       ...new Map(
  //         // flat the Array, and return pairs of movieId and the movie itself
  //         allMoviesResults.flat().map((movie) => [movie.id, movie])
  //         // use values() as an iterator for the values
  //       ).values(),
  //     ];
  //     setFilteredMovies(uniqueMovies);
  //   } catch (error) {
  //     console.error("Error loading movies:", error);
  //   }
  // }

  function handleClick(genre: GenreType) {
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
    <div className="h-screen bg-dark overflow-hidden">
      <div className="px-5 pt-8 pb-4 flex flex-col gap-6">
        <HomepageHeader
          userName={"Herr Vogel"}
          userImage={
            "https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjulian.b86ca7f2.jpg&w=3840&q=75"
          }
        />
        <LoginInput placeholder={"Search"} icon={undefined} />
        <div className="flex flex-col gap-4">
          <SectionTitle
            text={"Genre"}
            ShowSeeAll={true}
            route="/genres"
            state={selectedGenres}
          />
          <div className="flex justify-between">
            {genres?.map(({ id, name }: GenreType) => (
              <GenreButton
                key={id}
                genre={name}
                selected={selectedGenres.includes(name)}
                onClick={() => handleClick(name)}
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
