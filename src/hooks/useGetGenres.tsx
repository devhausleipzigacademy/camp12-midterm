import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieResponse } from "../types/movie";

export function useGetGenres(genres) {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axios
        .get<MovieResponse>("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: "en-US",
            page: 1,
            region: "DE",
          },
        })
        .then((res) => res.data),
  });
}
