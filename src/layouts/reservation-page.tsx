import { useNavigate } from "react-router";
import { SeatsMap } from "../components/select-seats";
import react from "react";

export const ReservationPage = () => {
  // navigate to login page if no authentifictaion
  const navigate = useNavigate();

  react.useEffect(() => {
    let authState = JSON.parse(localStorage.getItem("auth-state") || "{}");
    if (!authState || !authState.authState) {
      authState = false;
    }
    if (authState != true) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-screen bg-dark">
      <div
        id="head"
        className="w-full h-auto flex flex-row justify-between py-6 px-5 gap-6"
      >
        <div className="flex">
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
        <div className="mt-8">
          <div className="w-72 h-1 bg-yellow"></div>
          <div className="w-72 h-5 bg-gradient-to-b from-customOrange/20 to-customOrange/0"></div>
        </div>
      </div>

      {/* BEGIN OF SEAT ROWS */}
      <SeatsMap />
      {/* END OF SEAT ROWS */}
      <div
        id="categorys"
        className="flex flex-row gap-2 justify-around mt-6 px-6"
      >
        <div className="flex flex-row h-auto gap-2 items-center">
          <div className="bg-dark-light w-4 aspect-square rounded-full"></div>
          <small className="text-white-dimmed">Available</small>
        </div>
        <div className="flex flex-row h-auto gap-2 items-center">
          <div className="bg-yellow w-4 aspect-square rounded-full"></div>
          <small className="text-white-dimmed">Selected</small>
        </div>
        <div className="flex flex-row h-auto gap-2 items-center">
          <div className="bg-white w-4 aspect-square rounded-full"></div>
          <small className="text-white-dimmed">Reserved</small>
        </div>
      </div>

      {/* BEGIN CART */}
    </div>
  );
};
