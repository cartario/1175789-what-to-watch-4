import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const movieCard = {
  title: `The grand Budapest`,
  genre: `Drama`,
  year: 2014,

};

ReactDOM.render(
    <App movieTitle = {movieCard.title}
      movieGenre = {movieCard.genre}
      movieYear = {movieCard.year}

    />,
    document.querySelector(`#root`)
);
