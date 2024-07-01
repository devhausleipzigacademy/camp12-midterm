import React from "react";

interface HomepageHeaderProps {
  userName: string;
  userImage: string;
}

export const HomepageHeader: React.FC<HomepageHeaderProps> = ({
  userName,
  userImage,
}) => {
  return (
    <div className="flex w-screen h-10 bg-dark pl-5 pr-5 pt-8 text-white justify-between items-center">
      <div className="flex-col">
        <div className="pb-3 text-white-dimmed text-xs">
          Welcome {userName} <span className="text-white">👋</span>
        </div>
        <div className="text-sm">Let's relax and watch a movie!</div>
      </div>
      <div className="bg-white w-10 h-10 rounded-full">
        <img
          src={userImage}
          alt={`${userName}'s avatar`}
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};
