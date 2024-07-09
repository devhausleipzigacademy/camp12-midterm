import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useGetMovies } from "../hooks/useGetMovies";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

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
  const { data: movies = [], isLoading, isError } = useGetMovies();
  const [query, setQuery] = useState<string>("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies =
    query === ""
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox
      value={selectedMovie}
      onChange={(value) => setSelectedMovie(value)}
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
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            {/* The ChevronDownIcon has been removed */}
          </ComboboxButton>
        </label>
      </div>

      <ComboboxOptions className="absolute w-full mt-2 rounded-xl border border-white/5 bg-dark-light p-1 shadow-lg">
        {filteredMovies.map((movie) => (
          <ComboboxOption
            key={movie.id}
            value={movie}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
          >
            {/* The CheckIcon has been removed */}
            <img src={movie.image} alt={movie.title} className="h-6 w-auto" />
            <div className="text-sm text-white">{movie.title}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
