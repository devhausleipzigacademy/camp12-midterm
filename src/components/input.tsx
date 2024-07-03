type Props = {
  icon?: string;
  placeholder: string;
  inputType: "email" | "password" | "text";
  pattern?: string;
  minLength?: number;
};

export const Input = ({
  icon,
  placeholder,
  inputType,
  pattern,
  minLength,
}: Props) => {
  return (
    <label className="flex gap-5 items-center w-full py-3 px-4 rounded-lg bg-dark-light border-2 border-dark-light focus-within:border-white-dimmed-heavy transition">
      {icon && (
        <img
          src={icon}
          alt={`${inputType} icon`}
          className="text-white-dimmed w-5 h-5"
        />
      )}
      <input
        type={inputType}
        placeholder={placeholder}
        pattern={pattern}
        minLength={minLength}
        aria-label={placeholder}
        className="bg-transparent font-medium text-white text-sm placeholder:leading-4 outline-none text-white-dimmed"
      />
    </label>
  );
};
