import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmsByFilter} from "../../selectors.js";

const MoviesList = (props) => {
  const {filmsByGenre, showSimilar, showingFilmsCount, activeFilmId} = props;

  const currentMovie = filmsByGenre.find(
      (film) => film.id === Number(activeFilmId)
  );

  switch (showSimilar) {
    case `showFavorite`:
      const favoriteFilms = filmsByGenre.filter((film)=> film.isFavorite);
      return (
        <div className="catalog__movies-list">
          {favoriteFilms.map((film) =>
            <MovieCard
              film = {film}
              key = {film.id}
            />
          )}
        </div>
      );
    case `similar`:
      const similarFilms = filmsByGenre.filter(
          (film) => film.genre === currentMovie.genre
      );
      return (
        <div className="catalog__movies-list">
          {similarFilms
            .map((film) => <MovieCard film={film} key={film.id} />)
            .slice(0, 4)}
        </div>
      );
    default:
      return (
        <div className="catalog__movies-list">
          {filmsByGenre
            .map((film) => <MovieCard film={film} key={film.id} />)
            .slice(0, showingFilmsCount)}
        </div>
      );
  }
};

MoviesList.propTypes = {
  filmsByGenre: PropTypes.array.isRequired,
  mode: PropTypes.string,
  showSimilar: PropTypes.string,
  showingFilmsCount: PropTypes.number,
  activeFilmId: PropTypes.any,
};

const mapStateToProps = (state) => ({
  filmsByGenre: getFilmsByFilter(state),
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
