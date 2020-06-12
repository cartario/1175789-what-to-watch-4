import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {

  // eslint-disable-next-line react/prop-types
  const {movieTitle, movieGenre, movieYear, movies} = props;
  return (
    <Main movieTitle = {movieTitle}
      movieGenre = {movieGenre}
      movieYear = {movieYear}
      movies = {movies}
    />
  );
};

export default App;
