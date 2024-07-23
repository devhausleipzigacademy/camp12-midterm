// select-time.tsx
import { useBookingStore } from "../store/useBookingStore"; // Adjust the import path as needed
import { DisplayDate } from "../components/display-dates";
import { TimeSlots } from "../components/time-slots";
import { NavLink, useParams } from "react-router-dom";

export function TimePage() {
  const { movieId } = useParams();
  // Get today's date
  const today = new Date();

  // Access global state and state setters from Zustand store
  useBookingStore((state) => ({
    setDate: state.setDate,
  }));

  return (
    <div className="flex flex-col bg-dark h-dvh px-5 py-8">
      <div className="flex w-full items-center justify-center relative mb-8">
        <NavLink to={`../../movies/${movieId}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-white absolute left-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </NavLink>

        <div className="text-white text-base">Select Date & Time</div>
      </div>
      <div className="text-white-dimmed text-sm py-2 px-2 font-bold">DATE</div>
      <DisplayDate today={today} />
      <div className="h-px my-5 bg-white-dimmed-heavy"></div>
      <div className="w-full">
        <TimeSlots /> {/* No props needed for TimeSlots */}
      </div>
      <NavLink to={`../../movies/${movieId}/select-seats`}>
        <div className="flex justify-center mt-auto pb-4">
          <button className="bg-yellow rounded-md text-dark-light font-semibold py-4 w-full text-sm">
            Select Seat
          </button>
        </div>
      </NavLink>
    </div>
  );
}
