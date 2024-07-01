import { genres } from "../utils/data";
import FilterButton from "../components/FilterButton";

export default function GenreOverview() {
  return (
    <div className="grid grid-flow-row grid-cols-4 text-center bg-dark">
      {genres.map((genre) => (
        <FilterButton name={genre.name} icon={genre.icon} />
      ))}
    </div>
  );
}
