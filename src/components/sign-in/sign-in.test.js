import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from 'react-router-dom';
import {history} from "../../history.js";

describe(`Sign-In-test`, () => {
  it(`should render sign-in`, () => {
    const login = jest.fn();
    const tree = renderer.create(
        <Router history = {history}>
          <SignIn
            login = {login}
          />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
