import { Link } from "react-router-dom";
export const Movies = () => {
  return (
    <div className="w-[375px] h-[579px] bg-red text-white">
      <h1>Movies</h1>
      <div>
        <Link to="/full-page/movie-details">Movie Details</Link>
      </div>
    </div>
  );
};
