import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";


test(`должен отрисовать видеоплеер`, ()=>{
  const tree = renderer
    .create(<Player

    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
