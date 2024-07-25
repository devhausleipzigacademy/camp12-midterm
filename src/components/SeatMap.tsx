import { Seat as SeatType } from "../types/seat";
import { Seat } from "./seat";
import { useBookingStore } from "../store/useBookingStore";

type Props = {
  kinoSeats: SeatType[];
  seatsChecked: string[];
  setSeatsChecked: React.Dispatch<React.SetStateAction<string[]>>;
  reservedSeats: string[];
  className?: string;
};

export default function SeatMap({
  kinoSeats,
  reservedSeats,
  className = "",
}: Props) {
  const { seats, setSeats } = useBookingStore((state) => ({
    seats: state.seats,
    setSeats: state.setSeats,
  }));

  const handleSeatChange = (seatId: string) => {
    // Create a new array with the updated seat selections
    const updatedSeats = seats.includes(seatId)
      ? seats.filter((id) => id !== seatId)
      : [...seats, seatId];

    // Update the state with the new seats array
    setSeats(updatedSeats);
  };

  return (
    <div
      className={`w-44 p-6 grid grid-cols-4 grid-rows-6 gap-4 justify-items-center mt-4 ${className}`}
    >
      {kinoSeats.map((seat) =>
        seat.id ? (
          <Seat
            key={seat.id}
            onChange={() => handleSeatChange(seat.id!)} // Ensure id is not undefined
            selected={seats.includes(seat.id)}
            disabled={reservedSeats.includes(seat.id)}
          />
        ) : (
          <div key={`empty-${seat.id}`} />
        )
      )}
    </div>
  );
}
