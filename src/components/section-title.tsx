import { Link } from "react-router-dom";

type Props = {
  text: string;
  ShowSeeAll?: boolean;
};

export function SectionTitle({ text, ShowSeeAll }: Props) {
  return (
    <div className="flex justify-between">
      <span className="text-white">{text}</span>
      {ShowSeeAll && (
        <Link to="/Placeholder" className="text-yellow">
          <div className="flex">
            <span>See All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5" // Use strokeWidth instead of stroke-width
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round" // Use strokeLinecap instead of stroke-linecap
                strokeLinejoin="round" // Use strokeLinejoin instead of stroke-linejoin
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
}
