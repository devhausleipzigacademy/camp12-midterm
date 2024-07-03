type Props = {
  selected: boolean;
  disabled: boolean;
<<<<<<< HEAD
  children: React.ReactNode;
  handleClick: () => void;
};

export function Label({ selected, disabled, children, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`text-white-dimmed tracking-widest font-light text-sm py-1 disabled:text-white-dimmed-heavy ${
        selected ? "bg-yellow text-dark rounded-md" : "text-white-dimmed"
      }`}
    >
      {children}
    </button>
=======
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
>>>>>>> main
  );
}
