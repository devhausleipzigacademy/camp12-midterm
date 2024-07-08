import React from "react";
import { format, addHours, startOfToday, isBefore } from "date-fns";
import { Label } from "./Label";
import { useState } from "react";

type Props = {
  today: Date;
};

export function TimeSlots({ today }: Props) {
  const openingTime = 12; // Cinema opens at 12:00
  const closingTime = 22; // Cinema closes at 24 but last movie at 22:00
  const interval = 2; // every two hours

  const now = new Date();

  // Generate time slots from openingTime to closingTime
  const timeSlots = [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  for (let hour = openingTime; hour <= closingTime; hour += interval) {
    const timeSlot = addHours(startOfToday(), hour);
    if (isBefore(now, timeSlot)) {
      timeSlots.push(format(timeSlot, "HH:mm"));
    }
  }

  return (
    <div>
      <div className="text-white-dimmed text-sm py-4 px-2 font-semibold">
        TIME
      </div>
      <div className="grid grid-cols-4 gap-4 text-white-dimmed p-1 text-sm tracking-widest">
        {timeSlots.map((time, index) => (
          <Label
            selected={selectedIndex === index}
            disabled={false}
            handleClick={() => handleClick(index)}
            key={index}
          >
            {time}
          </Label>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;
