import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchMovies() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    {
      params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "en-US",
        page: 1,
        region: "DE",
      },
    }
  );

  return response.data.results;
}

export function useGetMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
}
