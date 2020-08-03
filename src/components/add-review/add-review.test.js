import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {history} from "../../history.js";

const mockStore = configureStore([]);

const store = mockStore({
  FILMS: {},
});

const films = [
  {
    id: 1,
  }
];

describe(`AddReview-test`, () => {
  it(`should render AddReview`, () => {
    const tree = renderer
      .create(
          <Router history = {history}>
            <Provider store = {store}>
              <AddReview
                activeFilmId = {1}
                films = {films}
              />
            </Provider>
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
