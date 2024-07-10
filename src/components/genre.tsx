import { genreEmojis } from "../utils/genre";
import { cn } from "../utils/styling";
import { GenreType } from "../types/movie";

type Props = {
  genre: GenreType;
  selected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function GenreButton({ genre, selected, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        {...rest}
        className={cn(
          "text-3xl rounded-xl flex items-center justify-center",
          "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18", // Responsive sizes
          selected ? "bg-white-dimmed" : "bg-dark-light"
        )}
      >
        {genreEmojis[genreName]}
      </button>
      <span className="text-white-dimmed font-bold text-xs truncate w-full text-center">
        {genre.name}
      </span>
    </div>
  );
}
