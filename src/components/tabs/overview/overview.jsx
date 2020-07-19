import React from "react";
import PropTypes from "prop-types";
import {getTextRate} from "../../../utils.js";
import {connect} from "react-redux";
import {getAllFilms, getCurrentMovie} from "../../../selectors.js";

const Overview = (props) => {
  const {films, currentMovie} = props;
  const {rating, scoresCount, description, director, starring} = films[currentMovie - 1];
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextRate(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  currentMovie: getCurrentMovie(state),
});

Overview.propTypes = {
  films: PropTypes.array.isRequired,
  currentMovie: PropTypes.number.isRequired,
};

export {Overview};
export default connect(mapStateToProps)(Overview);
