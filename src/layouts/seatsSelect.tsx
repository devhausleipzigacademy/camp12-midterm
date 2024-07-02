import { Link } from "react-router-dom";
export const SeatsSelect = () => {
  return (
    <div className="w-[375px] h-[667px] bg-red text-white">
      <h1>Seats Selected</h1>
      <div>
        <Link to="/full-page/tickets"> Tickets </Link>
      </div>
    </div>
  );
};
