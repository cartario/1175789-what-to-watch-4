import React from "react";
import PropTypes from "prop-types";
import {getTextRate} from "../../../utils.js";
import {connect} from "react-redux";
import {getAllFilms, getCurrentMovie} from "../../../selectors.js";

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

const mapStateToProps = (state) => ({
  films: getAllFilms(state),

  currentMovie: getCurrentMovie(state),
});

Overview.propTypes = {
  films: PropTypes.array.isRequired,
  currentMovie: PropTypes.shape({
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.array,
  }),
};

export {Overview};
export default connect(mapStateToProps)(Overview);
