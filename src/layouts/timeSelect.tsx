import { Link } from "react-router-dom";
export const TimeSelect = () => {
  return (
    <div className="w-[375px] h-[667px] bg-red text-white">
      <h1> Time Select</h1>
      <div>
        <Link to="/full-page/select-seats"> Select Seats</Link>
      </div>
    </div>
  );
};
