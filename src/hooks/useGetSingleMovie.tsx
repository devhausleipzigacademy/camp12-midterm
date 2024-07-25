import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieCredit, MovieDetail } from "../types/movie";
import { useBookingStore } from "../store/useBookingStore";

export function useGetSingleMovie() {
  const movieId = useBookingStore((state) => state.movieId);

  return useQuery({
    queryKey: ["movie", movieId],
    enabled: !!movieId,
    queryFn: async () => {
      const details = await axios
        .get<MovieDetail>(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: "en-US",
          },
        })
        .then((res) => res.data);
      const credits = await axios
        .get<MovieCredit>(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
              language: "en-US",
            },
          }
        )
        .then((res) => res.data);

      return { details, credits };
    },
  });
}
