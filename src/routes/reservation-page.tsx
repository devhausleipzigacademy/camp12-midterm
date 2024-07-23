import { NavLink, useParams } from "react-router-dom";
import SelectSeats from "../components/select-seats";

export function ReservationPage() {
  const { movieId } = useParams();
  return (
    <div className="flex flex-col w-full h-screen bg-dark">
      <div
        id="head"
        className="w-full h-auto flex flex-row justify-between py-6 px-5 gap-6"
      >
        <div className="flex">
          <NavLink to={`../../movies/${movieId}/select-time`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              className="size-4 flex self-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </NavLink>
        </div>
        <h3 className="text-white flex font-semibold text-base">
          Select Seats
        </h3>
        <div className="size-4 flex self-center"></div>
      </div>
      <div
        id="beams"
        className="w-full h-auto flex justify-center items-center flex-col"
      >
        <div className="mt-6">
          <div className="w-72 h-1 bg-yellow"></div>
          <div className="w-72 h-5 bg-gradient-to-b from-customOrange/20 to-customOrange/0"></div>
        </div>
      </div>

      {/* BEGIN OF SEAT ROWS */}
      <SelectSeats />
      {/* END OF SEAT ROWS */}
      {/* BEGIN CART */}
    </div>
  );
}
