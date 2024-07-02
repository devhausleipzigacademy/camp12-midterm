import { Link } from "react-router-dom";

export const MovieDetails = () => {
  return (
    <div className="w-[375px] h-[667px] bg-red text-white">
      <h1>Movie Details</h1>
      <div>
        <Link to="/full-page/cast-and-crew"> Cast and Crew</Link>
        <Link to="/full-page/select-time"> Select Time</Link>
      </div>
    </div>
  );
};
