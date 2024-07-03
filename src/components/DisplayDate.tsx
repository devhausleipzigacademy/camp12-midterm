import { format, addDays } from "date-fns";
import { Label } from "./Label";
import { useState } from "react";

type Props = {
  today: Date;
  selected: boolean;
};

export function DisplayDate({ today }: Props) {
  // Generate an array of the next 12 days
  const next12Days = Array.from({ length: 12 }, (_, i) => addDays(today, i));
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected); // Toggle the value
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-white-dimmed tracking-widest p-1 text-sm">
        {next12Days.map(
          (
            date,
            index // mapping each date to a Label component
          ) => (
            <Label
              selected={false}
              disabled={false}
              onClick={() => handleClick(date)}
              key={index}
            >
              {format(date, "dd MMM")}
            </Label>
          )
        )}
      </div>
    </div>
  );
}
