import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./private-route.jsx";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {history} from "../../history.js";
import {Router} from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({
  USER: {

  },
});

describe(`Private-route-test`, () => {
  it(`should render private-route`, () => {

    const tree = renderer
      .create(
          <Router history = {history}>
            <Provider store = {store}>
              <PrivateRoute
                authorizationStatus = {``}
              />
            </Provider>
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
