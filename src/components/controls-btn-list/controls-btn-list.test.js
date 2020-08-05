import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {history} from "../../history.js";

import ControlsBtnList from './controls-btn-list.jsx';

const currentMovie = {
  id: 1,
};

const mockStore = configureStore([]);

test(`should render control-btn-list`, () => {
  const store = mockStore({

  });
  const tree = renderer
    .create(
        <Router history = {history}>
          <Provider store = {store}>
            <ControlsBtnList
              addListClick = {() => {}}
              removeListClick = {() => {}}
              activeFilmId = {``}
              currentMovie = {currentMovie}
            />
          </Provider>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
