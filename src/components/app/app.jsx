import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";


const App = (props) => {

  const {movieInfo, onMovieButtonClick, films, genres, genre, onFilterChange, onFilterChangeFilms} = props;

  return (
    <Main movieInfo = {movieInfo}
      onMovieButtonClick = {onMovieButtonClick}
      films = {films}
      genres = {genres}
      currentGenre = {genre}
      onFilterChangeFilms = {onFilterChangeFilms}
      onFilterChange = {onFilterChange}
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
};

export {App};

const mapStateToProps = (state) => ({
  genre: state.genre,
  genres: state.genres,
  films: state.films,  
});

const mapDispatchToProps = (dispatch) => ({  
  onFilterChange(genre) {dispatch(ActionCreator.changeFilter(genre))},
  onFilterChangeFilms(genre) {dispatch(ActionCreator.getFilmsByFilter(genre))},  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
