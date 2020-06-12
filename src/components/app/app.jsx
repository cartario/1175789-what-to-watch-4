import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {


  const {movieTitle, movieGenre, movieYear, movies} = props;
  return (
    <Main movieTitle = {movieTitle}
      movieGenre = {movieGenre}
      movieYear = {movieYear}
      movies = {movies}
    />
  );
};

App.propTypes = {
  movies: PropTypes.array,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
};

export default App;
