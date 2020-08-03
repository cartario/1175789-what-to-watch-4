import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
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

const films = [{
  id: 1,
  src: ``,
  title: ``,
  preview: ``,
}];

describe(`Main-test`, () => {
  it(`should render Main`, () => {
    const onFilterClick = jest.fn();
    const tree = renderer
      .create(
          <Router history = {history}>
            <Provider store = {store}>
              <Main
                onFilterClick = {onFilterClick}
                authorizationStatus = {``}
                currentGenre = {``}
                films = {films}
              />
            </Provider>
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
