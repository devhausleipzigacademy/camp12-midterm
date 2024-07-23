import { Button } from "./button";
import { SeatCart } from "./seat-cart";
import { Seat } from "./seat";
import { useState } from "react";

// Define a type for the seats
type SeatType = {
  id: string | null;
  isSelected: boolean;
  isReserved: boolean;
};

export default function SelectSeats() {
  // Function for generating seats, left alignment is the default setting
  function generateSeats(isRightSide: boolean = false): SeatType[] {
    const seatRows = ["A", "B", "C", "D", "E", "F"];
    const seats: SeatType[] = [];
    const seatCount = 4;
    const offset = isRightSide ? 4 : 0;
    const nullSeatPosition = isRightSide ? 4 : 1;
    seatRows.forEach((row) => {
      for (let i = 1; i <= seatCount; i++) {
        const isEdgeRow = row === "A" || row === "F";
        const isNullSeat = isEdgeRow && i === nullSeatPosition;
        seats.push({
          id: isNullSeat
            ? null
            : isEdgeRow
            ? row + (i - 1 + offset)
            : row + (i + offset),
          isSelected: false,
          isReserved: false,
        });
      }
    });
    return seats;
  }

  const kinoSeatsLeft: SeatType[] = generateSeats();
  const kinoSeatsRight: SeatType[] = generateSeats(true);
  const reservedSeats: string[] = ["A2", "E5", "F3"];
  const [seatsChecked] = useState<string[]>([]);

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
    { front: 0, middle: 0, back: 0 }
  );

  let cartHeight;

  const { front, middle, back } = seats;
  const sectionsSelected = [front > 0, middle > 0, back > 0].filter(
    Boolean
  ).length;

  if (front === 0 && middle === 0 && back === 0) {
    cartHeight = "h-36";
  } else if (sectionsSelected === 2) {
    cartHeight = "h-44";
  } else if (sectionsSelected === 1) {
    cartHeight = "h-40";
  } else {
    cartHeight = "h-52";
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="w-44 p-6 grid grid-cols-4 grid-rows-6 gap-4 justify-items-center mt-2 ml-4">
          {kinoSeatsLeft.map((seat) =>
            seat.id ? (
              <Seat
                key={seat.id}
                seatId={seat.id}
                disabled={reservedSeats.includes(seat.id)}
              />
            ) : (
              <div key={`${seat.id}-empty`} />
            )
          )}
        </div>

        <div className="w-44 p-6 grid grid-cols-4 grid-rows-6 gap-4 justify-items-center mt-2 mr-4">
          {kinoSeatsRight.map((seat) =>
            seat.id ? (
              <Seat
                key={seat.id}
                seatId={seat.id}
                disabled={reservedSeats.includes(seat.id)}
              />
            ) : (
              <div key={`${seat.id}-empty`} />
            )
          )}
        </div>
      </div>
      <div
        id="categorys"
        className="flex flex-row gap-2 justify-around mt-1 px-6"
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
      <div
        id="cart"
        className={`fixed bottom-0 w-full ${cartHeight} bg-dark-light rounded-t-3xl flex flex-col`}
      >
        <div
          id="seats-front"
          className="text-white flex items-center justify-between px-6 mt-6"
        >
          {seats.front === 0 ? (
            <div></div>
          ) : (
            <SeatCart
              count={seats.front}
              category={"Seat-Front"}
              prize={"$12.95"}
            />
          )}
        </div>
        <div
          id="seats-front"
          className="text-white flex items-center justify-between px-6 mt-1"
        >
          {seats.middle === 0 ? (
            <div></div>
          ) : (
            <SeatCart
              count={seats.middle}
              category={"Seat-Middle"}
              prize={"$14.95"}
            />
          )}
        </div>
        <div
          id="seats-front"
          className="text-white flex items-center justify-between pb-3 mx-6 mt-1 border-b border-b-white-dimmed"
        >
          {seats.back === 0 ? (
            <div></div>
          ) : (
            <SeatCart
              count={seats.back}
              category={"Seat-Back"}
              prize={"$16.95"}
            />
          )}
        </div>

        <div
          id="price-total"
          className="grid grid-cols-5 fixed bottom-5 justify-center items-center pr-4 pl-4"
        >
          <div className="col-start-1 col-end-3 bottom-0 flex flex-col text-white">
            <div className="total text-white-dimmed font-inter-500 text-xs">
              Total Price
            </div>
            <div className="prize font-inter-700 text-xl">
              $
              {(
                seats.front * 12.95 +
                seats.middle * 14.95 +
                seats.back * 16.95
              ).toFixed(2)}
            </div>
          </div>
          <div className="col-start-3 flex items-center w-52 h-12 mt-2">
            <Button variant="primary" size="default">
              Book Ticket
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
