// src/api.js
import axios from "axios";

const API_KEY = import.meta.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=01c4ae562fe659237a9144fbfed88d3c`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchCreditDetails = async (movieId: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=01c4ae562fe659237a9144fbfed88d3c`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
