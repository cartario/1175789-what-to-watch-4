import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";

const film = {
  title: ``,
  src: ``,
  preview: ``,
};

test(`должен отрисовать видеоплеер`, ()=>{
  const tree = renderer
    .create(<Player
      film={film}
      isPlaying={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
