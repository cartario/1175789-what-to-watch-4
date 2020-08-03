import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const onMovieButtonClick = () => {};

const MovieInfo = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};
const filmsByGenre = [];
const authorizationStatus = ``;
const login = () => {};
const isDataReady = false;
const genres = [];
const currentGenre = ``;

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
  const store = mockStore({
    films: []
  });
  const tree = renderer
    .create(
        <Provider store = {store}>
          <App
            movieInfo = {MovieInfo}
            films = {films}
            onMovieButtonClick = {onMovieButtonClick}
            filmsByGenre = {filmsByGenre}
            genres = {genres}
            currentGenre = {currentGenre}
            onFilterClick = {() => {}}
            authorizationStatus = {authorizationStatus}
            login = {login}
            isDataReady = {isDataReady}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
