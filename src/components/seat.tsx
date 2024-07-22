import { Checkbox } from "@headlessui/react";
import { useBookingStore } from "../store/useBookingStore";

type Props = {
  seatId: string;
};

export function Seat({ seatId }: Props) {
  const seats = useBookingStore((state) => state.seats);
  const setSeats = useBookingStore((state) => state.setSeats);

  const selected = seats.includes(seatId);

  const handleChange = (isSelected: boolean) => {
    if (isSelected) {
      setSeats([...seats, seatId]);
    } else {
      setSeats(seats.filter((seat) => seat !== seatId));
    }
  };

  return (
    <Checkbox
      checked={selected}
      onChange={handleChange}
      className="group block size-7 rounded border bg-dark-light data-[checked]:bg-yellow data-[disabled]:cursor-not-allowed data-[disabled]:bg-white"
    />
  );
}
