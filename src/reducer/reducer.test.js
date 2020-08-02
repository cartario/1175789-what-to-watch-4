import {reducers} from "./reducer";
// import {ActionType} from "../reducer/reducer.js";
// const films = [
//   {
//     title: `Fantastic Beasts: The Crimes of Grindelwald`,
//     src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     genre: `Comedies`,
//   },
//   {
//     title: `Bohemian Rhapsody`,
//     src: `img/bohemian-rhapsody.jpg`,
//     preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
//     genre: `Classic`,
//   },
//   {
//     title: `Macbeth`,
//     src: `img/macbeth.jpg`,
//     preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
//     genre: `Dramas`,
//   },
//   {
//     title: `Aviator`,
//     src: `img/aviator.jpg`,
//     preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     genre: `Dramas`,
//   },
//   {
//     title: `We need to talk about Kevin`,
//     src: `img/we-need-to-talk-about-kevin.jpg`,
//     preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
//     genre: `Crime`,
//   },
//   {
//     title: `What We Do in the Shadows`,
//     src: `img/what-we-do-in-the-shadows.jpg`,
//     preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     genre: `Romance`,
//   },
//   {
//     title: `Revenant`,
//     src: `img/revenant.jpg`,
//     preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
//     genre: `Sci-Fi`,
//   },
//   {
//     title: `Johnny English`,
//     src: `img/johnny-english.jpg`,
//     preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     genre: `Thrillers`,
//   },
//   {
//     title: `Johnny English3`,
//     src: `img/johnny-english.jpg`,
//     preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     genre: `Thrillers`,
//   },
// ];

// const genres = [`All genres`, `Thrillers`, `Sci-Fi`, `Romance`, `Crime`, `Dramas`, `Classic`, `Comedies`];
// const currentGenre = `All genres`;

test(`Reducer without additional parameters should return initial state`, ()=> {
  expect(reducers(void 0, {})).toEqual({
    CURRENT_GENRE: {
      currentGenre: `All genres`,
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
    },

    FILMS: {
      films: [],
      filmsByGenre: [],
      comments: [],
      isCommentLoading: false,
      isDataReady: false,
      isReviewError: false,
      isReviewSent: false,
      newComment: {},
    }
  });
});
