import { GenreButton } from "../components/genre";
import { HomepageHeader } from "../components/homepage-header";
import { Input } from "../components/input";
import { NavBar } from "../components/nav-bar";
import { SectionTitle } from "../components/section-title";

export function Homepage() {
  return (
    <div className="h-screen bg-dark">
      <div className="px-5 pt-8 pb-4 flex flex-col gap-6">
        <HomepageHeader
          userName={"Herr Vogel"}
          userImage={
            "https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjulian.b86ca7f2.jpg&w=3840&q=75"
          }
        />
        <Input placeholder={"Search"} icon={undefined} />
        <div className="flex flex-col gap-4">
          <SectionTitle text={"Genre"} />
          <div className="flex justify-between">
            <GenreButton
              genre={"Romance"}
              selected={false}
              onSelect={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <GenreButton
              genre={"Comedy"}
              selected={false}
              onSelect={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <GenreButton
              genre={"Horror"}
              selected={false}
              onSelect={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <GenreButton
              genre={"Drama"}
              selected={false}
              onSelect={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
        <p className="text-white font-bold">Upcoming Movies</p>
      </div>
      <div className="relative w-full h-56 flex gap-6 overflow-hidden">
        <img
          className="rounded-lg"
          src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          alt="star wars"
        />
        <img
          className="rounded-lg"
          src="https://xl.movieposterdb.com/13_10/2001/246578/xl_246578_f3904c49.jpg"
          alt="Donnie Darko"
        />
        <img
          className="rounded-lg"
          src="https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
          alt="shrek"
        />
        <img
          className="rounded-lg"
          src="https://xl.movieposterdb.com/13_06/1999/137523/xl_137523_1d292ea3.jpg?v=2024-07-04%2010:59:05"
          alt="Fight Club"
        />
        <img
          className="rounded-lg"
          src="https://image.tmdb.org/t/p/original/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
          alt="home alone"
        />
      </div>
      <div className="fixed bottom-0 w-full">
        <NavBar />
      </div>
    </div>
  );
}
