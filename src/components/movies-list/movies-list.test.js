// import React from "react";
// import {Router} from 'react-router-dom';
// import renderer from "react-test-renderer";
// import {MoviesList} from "./movies-list.jsx";
// import history from '../../history.js';

// const currentGenre = ``;
// const filmsByGenre = [
//   {
//     title: `Fantastic Beasts: The Crimes of Grindelwald`,
//     src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: ``,
//   },
//   {
//     title: `Bohemian Rhapsody`,
//     src: `img/bohemian-rhapsody.jpg`,
//     preview: ``,
//   },
//   {
//     title: `Macbeth`,
//     src: `img/macbeth.jpg`,
//     preview: ``,
//   },
//   {
//     title: `Aviator`,
//     src: `img/aviator.jpg`,
//     preview: ``,
//   },
//   {
//     title: `We need to talk about Kevin`,
//     src: `img/we-need-to-talk-about-kevin.jpg`,
//     preview: ``,
//   },
//   {
//     title: `What We Do in the Shadows`,
//     src: `img/what-we-do-in-the-shadows.jpg`,
//     preview: ``,
//   },
//   {
//     title: `Revenant`,
//     src: `img/revenant.jpg`,
//     preview: ``,
//   },
//   {
//     title: `Johnny English`,
//     src: `img/johnny-english.jpg`,
//     preview: ``,
//   },
// ];

// const location = {};

// it(`should render movies-list`, () => {
//   const tree = renderer
//     .create(
//         <Router history = {history}>
//           <MoviesList
//             filmsByGenre = {filmsByGenre}
//             currentGenre={currentGenre}
//             location = {location}
//           />
//         </Router>, {
//           createNodeMock: () => {
//             return {};
//           }
//         }
//     )
//     .toJSON();

//   expect(tree).toMatchSnapshot();

// });
