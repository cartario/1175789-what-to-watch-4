import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const film = {
  title: ``,
  src: ``,
};

it(`should render movieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          film = {film}
          handleHover = {() => {}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
