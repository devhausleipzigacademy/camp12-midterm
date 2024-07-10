import { Seat } from "./seat";
import { Button } from "./button";
import { SeatCart } from "./seat-cart";
import { useState } from "react";
// define a Type for the seats const
type Seat = {
  id: string | null;
  isSelected: boolean;
  isReserved: boolean;
};

// function for generating Seats
function generateSeatsLeft(): Seat[] {
  const seatRows = ["A", "B", "C", "D", "E", "F"];
  const seats: Seat[] = [];

  seatRows.forEach((row) => {
    const seatCount = 4;
    // for each element in the the Array check if A or F and assign id null or id
    for (let i = 1; i <= seatCount; i++) {
      if (row === "A" || row === "F") {
        seats.push({
          id: (row === "A" || row === "F") && i === 1 ? null : `${row}${i - 1}`,

          isSelected: false,
          isReserved: false,
        });
      } else {
        seats.push({
          id: `${row}${i}`,
          isSelected: false,
          isReserved: false,
        });
      }
    }
  });
  return seats;
}
function generateSeatsRight(): Seat[] {
  const seatRows = ["A", "B", "C", "D", "E", "F"];
  const seats: Seat[] = [];

  seatRows.forEach((row) => {
    const seatCount = 4;
    // for each element in the the Array check if A or F and assign id null or id
    for (let i = 1; i <= seatCount; i++) {
      if (row === "A" || row === "F") {
        seats.push({
          id: (row === "A" || row === "F") && i === 4 ? null : `${row}${i + 4}`,

          isSelected: false,
          isReserved: false,
        });
      } else {
        seats.push({
          id: `${row}${i + 4}`,
          isSelected: false,
          isReserved: false,
        });
      }
    }
  });
  return seats;
}

const kinoSeatsLeft: Seat[] = generateSeatsLeft();
const kinoSeatsRight: Seat[] = generateSeatsRight();

const combiArray = kinoSeatsLeft.concat(kinoSeatsRight);
console.log(combiArray);

// Just a dummy Array for now
const reserved: string[] = ["A3", "E5", "F3"];

export const SeatsMap = () => {
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
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className=" w-44 p-6 grid grid-cols-4 grid-rows-6 gap-4 justify-items-center mt-4 ml-4">
          {kinoSeatsLeft.map((seat) =>
            seat.id ? (
              <Seat
                key={seat.id}
                onChange={() => {
                  if (!seat.id) return;
                  if (seatsChecked.includes(seat.id)) {
                    setSeatsChecked(
                      seatsChecked.filter((id) => id !== seat.id)
                    );
                  } else {
                    setSeatsChecked((prevState) => [...prevState, seat.id!]);
                  }
                }}
                selected={seatsChecked.includes(seat.id)}
                disabled={reserved.includes(seat.id) ? true : false}
              />
            ) : (
              <div />
            )
          )}
        </div>

        <div className=" w-44 p-6 grid grid-cols-4 grid-rows-6 gap-4 justify-items-center mt-4 mr-4">
          {kinoSeatsRight.map((seat) =>
            seat.id ? (
              <Seat
                key={seat.id}
                onChange={() => {
                  if (!seat.id) return;
                  if (seatsChecked.includes(seat.id)) {
                    setSeatsChecked(
                      seatsChecked.filter((id) => id !== seat.id)
                    );
                  } else {
                    setSeatsChecked((prevState) => [...prevState, seat.id!]);
                  }
                }}
                selected={seatsChecked.includes(seat.id)}
                disabled={reserved.includes(seat.id) ? true : false}
              />
            ) : (
              <div />
            )
          )}
        </div>
      </div>
      <div
        id="cart"
        className="fixed bottom-0 w-full h-52 bg-dark-light rounded-t-3xl flex flex-col"
      >
        <div
          id="seats-front"
          className="text-white flex items-center justify-between px-6 mt-4"
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
          className="text-white flex items-center justify-between px-6 mt-4"
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
          className="text-white flex items-center justify-between px-6 mt-4"
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
            <Button variant="primary" size="default">
              Book Ticket
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
