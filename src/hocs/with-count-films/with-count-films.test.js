import React from "react";
import renderer from "react-test-renderer";
// import PropTypes from "prop-types";
import withCountFilms from "./with-count-films.js";

const films = [];

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withCountFilms(MockComponent);

describe(`withCountFilms Test`, () => {
  it(`should render withCountFilms`, () => {
    const tree = renderer.create(
      (
        <MockComponentWrapped 
          films = {films}
        />
      ), {
        createNodeMock() {
          return {};
        }
      }
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});