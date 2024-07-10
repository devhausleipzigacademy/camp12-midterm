import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useGetMovies } from "../hooks/useGetMovies";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Movie = {
  id: number;
  title: string;
  image: string;
};

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function ComboSearchBox({ ...props }: Props) {
  const { data: movies = [] } = useGetMovies();
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies =
    query === ""
      ? movies.slice(0, 5)
      : movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5);

  return (
    <Combobox
      value={selectedMovie}
      onChange={(value) => {
        navigate(`/movies/${value?.id}`);
      }}
      onClose={() => setQuery("")}
    >
      <div className="relative">
        <label className="flex gap-5 items-center w-full py-3 px-5 rounded-full bg-dark-light border-2 border-dark-light focus-within:border-white-dimmed-heavy transition">
          <IoIosSearch className="text-white-dimmed size-5" />
          <ComboboxInput
            className="bg-transparent font-medium text-white text-sm placeholder:leading-4 outline-none placeholder:text-white-dimmed flex-grow"
            displayValue={(movie) => movie?.title}
            onChange={(event) => setQuery(event.target.value)}
            {...props}
          />
        </label>
      </div>

      <ComboboxOptions
        anchor={{ to: "bottom", gap: 10, offset: -20 }}
        className="relative w-[calc(100%-40px)] mt-2 rounded-xl border border-white/5 bg-dark-light p-1 shadow-lg"
      >
        {filteredMovies.map((movie) => (
          <ComboboxOption
            key={movie.id}
            value={movie}
            className="group flex cursor-default items-center gap-2 rounded-lg py-2.5 select-none data-[focus]:bg-white/10 px-3s"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="size-16 object-cover w-auto"
            />
            <div className="text-base text-white">{movie.title}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
