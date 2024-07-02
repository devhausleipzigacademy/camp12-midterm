type Props = {
  label: string;
  selected: boolean;
  onSelect: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function TabButton({ label, selected, onSelect, ...props }: Props) {
  return (
    <button
      {...props}
      className={`w-full py-1 rounded text-center border ${
        selected
          ? "text-white bg-white-dimmed border-white"
          : " text-white-dimmed bg-dark-light border-dark-light"
      }`}
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
