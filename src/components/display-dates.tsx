import { format, addDays } from "date-fns";
import { Label } from "./label";
import { useBookingStore } from "../store/useBookingStore";

type Props = {
  today: Date;
};

export function DisplayDate({ today }: Props) {
  const selectedDate = useBookingStore((state) => state.date);
  const setDate = useBookingStore((state) => state.setDate);

  const next12Days = Array.from({ length: 12 }, (_, i) => addDays(today, i));

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-white-dimmed tracking-widest p-1 text-sm">
        {next12Days.map((date, index) => (
          <Label
            selected={selectedDate === format(date, "dd-MM-yyyy")}
            disabled={false}
            key={index}
            handleClick={() => setDate(format(date, "dd-MM-yyyy"))}
          >
            {format(date, "dd MMM")}
          </Label>
        ))}
      </div>
    </div>
  );
}
