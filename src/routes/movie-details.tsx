import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useGetSingleMovie } from "../hooks/useGetSingleMovie";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useBookingStore } from "../store/useBookingStore";

export function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>();
  const setMovieId = useBookingStore((state) => state.setMovieId);
  const { data: movie, isLoading, isError } = useGetSingleMovie();

  useEffect(() => {
    if (movieId) {
      setMovieId(movieId);
    }
  }, [movieId, setMovieId]);

  const [truncate, setTruncate] = useState(true);
  const navigate = useNavigate();

  function sendState() {
    navigate("./select-time", {
      state: {
        movieDetails: {
          id: movie?.details.id,
          title: movie?.details.title,
          backdrop_path: movie?.details.backdrop_path,
        },
      },
    });
  }

  function readMoreHandler() {
    setTruncate(!truncate);
  }

  const [toggleHeart, setToggleHeart] = useState(false);
  const [currentId, setCurrentId] = useState<string[]>([]);
  useEffect(() => {
    localStorage.setItem("Movies", JSON.stringify(currentId));
  }, [currentId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !movie) {
    return <div>Error loading movie details.</div>;
  }

  const handleClick = (movieId: string) => {
    setToggleHeart(!toggleHeart);
    setCurrentId((prevSelectedId) => {
      if (prevSelectedId.includes(movieId)) {
        return prevSelectedId.filter((i) => i !== movieId);
      } else {
        return [...prevSelectedId, movieId];
      }
    });
  };

  const userRating = movie.details.vote_average * 10;
  const ratingColorClass =
    userRating < 50
      ? "text-red"
      : userRating <= 75
      ? "text-orange-500"
      : "text-green";

  // see the actual data entries from tmdb

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <section className="flex flex-col h-full min-h-screen bg-dark px-4 overflow-x-hidden">
      <div className="flex-grow text-white">
        <div className="flex flex-row justify-between my-2 h-16 items-center">
          {/* link back to movies */}
          <button onClick={handleGoBack}>
            <svg
              className="h-4 aspect-square"
              viewBox="0 0 16 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.14671 8.35335C5.05308 8.2596 5.00049 8.13252 5.00049 8.00002C5.00049 7.86752 5.05308 7.74044 5.14671 7.64669L10.1467 2.64669C10.1925 2.59756 10.2477 2.55816 10.309 2.53083C10.3704 2.50351 10.4366 2.48881 10.5037 2.48763C10.5708 2.48644 10.6375 2.49879 10.6998 2.52394C10.762 2.54909 10.8186 2.58652 10.8661 2.634C10.9136 2.68147 10.951 2.73803 10.9761 2.80029C11.0013 2.86255 11.0136 2.92923 11.0124 2.99637C11.0113 3.0635 10.9966 3.12971 10.9692 3.19105C10.9419 3.25238 10.9025 3.30758 10.8534 3.35335L6.20672 8.00002L10.8534 12.6467C10.9025 12.6925 10.9419 12.7477 10.9692 12.809C10.9966 12.8703 11.0113 12.9365 11.0124 13.0037C11.0136 13.0708 11.0013 13.1375 10.9761 13.1998C10.951 13.262 10.9136 13.3186 10.8661 13.366C10.8186 13.4135 10.762 13.451 10.6998 13.4761C10.6375 13.5013 10.5708 13.5136 10.5037 13.5124C10.4366 13.5112 10.3704 13.4965 10.309 13.4692C10.2477 13.4419 10.1925 13.4025 10.1467 13.3534L5.14671 8.35335Z" />
            </svg>
          </button>

          <h1 className="text-white text-base font-bold">Movie Detail</h1>
          <HeartIcon
            className={`size-6 text-red ${
              currentId.includes(movieId || "") ? "fill-red" : "fill-none"
            } `}
            onClick={() => {
              if (!movieId) return;
              handleClick(movieId);
            }}
          ></HeartIcon>
        </div>
        <div
          className={`h-52 bg-orange-300 rounded-lg mb-4 w-full max-h-full max-w-full bg-cover bg-no-repeat bg-center`}
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.details.backdrop_path}')`,
          }}
        ></div>
        <h1 className="text-xl font-bold pb-3">{movie.details.title}</h1>
        <ul className="flex flex-row gap-4 pb-3 text-xs">
          <li className="text-white">
            {movie.details.release_date.split("-")[0]}
          </li>
          <li className="text-white-dimmed">
            {movie.details.genres
              .map((e: { id: number; name: string }) => e.name)
              .join(" / ")}
          </li>
          <li className="text-white-dimmed">
            {Math.floor(movie.details.runtime / 60)}h{" "}
            {movie.details.runtime % 60}m
          </li>
          <li className={`ml-auto ${ratingColorClass}`}>
            {userRating.toPrecision(2)}%
            <span className="text-white-dimmed">&nbsp;Score</span>
          </li>
        </ul>
        <div className="grid grid-flow-col-dense grid-cols-5 gap-x-2 text-xs auto-cols-fr">
          <span className="text-white-dimmed pb-2">Director:&nbsp;</span>
          <span className="text-white-dimmed">Writer:&nbsp;</span>
          <div className="col-span-2">
            {movie.credits?.crew
              .filter((e) => e.job === "Director")
              .map((e: { id: number; name: string }) => (
                <p key={e.id}>{e.name} </p>
              ))}
          </div>
          <div className="col-span-2">
            {movie.credits?.crew
              .filter((e) => e.job === "Writer")
              .map((e: { id: number; name: string }) => (
                <p key={e.id}>{e.name} </p>
              ))}
          </div>
          <NavLink
            to="cast-and-crew"
            className="bg-white-dimmed-heavy col-span-2 row-span-2 rounded-md max-h-10 h-full self-center flex items-center justify-center"
          >
            Cast & Crew
          </NavLink>
        </div>
        <hr className="h-px my-4 border-0 bg-white-dimmed" />
        <h2 className="text-sm pb-3">Synopsis</h2>
        <p
          className={`text-white-dimmed text-sm ${truncate ? "truncate" : ""}`}
        >
          {movie.details.overview}
        </p>
        <p
          className="text-yellow text-sm underline py-1 cursor-pointer"
          onClick={readMoreHandler}
        >
          Read more
        </p>
      </div>
      <div className="text-dark-light mt-auto mb-4">
        <Button onClick={sendState} children={"Get Reservation"} />
      </div>
    </section>
  );
}
