import React from "react";
import Overview from "./overview/overview.jsx";
import Details from "./details/details.jsx";
import Reviews from "./reviews/reviews.jsx";

const Tabs = () => {

  const tabs = [`Overview`, `Details`, `Reviews`];

  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab) =>
              <li key = {tab} className="movie-nav__item movie-nav__item--active">
                <a href="#" className="movie-nav__link">{tab}</a>
              </li>)}
          </ul>
        </nav>
        <Overview/>
        <Details/>
        <Reviews/>
      </div>
    </>
  );
};

export default Tabs;
