type Props = {
  icon: React.ElementType;
  placeholder: string;
  inputType: string
};

export function LoginInput({ icon: Icon, placeholder, inputType }: Props) {
  return (
    <label className="px-5 py-3 bg-dark-light border-2 border-dark-light rounded-md flex items-center gap-5 overflow-hidden focus-within:border-white-dimmed-heavy">
      <Icon className="h-6 w-auto text-white-dimmed" />
      <input
        type={inputType}
        placeholder={placeholder}
        className="bg-transparent text-white flex-grow outline-none placeholder:text-white-dimmed"
      />
    </label>
  );
}
