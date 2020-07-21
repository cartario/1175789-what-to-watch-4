import React from "react";
import PropTypes from "prop-types";
import Overview from "./overview/overview.jsx";
import Details from "./details/details.jsx";
import Reviews from "./reviews/reviews.jsx";
import {TabNames} from "../../const.js";
import {Operation} from "../../reducer/films-by-genre/films-by-genre.js";
import {connect} from "react-redux";
import {getCurrentMovie} from "../../selectors.js";
import withTabs from "../../hocs/with-tabs/with-tabs.js";

const renderCurrentTab = (currentTab) => {
  switch (currentTab) {
    case TabNames.DETAILS:
      return <Details/>;
    case TabNames.REVIEWS:
      return <Reviews/>;
    default :
      return <Overview/>;
  }
};

const Tabs = (props) => {
  const {clickHandler, currentTab, currentMovie, loadComments} = props;

  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabNames).map((tab) =>
              <li key = {tab}
                onClick = { ()=>{
                  clickHandler(tab);
                  loadComments(currentMovie.id);
                } } className={currentTab === tab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                <a onClick={(e)=>e.preventDefault()} href="#" className="movie-nav__link">{tab}</a>
              </li>
            )}
          </ul>
        </nav>
        {renderCurrentTab(currentTab)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    dispatch(Operation.loadComments(filmId));
  }
});

Tabs.propTypes = {
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
  }),
  loadComments: PropTypes.func,
  clickHandler: PropTypes.func,
  currentTab: PropTypes.string,
};

export {Tabs};
export default withTabs(connect(mapStateToProps, mapDispatchToProps)(Tabs));
