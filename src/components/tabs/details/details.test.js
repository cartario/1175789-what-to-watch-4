import React from "react";
import renderer from "react-test-renderer";
import Details from "./details.jsx";

const currentMovie = {
  director: ``,
  starring: [],
  runTime: ``,
  released: 1,
  genre: ``,
};

describe(`Detais-test`, () => {
  it(`should render details`, () => {
    const tree = renderer.create(
        <Details
          currentMovie = {currentMovie}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
