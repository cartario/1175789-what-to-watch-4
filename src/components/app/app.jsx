import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";


const App = (props) => {

  const {movieInfo, onMovieButtonClick, films, onFilterChangeFilms} = props;

  return (
    <Main movieInfo = {movieInfo}
      onMovieButtonClick = {onMovieButtonClick}
      films = {films}
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
  films: state.films,  
});

const mapDispatchToProps = (dispatch) => ({  
  onFilterChange() {dispatch(ActionCreator.changeFilter(`Dramas`))},
  onFilterChangeFilms() {dispatch(ActionCreator.getFilmsByFilter(`Dramas`))},  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
