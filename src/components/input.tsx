import React from "react";

type Props = {
  icon?: JSX.Element;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function LoginInput({ icon, ...props }: Props) {
  return (
    <label className="px-5 py-3 bg-dark-light border-2 border-dark-light rounded-lg flex items-center gap-5 overflow-hidden focus-within:border-white-dimmed-heavy">
      {icon
        ? React.cloneElement(icon, {
            className: "h-6 w-auto text-white-dimmed",
          })
        : null}
      <input
        className="bg-transparent text-white flex-grow outline-none placeholder:text-white-dimmed"
        {...props}
      />
    </label>
  );
}
