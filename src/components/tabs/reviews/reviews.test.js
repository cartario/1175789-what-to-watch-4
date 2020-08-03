import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe(`Reviews-test`, () => {
  const store = mockStore({
    FILMS: {
      comments: [],
    },
  });
  it(`should render reviews`, () => {
    const tree = renderer.create(
        <Provider store = {store}>
          <Reviews

          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
