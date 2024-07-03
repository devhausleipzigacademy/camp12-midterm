import { Genre, genreEmojis } from "../utils/genre";
import { cn } from "../utils/styling";

type Props = {
  genre: Genre;
  selected: boolean;
  onSelect: () => void;
};

export function GenreButton({ genre, selected, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        onClick={onSelect}
        className={cn(
          "text-3xl rounded-xl flex items-center justify-center",
          "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18", // Responsive sizes
          selected ? "bg-white-dimmed" : "bg-dark-light"
        )}
      >
        {genreEmojis[genre]}
      </button>
      <span className="text-white-dimmed font-bold text-xs truncate w-full text-center">
        {genre}
      </span>
    </div>
  );
}
