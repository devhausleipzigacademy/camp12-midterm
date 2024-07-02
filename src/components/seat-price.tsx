import { titleCase } from "title-case";

type Category = "front" | "middle" | "back";

type Props = {
  number: number;
  category: Category;
};

export function SeatPrice({ number, category }: Props) {
  const priceTable: Record<Category, number> = {
    front: 12.95,
    middle: 14.95,
    back: 16.95,
  };

  return (
    <>
      <div className="flex justify-between text-xs">
        <div className="flex gap-6">
          <span className="text-white-dimmed">{`${number}x`}</span>
          <span className="text-white">{`Seat - ${titleCase(category)}`}</span>
        </div>
        <div>
          <span className="text-white">{`$${priceTable[category]}`}</span>
          <span className="text-white-dimmed"> / each</span>
        </div>
      </div>
    </>
  );
}
