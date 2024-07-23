import { Checkbox } from "@headlessui/react";
import { useBookingStore } from "../store/useBookingStore";

type Props = {
  seatId: string;
  disabled?: boolean;
};

export function Seat({ seatId, disabled = false }: Props) {
  const seats = useBookingStore((state) => state.seats);
  const setSeats = useBookingStore((state) => state.setSeats);

  const selected = seats.includes(seatId);

  const handleChange = (checked: boolean) => {
    if (checked) {
      setSeats([...seats, seatId]);
    } else {
      setSeats(seats.filter((seat) => seat !== seatId));
    }
  };

  return (
    <Checkbox
      checked={selected}
      onChange={handleChange}
      disabled={disabled}
      className="group block size-7 rounded border bg-dark-light data-[checked]:bg-yellow data-[disabled]:cursor-not-allowed data-[disabled]:bg-white"
    />
  );
}
