import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {history} from "../../history.js";
import {Router} from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({
  USER: {

  },
  FILMS: {
    filmsByGenre: [],
    films: [],
  },
});

describe(`MyList-test`, () => {
  it(`should render my-list`, () => {
    const tree = renderer
      .create(
          <Router history = {history}>
            <Provider store = {store}>
              <MyList

              />
            </Provider>
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
