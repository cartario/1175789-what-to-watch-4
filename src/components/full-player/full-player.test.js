// import React from 'react';
// import renderer from 'react-test-renderer';
// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';
// import {Router} from 'react-router-dom';
// import {history} from "../../history.js";
// import FullPlayer from "./full-player.jsx";

// const mockStore = configureStore([]);

// describe(`FullVideoPlayer`, () => {
//   const store = mockStore({
//     FILMS: {
//       filmsByGenre: [],
//       id: `1`,
//       posterImage: ``,
//     }

//   });

//   const match = {params:
//     {
//       id: `1`,
//     }};

//   it(`should render FullPlayer`, () => {
//     const tree = renderer.create(
//         <Router history = {history}>
//           <Provider store = {store}>
//             <FullPlayer
//               match = {match}
//             />
//           </Provider>
//         </Router>, {
//           createNodeMock: () => {
//             return {};
//           }
//         }
//     ).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });
