import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";


const App = (props) => {
  const {MovieInfo, onMovieButtonClick, films} = props;
  return (
    <Main MovieInfo = {MovieInfo}
      onMovieButtonClick = {onMovieButtonClick}
      films = {films}
    />
  );
};

App.propTypes = {
  MovieInfo: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
    TITLE: PropTypes.string.isRequired,
  }),
  onMovieButtonClick: PropTypes.func,
  films: PropTypes.array.isRequired,
};

export default App;
