import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {FullPlayerConnected} from "./full-player.jsx";
import {Provider} from "react-redux";

const mockStore = configureStore([]);
const store = mockStore({
  FILMS: {
    filmsByGenre: [
      {
        posterImage: ``,
        videoLink: ``,
        id: 1,
      },
    ],
  },
});

test(`should render genres-list`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <FullPlayerConnected
            elapsedTime={``}
            exitClickHandler={() => {}}
            playChangeHandler={() => {}}
            fullScreenClickHandler={() => {}}
            position={1}
            videoRef={React.createRef()}
            isPlaying={true}
            match={{params: {id: `1`}}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
