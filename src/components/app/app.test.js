import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const onMovieButtonClick = () => {};

const MovieInfo = {
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

it(`renderApp`, () => {
  const tree = renderer
    .create(
        <App
          MovieInfo = {MovieInfo}
          films = {films}
          onMovieButtonClick = {onMovieButtonClick}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
