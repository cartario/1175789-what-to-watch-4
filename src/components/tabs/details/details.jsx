import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllFilms, getCurrentMovie} from "../../../selectors.js";

const Details = (props) => {
  const {films, currentMovie} = props;

  let active;
  currentMovie.id ? active = currentMovie : active = films[0];

  const {director, starring, runTime, released, genre} = active;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{runTime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  
  currentMovie: getCurrentMovie(state),
});

Details.propTypes = {
  films: PropTypes.array.isRequired,
  // currentMovie: PropTypes.number.isRequired,
};

export {Details};
export default connect(mapStateToProps)(Details);
