import { IoIosSearch } from "react-icons/io";

type Props = {
  placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
  return (
    <label className="flex gap-5 items-center w-full py-3 px-5 rounded-full bg-dark-light border-2 border-dark-light focus-within:border-white-dimmed-heavy transition">
      <IoIosSearch className="text-white-dimmed size-5" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent font-medium text-white text-sm placeholder:leading-4 outline-none text-white-dimmed"
      />
    </label>
  );
};
