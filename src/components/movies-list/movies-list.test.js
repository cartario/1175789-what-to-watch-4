import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {history} from "../../history.js";
import {Router} from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({
  FILMS: {
    filmsByGenre: [],
  },
});

describe(`Movies-list-test`, () => {
  it(`should render movies-list`, () => {

    const tree = renderer
      .create(
          <Router history = {history}>
            <Provider store = {store}>
              <MoviesList

              />
            </Provider>
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
