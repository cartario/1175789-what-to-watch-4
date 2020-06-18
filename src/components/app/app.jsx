import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";


const App = (props) => {
  const {movieTitle, onMovieButtonClick, films} = props;
  return (
    <Main movieTitle = {movieTitle}
      onMovieButtonClick = {onMovieButtonClick}
      films = {films}
    />
  );
};

App.propTypes = {
  movies: PropTypes.array,
  movieTitle: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
    TITLE: PropTypes.string.isRequired,
  }),
  onMovieButtonClick: PropTypes.func,
  films: PropTypes.array.isRequired,
};

export default App;
