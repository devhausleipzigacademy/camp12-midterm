import { Outlet } from "react-router-dom";

export const FullPage = () => {
  return (
    <>
      <Outlet></Outlet>
      <div className="w-[375px] h-[667px] bg-red text-white"></div>
    </>
  );
};
