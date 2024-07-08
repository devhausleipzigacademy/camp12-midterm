/*
 Create a new page
 Import the necessary components
 Follow the design on Figma
 Display bookmarked movies (use dummy data for now).
 */
import React, { useState } from "react";
import { NavBar } from "../components/nav-bar";
import { PageButton } from "../components/page-button";

const BookmarkedMovies: React.FC = () => {
  const [activePage, setActivePage] = useState<number>(1);
  return (
    <div className="bg-dark px-5 py-8">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img
            src="/img/im-westen-nichts-neues.jpg"
            alt="Im Westen nichts Neues"
          />
        </div>
        <div>
          <img src="/img/luckynumberslevin.jpg" alt="Lucky Number Slevin" />
        </div>
        <div>
          <img src="/img/parasite.jpg" alt="Parasite" />
        </div>
        <div>
          <img src="/public/img/zodiac.jpg" alt="Zodiac" />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        {[1, 2, 3, 4, 5].map((page) => (
          <PageButton
            key={page}
            page={page}
            active={page === activePage}
            onClick={() => setActivePage(page)}
          />
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default BookmarkedMovies;
