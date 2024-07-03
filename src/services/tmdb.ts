import axios from "axios";

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
