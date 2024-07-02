import { type Props, Member } from "../components/member";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { TabButton } from "../components/tab-buttton";
import { useState } from "react";

const CastPage = ({ name, role, image }: Props) => {
  const [selectedTab, setSelectedTab] = useState<"cast" | "crew">("cast");

  return (
    <div className="bg-dark grid grid-cols-4 p-5 gap-4 justify-start items-start">
      <div className="bg-orange-400 col-span-full items-center justify-center relative px-4">
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <div className="absolute left-4 text-white mb-2">
            <IoIosArrowBack />
          </div>
        </IconContext.Provider>
        <h1 className="text-center text-white mb-2">Cast & Crew</h1>
      </div>
      <div className="col-start-1 col-end-3 mb-1">
        <TabButton
          selected={selectedTab === "cast"}
          label={"Cast"}
          onSelect={() => setSelectedTab("cast")}
        />
      </div>
      <div className="col-start-3 col-end-5 mb-1">
        <TabButton
          selected={selectedTab === "crew"}
          label={"Crew"}
          onSelect={() => setSelectedTab("crew")}
        />
      </div>
      <div className="col-span-full justify-start">
        <Member name={name} role={role} image={image} />
      </div>

      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
      <Member name={name} role={role} image={image} />
    </div>
  );
};

export default CastPage;
