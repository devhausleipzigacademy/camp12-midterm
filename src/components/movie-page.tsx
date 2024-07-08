import { useState } from "react";
import { useGetMovies } from "../hooks/useGetMovies";
import { PageButton } from "../components/page-button";
import { Movie } from "../types/movie";

export function MoviePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: movies, isLoading, error } = useGetMovies();

  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  // Calculate the index range for the current page
  const moviesPerPage = 4;
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  // Slice the movies array to get only the movies for the current page
  const paginatedMovies = movies?.slice(startIndex, endIndex) || [];

  // Determine the total number of pages
  const totalPages = Math.ceil((movies?.length || 0) / moviesPerPage);

  return (
    <div className="flex flex-col items-center bg-dark">
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {paginatedMovies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="relative group w-full pb-[150%] overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-bold">{movie.title}</p>
              <p className="text-sm">{movie.release_date.split("-")[0]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full max-w-2xl mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            page={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageSelect(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
