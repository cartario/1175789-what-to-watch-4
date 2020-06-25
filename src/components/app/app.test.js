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

it(`renderApp`, () => {
  const tree = renderer
    .create(
        <App
          movieInfo = {MovieInfo}
          films = {films}
          onMovieButtonClick = {onMovieButtonClick}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
