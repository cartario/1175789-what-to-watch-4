import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
  FILMS: {
    films: [
      {
        id: 1,
      },
    ],
  },

});

describe(`Tabs test`, () => {
  it(`should render tabs`, () => {
    const tree = renderer.create(
        <Provider store = {store}>
          <Tabs
            activeFilmId = {1}
          />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
