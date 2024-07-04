import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieResponse } from "../types/movie";

export function useGetMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      axios
        .get<MovieResponse>("https://api.themoviedb.org/3/movie/now_playing", {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: "en-US",
            page: 1,
            region: "DE",
          },
        })
        .then((res) => res.data.results),
  });
}
