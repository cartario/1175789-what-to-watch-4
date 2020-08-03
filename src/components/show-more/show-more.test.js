import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more.jsx";

describe(`ShowMore-test`, () => {
  it(`should render show-more`, () => {
    const showMoreClickHandler = jest.fn();
    const tree = renderer.create(
        <ShowMore
          showMoreClickHandler = {showMoreClickHandler}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
