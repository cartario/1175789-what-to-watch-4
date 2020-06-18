import React from "react";
import Main from "./main";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const MovieTitle = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`,
  },
  {
    title: `Aviator`,
    src: `img/aviator.jpg`,
  },
  {
    title: `We need to talk about Kevin`,
    src: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    title: `Revenant`,
    src: `img/revenant.jpg`,
  },
  {
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should title be pressed`, () => {
  const onMovieButtonClick = jest.fn();

  const main = shallow(
      <Main
        films = {films}
        movieTitle = {MovieTitle}
        onMovieButtonClick = {onMovieButtonClick}
      />
  );

  const movieCard = main.find(`h2.movie-card__title`);
  movieCard.simulate(`click`);

  expect(onMovieButtonClick).toBeCalled();
});

