import create from "zustand";
import { persist } from "zustand/middleware";

// Define the shape of the global state
interface BookingState {
  date: string;
  time: string;
  seats: string[];
  movieId: string;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setSeats: (seats: string[]) => void;
  setMovieId: (movieId: string) => void;
}

// Create the store with initial values and actions to update the state
export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      date: "",
      time: "",
      seats: [],
      movieId: "",
      setDate: (date) => set({ date }),
      setTime: (time) => set({ time }),
      setSeats: (seats) => set({ seats }),
      setMovieId: (movieId) => set({ movieId }),
    }),
    { name: "booking-storage" } // Persist state to localStorage
  )
);
