import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieCard = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

ReactDOM.render(
    <App movieTitle = {MovieCard.TITLE}
      movieGenre = {MovieCard.GENRE}
      movieYear = {MovieCard.YEAR}

    />,
    document.querySelector(`#root`)
);
