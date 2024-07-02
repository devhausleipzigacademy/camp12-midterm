type Props = {
  selected: boolean;
  disabled: boolean;
  children: React.ReactNode
};
export function Label({ selected, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={`font-inter font-medium text-sm/4 text-center rounded disabled:text-white-dimmed-heavy ${
        selected ? "bg-yellow text-dark-light" : "text-white-dimmed"
      }`}
    >{children}</button>
  );
}
