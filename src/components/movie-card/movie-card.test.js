import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const film = {
  title: ``,
  src: ``,
  preview: ``,
};

it(`should render movieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          film = {film}
          onHover = {() => {}}
          isPlaying = {false}

        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
