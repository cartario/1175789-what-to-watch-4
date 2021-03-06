import React from "react";
import PropTypes from "prop-types";
import Overview from "./overview/overview.jsx";
import Details from "./details/details.jsx";
import Reviews from "./reviews/reviews.jsx";
import {TabNames} from "../../const.js";
import {Operation} from "../../reducer/films-by-genre/films-by-genre.js";
import {connect} from "react-redux";
import {getAllFilms} from "../../selectors.js";
import withActiveTabs from "../../hocs/with-active-tabs/with-active-tabs.js";

const renderCurrentTab = (currentTab, currentMovie) => {
  switch (currentTab) {
    case TabNames.DETAILS:
      return <Details currentMovie={currentMovie} />;
    case TabNames.REVIEWS:
      return <Reviews />;
    default:
      return <Overview currentMovie={currentMovie} />;
  }
};

const Tabs = (props) => {
  const {onClickHandler, currentTab, loadComments, films, activeFilmId} = props;

  const currentMovie = films.find((film) => film.id === Number(activeFilmId));

  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabNames).map((tab) => (
              <li
                key={tab}
                onClick={() => {
                  onClickHandler(tab);
                  loadComments(activeFilmId);
                }}
                className={
                  currentTab === tab
                    ? `movie-nav__item movie-nav__item--active`
                    : `movie-nav__item`
                }
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  href="#"
                  className="movie-nav__link"
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {renderCurrentTab(currentTab, currentMovie)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    dispatch(Operation.loadComments(filmId));
  },
});

Tabs.propTypes = {
  loadComments: PropTypes.func,
  onClickHandler: PropTypes.func,
  currentTab: PropTypes.string,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
  ).isRequired,
  activeFilmId: PropTypes.string.isRequired,
};

export {Tabs};
export default withActiveTabs(
    connect(mapStateToProps, mapDispatchToProps)(Tabs)
);
