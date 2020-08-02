// import React from "react";
// import Enzyme, {shallow} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import Player from "./player";

// Enzyme.configure({
//   adapter: new Adapter(),
// });

// const film = {
//   title: ``,
//   src: ``,
//   preview: ``,
// };

// test(`тест должен проверить, что у компонента есть  состояниt: «пауза`, ()=>{

//   const player = shallow(
//       <Player
//         film={film}
//         isPlaying={false}
//       />);

//   const expectedState = {isPause: true};
//   const state = player.state();

//   expect(state).toMatchObject(expectedState);
// });

// test(`тест должен проверить, что у компонента есть  состояние: "воспроизвести"`, ()=>{

//   const player = shallow(
//       <Player
//         film={film}
//         isPlaying={true}
//       />);

//   const expectedState = {isPause: false};
//   const state = player.state();

//   expect(state).toMatchObject(expectedState);
// });
