import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../const.js";

const ControlsBtnList = (props) => {
  const {addListClick, removeListClick, activeFilmId = 1} = props;

  const addListHandler = () => {
    addListClick(activeFilmId);
  };

  const removeListHandler = () => {
    removeListClick(activeFilmId);
  };

  const isListed = false;

  return (
    <>
      <Link
        to={`${AppRoutes.PLAYER}/${activeFilmId}`}
        className="btn btn--play movie-card__button"
        type="button"
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>

      {isListed ? (
        <button
          onClick={removeListHandler}
          className="btn btn--list movie-card__button"
          type="button"
        >
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#in-list"></use>
          </svg>
          <span>My list</span>
        </button>
      ) : (
        <button
          onClick={addListHandler}
          className="btn btn--list movie-card__button"
          type="button"
        >
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addListClick(currentId) {
    dispatch(FilmsReducerAC.addWatchList(currentId));
  },

  removeListClick(currentId) {
    dispatch(FilmsReducerAC.removeWatchList(currentId));
  },
});

ControlsBtnList.propTypes = {
  addListClick: PropTypes.func.isRequired,
  removeListClick: PropTypes.func.isRequired,
  currentMovie: PropTypes.any,
  activeFilmId: PropTypes.any,
};

export {ControlsBtnList};
export default connect(null, mapDispatchToProps)(ControlsBtnList);
