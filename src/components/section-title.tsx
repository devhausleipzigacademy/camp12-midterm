import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

type Props = {
  text: string;
  ShowSeeAll?: boolean;
};

export function SectionTitle({ text, ShowSeeAll }: Props) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white font-medium">{text}</span>
      {ShowSeeAll && (
        <Link to="/" className="text-yellow text-sm">
          <div className="flex flex-row items-center">
            <span className="whitespace-nowrap">See All</span>
            <ChevronRightIcon className="ml-2 w-5 h-5" />
          </div>
        </Link>
      )}
    </div>
  );
}
