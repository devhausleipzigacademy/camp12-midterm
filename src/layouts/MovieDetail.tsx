export default function MovieDetails() {
  return (
    <section className="flex flex-col bg-dark px-8">
      <div className="flex flex-row justify-between">
        <span className="text-white">{"<"}</span>
        <h1 className="text-white">Cast & Crew</h1>
        <span className="text-red">{"<3"}</span>
      </div>

      <div className="text-white">
        <div>IMAGE</div>
        <h1>{"movie.title"}</h1>
        <ul className="flex flex-row  gap-4">
          <li className="text-white-dimmed">{"date"}</li>
          <li className="text-white-dimmed">{"genre"}</li>
          <li className="text-white-dimmed">{"duration"}</li>
          <li className="ml-auto text-green">
            {`${"score"} %`} <span className="text-white-dimmed">Score</span>
          </li>
        </ul>
        <div className="grid grid-flow-col-dense grid-cols-4 text-sm gap-x-2">
          <span className="col-span-1">Director:&nbsp;</span>
          <span className="col-span-1">Writer:&nbsp;</span>
          <span className="col-span-1 text-white-dimmed">{"dir.name"}</span>
          <span className="col-span-1 text-white-dimmed">{"writer.name"}</span>
          <button className="bg-white-dimmed-heavy col-span-2 row-span-2 rounded-md">
            Cast & Crew
          </button>
        </div>
        <hr className="h-px my-4 border-0 bg-white-dimmed" />
        <h2>Synopsis</h2>
        <p className="text-white-dimmed truncate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ut
          officiis autem soluta officia veniam voluptatem eaque obcaecati
          distinctio inventore maiores eligendi ipsam non magni dolore tempora
          magnam, fugiat illum?
        </p>
        <p className="text-yellow underline">Read more</p>
        <button>Get Reservation</button>
      </div>
    </section>
  );
}
