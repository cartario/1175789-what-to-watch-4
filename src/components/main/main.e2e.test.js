import React from "react";
import Main from "./main";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const MovieInfo = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const genres = [
  `All genres`, `Drama`, `Horror`
];

const currentGenre = `All genre`;

const filmsByGenre = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedies`,
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Classic`,
  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Dramas`,
  },
  {
    title: `Aviator`,
    src: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Dramas`,
  },
  {
    title: `We need to talk about Kevin`,
    src: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Crime`,
  },
  {
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Romance`,
  },
  {
    title: `Revenant`,
    src: `img/revenant.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Sci-Fi`,
  },
  {
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Thrillers`,
  },
  {
    title: `Johnny English3`,
    src: `img/johnny-english.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Thrillers`,
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should title be pressed`, () => {
  const onMovieButtonClick = jest.fn();

  const main = shallow(
      <Main
        filmsByGenre = {filmsByGenre}
        movieInfo = {MovieInfo}
        onMovieButtonClick = {onMovieButtonClick}
        genres = {genres}
        currentGenre = {currentGenre}
        onFilterClick = {() => {}}
      />
  );

  const movieCard = main.find(`h2.movie-card__title`);
  movieCard.simulate(`click`);

  expect(onMovieButtonClick).toBeCalled();
});

