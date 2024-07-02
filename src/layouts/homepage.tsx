import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="w-[375px] h-[579px] bg-red text-white">
      Home
      <div>
        <Link to="/full-page/genre"> Genre</Link>
        <Link to="/full-page/movie-details"> Movie Details</Link>
      </div>
    </div>
  );
};
