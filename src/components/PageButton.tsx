import React from "react";

type Props = {
  state: "default" | "active";
  page: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PageButton: React.FC<Props> = ({ state, page, ...props }) => {
  let buttonClass =
    state === "active"
      ? "text-dark-light h-8 aspect-square rounded-sm bg-yellow"
      : "text-dark-light h-8 aspect-square rounded-sm bg-white-dimmed";

  return (
    <>
      {" "}
      <button className={buttonClass} {...props}>
        {page}
      </button>
      <button className={(buttonClass = "default")} {...props}>
        {page}
      </button>
    </>
  );
};

export default PageButton;
