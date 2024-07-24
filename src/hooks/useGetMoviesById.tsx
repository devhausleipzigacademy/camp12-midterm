import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { Movie } from "../types/movie";

export const useGetMoviesById = () => {
  // const ids = [748783, 46195, 280180, 519182, 1008409];
  // change ids with storedIds for getting actual movies from local storage

  const storedIds = JSON.parse(localStorage.Movies || "[]");

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
