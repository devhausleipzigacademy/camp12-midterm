import axios from "axios";
import { Genre } from "../utils/genre";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
console.log("API Key:", apiKey); // Add this line to check if the API key is correctly loaded
const baseUrl = "https://api.themoviedb.org/3";

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/now_playing`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw error;
  }
};

export const getMoviesByGenre = async (genre: Genre) => {
  try {
    // fetching the genre ID from the TMDB API
    const genreResponse = await axios.get(`${baseUrl}/genre/movie/list`, {
      params: {
        api_key: apiKey,
      },
    });

    const genreId = genreResponse.data.genres.find(
      (g: { name: string }) => g.name.toLowerCase() === genre.toLowerCase()
    )?.id;

    if (!genreId) {
      throw new Error(`Genre '${genre}' not found`);
    }

    // fetching movies based on the genre ID
    const response = await axios.get(`${baseUrl}/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: genreId,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies for genre '${genre}':`, error);
    throw error;
  }
};
