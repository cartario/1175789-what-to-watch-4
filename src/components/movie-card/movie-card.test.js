// import React from "react";
// import renderer from "react-test-renderer";
// import MovieCard from "./movie-card";
// import {Router} from 'react-router-dom';
// import {history} from "../../history.js";
// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';

// const mockStore = configureStore([]);

// const film = {
//   title: ``,
//   src: ``,
//   preview: ``,
// };

// it(`should render movieCard`, () => {
//   const store = mockStore({

//   });
//   const tree = renderer
//     .create(
//         <Router history = {history}>
//           <Provider store = {store}>
//             <MovieCard
//               film = {film}
//               onHover = {() => {}}
//               onMouseLeave = {() => {}}
//               isPlaying = {false}

//             />
//           </Provider>
//         </Router>)
//     .toJSON();

//   expect(tree).toMatchSnapshot();
// });
