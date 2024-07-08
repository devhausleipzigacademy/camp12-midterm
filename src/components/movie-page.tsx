import { useState } from "react";
import { PageButton } from "./page-button";

const movies = [
  {
    title: "Wednesday",
    year: "2022",
    imgSrc: "./img/wednesday_movie-poster.jpeg",
  },
  {
    title: "Avatar: The Way of Water",
    year: "2022",
    imgSrc: "./img/avatar_movie-poster.jpeg",
  },
  {
    title: "Strange World",
    year: "2022",
    imgSrc: "./img/strangeworld_movie-poster.jpeg",
  },
  {
    title: "Violent Night",
    year: "2022",
    imgSrc: "./img/violentnight_movie-poster.jpeg",
  },
];

export function MoviePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="relative group w-44 h-64 overflow-hidden">
            <img
              src={movie.imgSrc}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-bold">{movie.title}</p>
              <p className="text-sm">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4">
        {[1, 2, 3, 4, 5].map((page) => (
          <PageButton
            key={page}
            page={page}
            active={currentPage === page}
            onClick={() => handlePageSelect(page)}
          />
        ))}
      </div>
    </div>
  );
}
