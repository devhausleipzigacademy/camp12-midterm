import { type Props, Member } from "../components/Member";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";

const CastPage = ({ name, role, image }: Props) => {
  return (
    <div className="bg-dark flex-col p-5 flex gap-4 justify-start items-start">
      <div className="bg-orange-400 flex items-center justify-center relative px-4">
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <div className="absolute left-4 text-white mb-2">
            <IoIosArrowBack />
          </div>
        </IconContext.Provider>
        <h1 className=" text-white mb-2">Cast & Crew</h1>
      </div>

      <div className="flex mb-1 gap-7 text-white px-4">
        <button className="rounded-sm border border-white-dimmed py-2 px-4">
          Cast
        </button>
        <button className="rounded-sm border border-white-dimmed py-2 px-4">
          Crew
        </button>
      </div>

      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
    </div>
  );
};

export default CastPage;
