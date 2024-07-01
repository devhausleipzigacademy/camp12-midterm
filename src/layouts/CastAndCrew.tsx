export default function CastAndCrew() {
  return (
    <section className="flex flex-col bg-dark px-8">
      <div className="flex flex-row justify-between">
        <span className="text-white">{"<"}</span>
        <h1 className="text-white">Cast & Crew</h1>
        <span></span>
      </div>

      <div className="flex flex-row">
        <div className="border-white bg-white-dimmed text-white">Cast</div>
        <div className="border-white bg-white-dimmed text-white">Crew</div>
      </div>
    </section>
  );
}
