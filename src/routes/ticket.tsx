import Barcode from "react-barcode";
import { Button } from "../components/button";
import { NavLink, useLocation } from "react-router-dom";

type Props = {
  date?: string;
  time?: string;
};

export function Ticket({ date = "08 Jan", time = "14:30" }: Props) {
  const location = useLocation();
  const { movieDetails, selectedSeats } = location.state || {};

  return (
    /* Background */
    <section className="bg-dark h-dvh flex flex-col justify-center items-stretch p-4 overflow-x-hidden">
      {/* Ticket */}
      <div className="bg-dark-light rounded-xl flex flex-col flex-grow text-white mb-4">
        <div className="h-3/4 ">
          {/* Move Image / Hero */}
          <div
            className={`bg-[url('${movieDetails?.posterPath}')]
            h-2/5 w-auto bg-cover bg-no-repeat p-8 rounded-t-xl`}
          ></div>
          {/* Content */}
          <div className="px-6 pb-2">
            <h1 className="text-2xl font-bold mb-4 mt-2">
              {movieDetails?.title}
            </h1>
            {/* Information */}
            <div className="flex flex-row gap-8 gap-y-4 flex-wrap justify-between ">
              <div className="flex flex-col">
                <h3 className="text-dark text-sm">Date</h3>
                <h2 className="text-m font-semibold">{date}</h2>
              </div>
              <div className="flex flex-col">
                <h3 className="text-dark text-sm">Time</h3>
                <h2 className="text-m font-semibold">{time}</h2>
              </div>
              <div className="flex flex-col">
                <h3 className="text-dark text-sm">Price</h3>
                <h2 className="text-m font-semibold">
                  ${selectedSeats?.price}
                </h2>
              </div>
              <div className="flex flex-col">
                <h3 className="text-dark text-sm">Seats</h3>
                <h2 className="text-m font-semibold">
                  {selectedSeats?.join(", ")}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex flex-row justify-stretch items-center -mx-6">
          <div className="bg-dark h-12 w-12 rounded-full aspect-square "></div>
          <div className="border-2 h-0 border-white border-dashed flex-grow"></div>
          <div className="bg-dark h-12 w-12 rounded-full "></div>
        </div>

        {/* Barcode */}
        <div className="px-12 flex justify-center">
          <Barcode
            value={"calculatedNumber1234"}
            format="CODE39"
            renderer="img"
            background=""
            lineColor="white"
          />
        </div>
      </div>

      {/* Button */}
      <Button
        variant="primary"
        size="default"
        children={<NavLink to="select-seats/ticket">Get Reservation</NavLink>}
      />
    </section>
  );
}
