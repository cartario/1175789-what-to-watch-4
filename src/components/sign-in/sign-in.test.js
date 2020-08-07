import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from 'react-router-dom';
import {history} from "../../history.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({
  USER: {

  },
});

const authStatusErr = false;

describe(`Sign-In-test`, () => {
  it(`should render sign-in`, () => {
    const login = jest.fn();
    const tree = renderer.create(
        <Router history = {history}>
          <Provider store = {store}>
            <SignIn
              login = {login}
              authStatusErr = {authStatusErr}
            />
          </Provider>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
