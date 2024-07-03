import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchSingleMovie(movieId: number) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        // append_to_response:
        language: "en-US",
      },
    }
  );

  return response.data;
}

export function useGetSingleMovie(movieId: number) {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: fetchSingleMovie,
  });
}
