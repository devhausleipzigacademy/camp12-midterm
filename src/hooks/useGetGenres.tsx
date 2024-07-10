import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GenreType } from "../types/movie";

// Definieren Sie einen Typ für die API-Antwort
type GenreResponse = {
  genres: GenreType[];
};

export function useGetGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      axios
        .get<GenreResponse>("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: "en-US",
            page: 1,
            region: "DE",
          },
        })
        .then((res) => res.data.genres), // Extrahieren Sie das genres-Array aus der Antwort
  });
}
