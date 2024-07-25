import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { Movie } from "../types/movie";
import { useBookingStore } from "../store/useBookingStore";

export const useGetMoviesById = () => {
  const movieId = useBookingStore((state) => state.movieId);

  // Assuming movieId should be an array of numbers, parse it as such
  const storedIds: number[] = movieId
    ? JSON.parse(localStorage.getItem("Movies") || "[]").map(Number)
    : [];

  const results = useQueries({
    queries: storedIds.map((id: number) => ({
      queryKey: ["movie", id],
      queryFn: async () => {
        const { data } = await axios.get<Movie>(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
            },
          }
        );
        return data;
      },
    })),
  });

  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);
  const movies = results
    .map((result) => result.data)
    .filter((movie) => movie !== undefined) as Movie[];

  return {
    isLoading,
    isError,
    movies,
  };
};
