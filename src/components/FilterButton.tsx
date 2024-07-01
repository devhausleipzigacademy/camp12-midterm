import { genre } from "../utils/types";

export default function FilterButton({ name, icon }: genre) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center bg-dark m-4">
      <div className="bg-white-dimmed-heavy h-16 w-16 flex items-center justify-center rounded-xl text-3xl">
        {icon}
      </div>
      <div className="text-white-dimmed">{name}</div>
    </div>
  );
}
