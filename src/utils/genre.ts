export const genres = [
  "Romance",
  "Crime",
  "History",
  "Action",
  "Documentary",
  "Horror",
  "Adventure",
  "Drama",
  "Music",
  "Animation",
  "Family",
  "Mystery",
  "Comedy",
  "Fantasy",
  "Science-Fiction",
  "Thriller",
] as const;

export type Genre = (typeof genres)[number];

export const genreEmojis: Record<Genre, string> = {
  Romance: "😍",
  Crime: "🚔",
  History: "⏳",
  Action: "🧨",
  Documentary: "🎥",
  Horror: "🔪",
  Adventure: "💎",
  Drama: "🎭",
  Music: "🎧",
  Animation: "🦁",
  Family: "👪",
  Mystery: "🔎",
  Comedy: "🤣",
  Fantasy: "🦄",
  "Science-Fiction": "👽",
  Thriller: "😱",
} as const;
