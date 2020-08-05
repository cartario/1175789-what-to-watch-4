import React from "react";
import renderer from "react-test-renderer";
import withCountFilms from "./with-count-films.js";
import PropTypes from "prop-types";

const films = [];

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
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
