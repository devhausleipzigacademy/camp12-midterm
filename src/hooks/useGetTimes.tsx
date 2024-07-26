import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ScreeningFromDB = {
  id: number;
  date: string;
  time: string;
  booked_seats: string;
  movie_id: string;
};

export function useGetTimes(date: string) {
  return useQuery({
    queryKey: ["times"],
    queryFn: () =>
      axios.get<ScreeningFromDB>(`http://localhost:3000/times/${date}`),
  });
}
