import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const onMovieButtonClick = () => {};

const MovieCard = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const Movies = [`Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`];

it(`renderApp`, () => {
  const tree = renderer
    .create(
        <App
          movieTitle = {MovieCard.TITLE}
          movieGenre = {MovieCard.GENRE}
          movieYear = {MovieCard.YEAR}
          movies = {Movies}
          onMovieButtonClick = {onMovieButtonClick}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
