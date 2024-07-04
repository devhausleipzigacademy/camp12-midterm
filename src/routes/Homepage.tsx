import { GenreButton } from "../components/genre";
import { Input } from "../components/input";
import { NavBar } from "../components/nav-bar";
import { SectionTitle } from "../components/section-title";

export function Homepage() {
  return (
    <div className="h-screen bg-dark">
      <div className="px-5 pt-8 pb-4 flex flex-col gap-6">
        {/* <HomepageHeader /> */}
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
      <div className="flex gap-6 overflow-hidden h-60 -ml-16">
        <img
          className="rounded-md"
          src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          alt="star wars "
        />
        <img
          className="rounded-md"
          src="https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
          alt="shrek"
        />
        <img
          className="rounded-md"
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
