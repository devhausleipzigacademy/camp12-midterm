// time-slots.tsx
import { format, addHours, startOfToday, isBefore } from "date-fns";
import { Label } from "./label";
import { useBookingStore } from "../store/useBookingStore";

export function TimeSlots() {
  const selectedTime = useBookingStore((state) => state.time);
  const setTime = useBookingStore((state) => state.setTime);

  const openingTime = 12;
  const closingTime = 22;
  const interval = 2;
  const now = new Date();

  const timeSlots = [];
  for (let hour = openingTime; hour <= closingTime; hour += interval) {
    const timeSlot = addHours(startOfToday(), hour);
    if (isBefore(now, timeSlot)) {
      timeSlots.push(format(timeSlot, "HH:mm"));
    }
  }

  return (
    <div>
      <div className="text-white-dimmed text-sm py-4 px-2 font-bold">TIME</div>
      <div className="grid grid-cols-4 gap-4 text-white-dimmed p-1 text-sm tracking-widest">
        {timeSlots.map((time, index) => (
          <Label
            selected={selectedTime === time}
            disabled={false}
            handleClick={() => setTime(time)}
            key={index}
          >
            {time}
          </Label>
        ))}
      </div>
    </div>
  );
}
