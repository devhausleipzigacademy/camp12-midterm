type Props = {
  number: number;
  category: {
    title: " Front" | " Middle" | " Back";
    price: 12.95 | 14.95 | 16.95;
  };
};

export default function SeatPrice({ number, category }: Props) {
  return (
    <>
      <div className="flex justify-between text-xs">
        <div className="flex gap-2">
          <p className="text-white-dimmed">{number + "x"}</p>
          <p className="text-white">Seat -{category.title}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-white">${category.price}</p>
          <p className="text-white-dimmed">/each</p>
        </div>
      </div>
    </>
  );
}
