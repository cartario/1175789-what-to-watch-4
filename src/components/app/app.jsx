import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";


const App = (props) => {

  const {movieInfo, onMovieButtonClick, films, filmsByGenre, genres, currentGenre, onFilterClick} = props;

  return (
    <Main movieInfo = {movieInfo}
      onMovieButtonClick = {onMovieButtonClick}
      films = {films}
      filmsByGenre = {filmsByGenre}
      genres = {genres}
      currentGenre = {currentGenre}
      onFilterClick = {onFilterClick}
    />
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
    TITLE: PropTypes.string.isRequired,
  }),
  onMovieButtonClick: PropTypes.func,
  films: PropTypes.array.isRequired,
  filmsByGenre: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export {App};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: state.genres,
  films: state.films,
  filmsByGenre: state.filmsByGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilter(genre));
    dispatch(ActionCreator.getFilmsByFilter(genre));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
