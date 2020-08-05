import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import {history} from "../../history.js";
import {Router} from 'react-router-dom';

const currentMovie = {
  rating: 1,
  scoresCount: 1,
  description: ``,
  director: ``,
  starring: [],
  title: ``,
  backgroundImage: ``,
};

describe(`Header-test`, () => {
  it(`should render Header`, () => {
    const tree = renderer
      .create(
          <Router history = {history}>
            <Header
              currentMovie = {currentMovie}
              authorizationStatus = {``}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
