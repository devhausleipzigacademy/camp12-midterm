import { Genre, genreEmojis } from "../utils/genre";
import { cn } from "../utils/styling";

type Props = {
  genre: Genre;
  selected: boolean;
  onSelect: () => void;
};

export function GenreButton({ genre, selected, onSelect }: Props) {
  // const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2 items-center">
      <button
        onClick={onSelect}
        className={cn(
          "text-3xl rounded-xl size-14 flex items-center justify-center",
          selected ? "bg-white-dimmed" : "bg-dark-light"
        )}
      >
        {genreEmojis[genre]}
      </button>
      <span className="text-white-dimmed font-bold text-xs">{genre}</span>
    </div>
  );
}
