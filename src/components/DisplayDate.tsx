import { format, addDays } from "date-fns";
import { Label } from "./Label";
import { useState } from "react";

type Props = {
  today: Date;
};

export function DisplayDate({ today }: Props) {
  // Generate an array of the next 12 days
  const next12Days = Array.from({ length: 12 }, (_, i) => addDays(today, i));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index); // Set the selected index
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-white-dimmed tracking-widest p-1 text-sm">
        {next12Days.map((date, index) => (
          <Label
            selected={selectedIndex === index}
            disabled={false}
            handleClick={() => handleClick(index)}
            key={index}
          >
            {format(date, "dd MMM")}
          </Label>
        ))}
      </div>
    </div>
  );
}
