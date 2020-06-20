import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const MovieInfo = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const onMovieButtonClick = () => {};

ReactDOM.render(
    <App movieInfo = {MovieInfo}
      onMovieButtonClick = {onMovieButtonClick}
      films = {films}
    />,
    document.querySelector(`#root`)
);
