import React from "react";
import PropTypes from "prop-types";
import {getTextRate} from "../../../utils.js";

const Overview = (props) => {
  const {currentMovie} = props;
  const {rating, scoresCount, description, director, starring} = currentMovie;

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

Overview.propTypes = {
  currentMovie: PropTypes.shape({
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
  }).isRequired,
};

export default Overview;
