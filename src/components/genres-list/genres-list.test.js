import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";


const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: ``,
  },
];

test(`should render genres-list`, () => {
  const tree = renderer
    .create(
        <GenresList
          films = {films}
          onFilterClick = {() => {}}
          currentGenre = {``}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
