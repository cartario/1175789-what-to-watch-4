import React from "react";
import renderer from "react-test-renderer";
import withActiveTabs from "./with-active-tabs.js";
import PropTypes from "prop-types";

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

const MockComponentWrapped = withActiveTabs(MockComponent);

describe(`withActiveTabs Test`, () => {
  it(`should render withActiveTabs`, () => {
    const tree = renderer.create((
      <MockComponentWrapped

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
