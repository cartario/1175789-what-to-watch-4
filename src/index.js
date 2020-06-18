import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const MovieTitle = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const onMovieButtonClick = () => {};

// const Movies = [`Fantastic Beasts: The Crimes of Grindelwald`,
//   `Bohemian Rhapsody`,
//   `Macbeth`,
//   `Aviator`,
//   `We need to talk about Kevin`,
//   `What We Do in the Shadows`,
//   `Revenant`,
//   `Johnny English`,
//   `Shutter Island`,
//   `Pulp Fiction`,
//   `No Country for Old Men`,
//   `Snatch`,
//   `Moonrise Kingdom`,
//   `Seven Years in Tibet`,
//   `War of the Worlds`,
//   `Dardjeeling Limited`,
//   `Orlando`,
//   `Mindhunter`,
//   `Midnight Special`];

ReactDOM.render(
    <App movieTitle = {MovieTitle}
      onMovieButtonClick = {onMovieButtonClick}
      films = {films}
    />,
    document.querySelector(`#root`)
);
