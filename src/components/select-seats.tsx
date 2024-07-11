import { Button } from "./button";
import { SeatCart } from "./seat-cart";
import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { Seat } from "../types/seat";
import SeatMap from "./SeatMap";

export default function SelectSeats() {
  // function for generating Seats, left alignment is default setting
  function generateSeats(isRightSide: boolean = false): Seat[] {
    const seatRows = ["A", "B", "C", "D", "E", "F"];
    const seats: Seat[] = [];
    // amount of standard seat rows
    const seatCount = 4;
    const offset = isRightSide ? 4 : 0;
    const nullSeatPosition = isRightSide ? 4 : 1;

    seatRows.forEach((row) => {
      for (let i = 1; i <= seatCount; i++) {
        // boolean value to check if we have to implement non standard seats
        const isEdgeRow = row === "A" || row === "F";
        //if we are in the edgerow, we look out for the position of our potential null object
        const isNullSeat = isEdgeRow && i === nullSeatPosition;
        seats.push({
          id: isNullSeat ? null : row + (i + offset),
          isSelected: false,
          isReserved: false,
        });
      }
    });
    return seats;
  }
  const kinoSeatsLeft: Seat[] = generateSeats();
  const kinoSeatsRight: Seat[] = generateSeats(true);
  // Just a dummy Array for now
  const reservedSeats: string[] = ["A3", "E5", "F3"];

  const [seatsChecked, setSeatsChecked] = useState<string[]>([]);
  const seats = seatsChecked.reduce(
    (acc, current) => {
      if (current[0] === "A") {
        return { ...acc, front: acc.front + 1 };
      } else if (current[0] === "F") {
        return { ...acc, back: acc.back + 1 };
      } else {
        return { ...acc, middle: acc.middle + 1 };
      }
    },
    {
      front: 0,
      middle: 0,
      back: 0,
    }
  );

  /*   const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const movieDetails = location.state?.movieDetails;
  const navigateAndSendState = () => {
    navigate("/ticket", {
      state: {
        movieDetails,
        selectedSeats,
      },
    });
  }; */

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <SeatMap
          kinoSeats={kinoSeatsLeft}
          seatsChecked={seatsChecked}
          setSeatsChecked={setSeatsChecked}
          reservedSeats={reservedSeats}
          className="ml-4"
        />
        <SeatMap
          kinoSeats={kinoSeatsRight}
          seatsChecked={seatsChecked}
          setSeatsChecked={setSeatsChecked}
          reservedSeats={reservedSeats}
          className="mr-4"
        />
      </div>
      <div
        id="cart"
        className="fixed bottom-0 w-full h-52 bg-dark-light rounded-t-3xl flex flex-col"
      >
        <div
          id="seats-front"
          className="text-white flex items-center justify-between px-6 mt-4"
        >
          <SeatCart
            count={seats.front}
            category={"Seat-Front"}
            prize={"$12.95"}
          />
        </div>
        <div
          id="seats-front"
          className="text-white flex items-center justify-between px-6 mt-4"
        >
          <SeatCart
            count={seats.middle}
            category={"Seat-Middle"}
            prize={"$14.95"}
          />
        </div>
        <div
          id="seats-front"
          className="text-white flex items-center justify-between px-6 mt-4"
        >
          <SeatCart
            count={seats.back}
            category={"Seat-Back"}
            prize={"$16.95"}
          />
        </div>
        <hr className="flex self-center w-3/4 mt-5" />

        <div
          id="price-total"
          className="flex justify-center gap-8 items-center pr-4 pl-4"
        >
          <div className="flex flex-col text-white p-4">
            <div className="text-white-dimmed font-inter-500 text-xs">
              Total Price
            </div>
            <div className="font-inter-700 text-xl">
              $
              {(
                seats.front * 12.95 +
                seats.middle * 14.95 +
                seats.back * 16.95
              ).toFixed(2)}
            </div>
          </div>
          <div className=" flex items-center w-52 h-12 mt-2">
            <Button
              variant="primary"
              size="default"
              // onClick={navigateAndSendState}
              children="Book Ticket"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
