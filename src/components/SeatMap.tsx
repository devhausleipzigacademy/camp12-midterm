import { Seat as SeatType } from "../types/seat";
import { Seat } from "./seat";

type Props = {
  kinoSeats: SeatType[];
  seatsChecked: string[];
  setSeatsChecked: React.Dispatch<React.SetStateAction<string[]>>;
  reservedSeats: string[];
  className?: string;
};

export default function SeatMap({
  kinoSeats,
  seatsChecked,
  setSeatsChecked,
  reservedSeats,
  className = "",
}: Props) {
  return (
    <div
      className={`w-44 p-6 grid grid-cols-4 grid-rows-6 gap-4 justify-items-center mt-4 ${className}`}
    >
      {kinoSeats.map((seat) =>
        seat.id ? (
          <Seat
            key={seat.id}
            onChange={() => {
              setSeatsChecked((prevChecked) => {
                if (prevChecked.includes(seat.id!)) {
                  return prevChecked.filter((id) => id !== seat.id);
                } else {
                  return [...prevChecked, seat.id!];
                }
              });
            }}
            selected={seatsChecked.includes(seat.id)}
            disabled={reservedSeats.includes(seat.id)}
          />
        ) : (
          <div key={`empty-${seat.id}`} />
        )
      )}
    </div>
  );
}
