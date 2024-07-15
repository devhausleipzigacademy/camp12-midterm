import { useGetMovies } from "../hooks/useGetMovies";

const NowPlayingMovies = () => {
  const { data: movies, isLoading, isError } = useGetMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies...</div>;
  }

  return (
    <div className="now-playing-movies">
      <h2>Now Playing Movies</h2>
      {movies && (
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
      )}
    </div>
  );
};

export default NowPlayingMovies;
