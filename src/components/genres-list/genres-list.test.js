import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";

const genres = [];
const currentGenre = ``;


test(`should render genres-list`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres={genres}
          currentGenre={currentGenre}
          onFilterClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
