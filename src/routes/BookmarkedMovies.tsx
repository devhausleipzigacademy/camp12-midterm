/*
 Create a new page
 Import the necessary components
 Follow the design on Figma
 Display bookmarked movies (use dummy data for now).
 */

import { NavBar } from "../components/nav-bar";
import { PageButton } from "../components/page-button";
const BookmarkedMovies = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img
            src="/public/img/im-westen-nichts-neues.jpg"
            alt="Im Westen nichts Neues"
          />
        </div>
        <div>
          <img
            src="/public/img/luckynumberslevin.jpg"
            alt="Lucky Number Slevin"
          />
        </div>
        <div>
          <img src="/public/img/parasite.jpg" alt="Parasite" />
        </div>
        <div>
          <img src="/public/img/zodiac.jpg" alt="Zodiac" />
        </div>
      </div>
      <div className="grid-cols-5">
        {/* Hier kann ich den active State ja nur über etwas Logik herstellen, oder? */}
        {[1, 2, 3, 4, 5].map((page) => (
          <PageButton key={page} page={page} active={page === activePage} />
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default BookmarkedMovies;
