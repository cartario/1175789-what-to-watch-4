import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {history} from "../../history.js";
import {Router} from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({
  USER: {

  },
});

const film = {
  id: 1,
  src: ``,
  title: ``,
  preview: ``,
};

describe(`MovieCard-test`, () => {
  it(`should render movie-card`, () => {

    const tree = renderer
      .create(
          <Router history = {history}>
            <Provider store = {store}>
              <MovieCard
                film = {film}
              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
