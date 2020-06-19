import React from "react";
import MovieCard from "./movie-card";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";


const film = {
  title: ``,
  src: ``,
};

Enzyme.configure({
  adapter: new Adapter(),
});

test(`should get data while hover`, () => {
  const handleHover = jest.fn();

  const movieCard = shallow(<MovieCard
    film = {film}
    handleHover = {handleHover}
  />);

  const smallMovieCard = movieCard.find(`article.small-movie-card`);
  smallMovieCard.simulate(`mouseOver`);
  expect(handleHover).toHaveBeenLastCalledWith(film);
});
