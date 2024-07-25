import Barcode from "react-barcode";
import { Button } from "../components/button";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useBookingStore } from "../store/useBookingStore";

export function TicketPage() {
  // Get booking data from global state
  const { date, time, seats } = useBookingStore((state) => ({
    date: state.date,
    time: state.time,
    seats: state.seats,
  }));

  // Placeholder values, replace these with actual values or additional state lookups if needed
  const img = "path_to_movie_poster_based_on_movieId";
  const title = "Movie Title"; // fetch based on movieId
  const price = 10; // static or calculate based on seats

  const barcode = "123456789"; // generate barcode value based on booking data

  const navigate = useNavigate();

  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem("auth-state") || "{}");
    if (!authState || !authState.authState) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <section className="bg-dark h-dvh flex flex-col justify-center items-stretch p-4">
      <div className="bg-dark-light rounded-xl flex flex-col flex-grow text-white mb-4">
        <div className="h-3/4">
          <div
            className={`bg-[url('${img}')] h-2/5 w-auto bg-cover bg-no-repeat p-8 rounded-t-xl`}
          ></div>
          <div className="px-6 pb-2">
            <h1 className="text-2xl font-bold mb-4 mt-2">{title}</h1>
            <div className="flex flex-row gap-8 gap-y-4 flex-wrap justify-between">
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
                <h2 className="text-m font-semibold">${price}</h2>
              </div>
              <div className="flex flex-col">
                <h3 className="text-dark text-sm">Seats</h3>
                <h2 className="text-m font-semibold">{seats.join(", ")}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-stretch items-center -mx-6">
          <div className="bg-dark h-12 w-12 rounded-full aspect-square"></div>
          <div className="border-2 h-0 border-white border-dashed flex-grow"></div>
          <div className="bg-dark h-12 w-12 rounded-full"></div>
        </div>
        <div className="px-12 flex justify-center">
          <Barcode
            value={barcode}
            format="CODE39"
            renderer="img"
            background=""
            lineColor="white"
          />
        </div>
      </div>
      <Button variant="primary" size="default" children="Back to Home" />
    </section>
  );
}
