import { useState } from "react";

interface Genres {
  name: string;
  emoji: string;
}

const genres: Genres[] = [
  { name: "Romance", emoji: "😍" },
  { name: "Crime", emoji: "🚔" },
  { name: "History", emoji: "⏳" },
  { name: "Action", emoji: "🧨" },
  { name: "Documentary", emoji: "🎥" },
  { name: "Horror", emoji: "🔪" },
  { name: "Adventure", emoji: "💎" },
  { name: "Drama", emoji: "🎭" },
  { name: "Music", emoji: "🎧" },
  { name: "Animation", emoji: "🦁" },
  { name: "Family", emoji: "👪" },
  { name: "Mystery", emoji: "🔎" },
  { name: "Comedy", emoji: "🤣" },
  { name: "Fantasy", emoji: "🦄" },
  { name: "Science-Fiction", emoji: "👽" },
  { name: "Thriller", emoji: "😱" },
];

export function GenreComponent() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {genres.map((genre) => (
          <div
            key={genre.name}
            className="flex flex-col items-center cursor-pointer p-2 rounded-lg"
            onClick={() => setSelectedGenre(genre.name)}
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-lg ${
                selectedGenre === genre.name
                  ? "bg-white-dimmed"
                  : "bg-dark-light"
              }`}
            >
              <span className="text-3xl">{genre.emoji}</span>
            </div>
            <div className="mt-2 text-center text-white-dimmed font-inter font-bold text-xs">
              {genre.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
