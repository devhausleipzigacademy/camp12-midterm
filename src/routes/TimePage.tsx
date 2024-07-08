import React, { useState } from "react";
import { DisplayDate } from "../components/DisplayDate";
import TimeSlots from "../components/TimeSlots";

export function TimePage() {
  // Get today's date
  const today = new Date();
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex flex-col bg-dark h-dvh px-5 py-8 w-96 rounded-3xl">
      <div className="flex w-full items-center justify-center relative mb-8">
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
        <div className="text-white text-base">Select Date & Time</div>
      </div>
      <div className="text-white-dimmed text-sm py-2 px-2 font-semibold">
        DATE
      </div>
      <DisplayDate today={today} />
      <div className="border-solid border-[1px] mt-5 border-white-dimmed-heavy"></div>
      <div className="mt-3 w-full">
        <TimeSlots />
      </div>
      <div className="flex justify-center mt-auto pb-4 ">
        <button className="bg-yellow rounded-md text-dark-light font-semibold py-4 w-full text-sm">
          Select Seat
        </button>
      </div>
    </div>
  );
}
