import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Genres = {
  id: string;
  name: string;
};

export function useGetGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axios
        .get<Genres>("https://api.themoviedb.org/3/genre/movie/list", {
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
