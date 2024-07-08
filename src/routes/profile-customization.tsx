import { NavBar } from "../components/nav-bar";

export function ProfileCustomization() {
  return (
    <section className="bg-dark h-full text-white">
      <div>Movies watched:</div>
      <div>Favourite genre:</div>
      <div>Total watch time:</div>
      <div>
        recently watched films
        <div className="flex flex-col items-center gap-2">
          <div className="h-64 w-48 bg-white"></div>
          <div className="h-64 w-48 bg-white"></div>
          <div className="h-64 w-48 bg-white"></div>
          <div className="h-64 w-48 bg-white"></div>
        </div>
      </div>
      <NavBar />
    </section>
  );
}
