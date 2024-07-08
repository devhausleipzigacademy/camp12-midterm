import { useState } from "react";
import { PageButton } from "./page-button";

import wednesdayImage from "../img/wednesday_movie-poster.png";
import avatarImage from "../img/avatar_movie-poster.png";
import strangeWorldImage from "../img/strangeworld_movie-poster.png";
import violentNightImage from "../img/violentnight_movie-poster.png";

const movies = [
  {
    title: "Wednesday",
    year: "2022",
    imgSrc: wednesdayImage,
  },
  {
    title: "Avatar",
    year: "2022",
    imgSrc: avatarImage,
  },
  {
    title: "Strange World",
    year: "2022",
    imgSrc: strangeWorldImage,
  },
  {
    title: "Violent Night",
    year: "2022",
    imgSrc: violentNightImage,
  },
];

export function MoviePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center bg-dark">
      <div className="grid grid-cols-2 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="relative group w-44 h-64 overflow-hidden">
            <img
              src={movie.imgSrc}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
