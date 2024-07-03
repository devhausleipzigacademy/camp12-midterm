type Props = {
  selected: boolean;
  disabled: boolean;
  children: React.ReactNode
  onClick: () => void
};
export function Label({ selected, disabled, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-inter font-medium text-sm/4 text-center rounded disabled:text-white-dimmed-heavy py-2.5 px-4 ${
        selected ? "bg-yellow text-dark-light" : "text-white-dimmed"
      }`}
    >{children}</button>
  );
}
