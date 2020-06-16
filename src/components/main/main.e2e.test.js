import React from "react";
import Main from "./main";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

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

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should movie be pressed`, () => {
  const onMovieButtonClick = jest.fn();

  const main = shallow(
      <Main
        movies = {Movies}
        movieTitle = {MovieCard.TITLE}
        movieGenre = {MovieCard.GENRE}
        movieYear = {MovieCard.YEAR}
        onMovieButtonClick = {onMovieButtonClick}
      />
  );

  const movieCard = main.find(`h2.movie-card__title`);
  movieCard.simulate(`click`);

  expect(onMovieButtonClick).toBeCalled();
});

