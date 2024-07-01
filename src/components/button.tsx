/*
Create a button that has 2 variants (primary, secondary) and 2 sizes (default, small)
A button can be also disabled
The button can take text to display
*/

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
        "rounded-lg font-semibold",
        variant === "primary" ? "bg-yellow disabled:bg-yellow/50" : null,
        variant === "secondary" ? "bg-dark-light" : null,
        size === "default" ? "py-4 w-[100%]" : null,
        size === "small" ? "text-xs py-3 w-[100%]" : null
      )}
    >
      {children}
    </button>
  );
}
