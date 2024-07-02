import { Button } from "../components/button";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function MovieDetails() {
  return (
    // TOP
    <section className="flex flex-col h-screen bg-dark px-8">
      <div className="flex flex-row justify-between mt-8">
        <span className="text-white">{"<"}</span>
        <h1 className="text-white font-bold">Movie Detail</h1>
        <HeartIcon className="size-6 text-red"></HeartIcon>
      </div>

      <div className="text-white">
        <div className="w-80 h-52 bg-orange-300 rounded-lg mb-6 mt-5">
          IMAGE
        </div>{" "}
        {/* IMAGE */}
        <h1 className="text-xl font-bold pb-3">{"movie.title"}</h1>{" "}
        {/* TITLE */}
        <ul className="flex flex-row gap-4 pb-3 text-xs">
          <li className="text-white">{"date"}</li>
          <li className="text-white-dimmed">{"genre"}</li>
          <li className="text-white-dimmed">{"duration"}</li>
          <li className="ml-auto text-green">
            ${"score"} %<span className="text-white-dimmed">Score</span>
          </li>
        </ul>
        <div className="grid grid-flow-col-dense grid-cols-4 text-sm gap-x-2 text-xs">
          <span className="col-span-1 text-white-dimmed pb-2 ">
            Director:&nbsp;
          </span>
          <span className="col-span-1 text-white-dimmed">Writer:&nbsp;</span>
          <span className="col-span-1 ">{"dir.name"}</span>
          <span className="col-span-1 ">{"writer.name"}</span>
          <button className="bg-white-dimmed-heavy col-span-2 row-span-2 rounded-md">
            Cast & Crew
          </button>
        </div>
        <hr className="h-px my-4 border-0 bg-white-dimmed" />
        {/* DESCRIPTION */}
        <h2 className="text-sm pb-3">Synopsis</h2>
        <p className="text-white-dimmed truncate text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ut
          officiis autem soluta officia veniam voluptatem eaque obcaecati
          distinctio inventore maiores eligendi ipsam non magni dolore tempora
          magnam, fugiat illum?
        </p>
        <p className="text-yellow underline pb-12">Read more</p>
        <div className="mb-6 text-dark-light">
          <Button children={undefined}>Get Reservation</Button>
        </div>
      </div>
    </section>
  );
}
