import { IconType } from "react-icons";
import { IoIosSearch } from "react-icons/io";

type Props = {
  placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
  return (
    <label className="flex items-center w-80 h-12 rounded-full bg-dark-light border-2 border-dark-light focus-within:border-white-dimmed-heavy ">
      <div className=" w-auto h-auto ml-5 absolute flex">
        <IoIosSearch className="text-white-dimmed size-5" />
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent w-80 h-12 pl-12 rounded-full placeholder:font-medium placeholder:font-inter placeholder:text-sm placeholder:leading-4 outline-none text-white-dimmed"
      />
    </label>
  );
};
