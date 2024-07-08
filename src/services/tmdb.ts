import axios from "axios";
import { Genre } from "../utils/genre";

const apiKey ="01c4ae562fe659237a9144fbfed88d3c"
// const apiKey = import.meta.env.VITE_TMDB_API_KEY;

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
    // 1: fetching the genre ID from the TMDB API
    // Die TMDB API needs the genre-ID, not the name.
    // therefore we have to look for the ID
    const genreResponse = await axios.get(`${baseUrl}/genre/movie/list`, {
      params: {
        api_key: apiKey,
      },
    });

    // 2: extract ID from response
    // look for the genre that we gave as parameter
    // make the search robust, by making it non-case-sensitive
    const genreId = genreResponse.data.genres.find(
      (g: { name: string }) => g.name.toLowerCase() === genre.toLowerCase()
    )?.id;

    // 3: Has the id been found?
    if (!genreId) {
      throw new Error(`Genre '${genre}' not found`);
    }

    // 4: fetching movies based on the genre ID
    const response = await axios.get(`${baseUrl}/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: genreId,
      },
    });

    // 5: return the list of the movies
    return response.data.results;
  } 
  
  //6: If there is a Error, log it
  catch (error) {
    console.error(`Error fetching movies for genre '${genre}':`, error);
    throw error;
  }
};