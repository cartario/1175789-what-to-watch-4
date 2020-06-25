import React from "react";
import Main from "./main";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const MovieInfo = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: ``,
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    preview: ``,
  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`,
    preview: ``,
  },
  {
    title: `Aviator`,
    src: `img/aviator.jpg`,
    preview: ``,
  },
  {
    title: `We need to talk about Kevin`,
    src: `img/we-need-to-talk-about-kevin.jpg`,
    preview: ``,
  },
  {
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
    preview: ``,
  },
  {
    title: `Revenant`,
    src: `img/revenant.jpg`,
    preview: ``,
  },
  {
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
    preview: ``,
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
        movieInfo = {MovieInfo}
        onMovieButtonClick = {onMovieButtonClick}
      />
  );

  const movieCard = main.find(`h2.movie-card__title`);
  movieCard.simulate(`click`);

  expect(onMovieButtonClick).toBeCalled();
});

