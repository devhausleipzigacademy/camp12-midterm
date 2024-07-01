type Props = {
  name: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function FilterButton({
  name,
  icon,
  isSelected,
  onClick,
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center bg-dark
      `}
      onClick={onClick}
    >
      <div
        className={`h-16 w-16 flex items-center justify-center text-3xl my-2 rounded-xl
        ${isSelected ? "bg-white-dimmed" : "bg-white-dimmed-heavy"}`}
      >
        {icon}
      </div>
      <div className="text-white-dimmed text-xs">{name}</div>
    </div>
  );
}
