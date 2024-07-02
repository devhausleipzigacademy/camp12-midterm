import { useEffect, useState } from "react";
import { fetchNowPlayingMovies } from "../services/tmdb";
import { Movie } from "../types/movie";

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const nowPlayingMovies = await fetchNowPlayingMovies();
        setMovies(nowPlayingMovies);
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="now-playing-movies">
      <h2>Now Playing Movies</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-cover"
            />
            <p className="movie-title">{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NowPlayingMovies;
