import { GenreButton } from "../components/genre";
import { HomepageHeader } from "../components/homepage-header";
import { ComboSearchBox } from "../components/search-box";
import { SectionTitle } from "../components/section-title";

export function Homepage() {
  return (
    <div className="bg-dark overflow-hidden pt-8">
      <div className="px-5 mb-4 flex flex-col gap-6">
        <HomepageHeader
          userName={"Herr Vogel"}
          userImage={
            "https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjulian.b86ca7f2.jpg&w=3840&q=75"
          }
        />
        <ComboSearchBox placeholder={"Search"} />
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
        <SectionTitle text={"Upcoming Movies"} />
      </div>
      <div className="flex gap-6 overflow-y-hidden scrollbar-hide snap-x h-56 -mx-5">
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          alt="star wars"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
          alt="shrek"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
          alt="home alone"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
          alt="star wars "
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
          alt="shrek"
        />
        <img
          className="rounded-md snap-center"
          src="https://image.tmdb.org/t/p/original/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
          alt="home alone"
        />
      </div>
    </div>
  );
}
