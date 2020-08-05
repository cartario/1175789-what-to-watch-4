import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {history} from "../../history.js";

const mockStore = configureStore([]);

const store = mockStore({
  FILMS: {
    films: [
      {
        title: ``,
        posterImage: ``,
        genre: ``,
        released: ``,
        id: 1,
      }
    ],

    filmsByGenre: [],
  },
});

describe(`moviePage-test`, () => {
  it(`should render MoviePage`, () => {
    const tree = renderer
      .create(
          <Router history = {history}>
            <Provider store = {store}>
              <MoviePage
                authorizationStatus = {``}
                activeFilmId = {1}

              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
