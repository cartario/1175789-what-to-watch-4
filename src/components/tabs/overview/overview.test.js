import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview.jsx";

const currentMovie = {
  rating: 1,
  scoresCount: 1,
  description: ``,
  director: ``,
  starring: [],
};

describe(`Overview-test`, () => {
  it(`should render Overview`, () => {
    const tree = renderer
      .create(
          <Overview
            currentMovie = {currentMovie}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
