import { cn } from "../utils/styling";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "small";
};

export function Button({
  children,
  variant = "primary",
  size = "default",
}: Props) {
  return (
    <button
      className={cn(
        "rounded-lg font-semibold w-full",
        variant === "primary" ? "bg-yellow disabled:bg-yellow/50" : null,
        variant === "secondary" ? "bg-dark-light" : null,
        size === "default" ? "py-4" : null,
        size === "small" ? "text-xs py-3" : null
      )}
    >
      {children}
    </button>
  );
}
