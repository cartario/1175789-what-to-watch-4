import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmsByFilter, getFavoriteFilms} from "../../selectors.js";

const SHOWING_SIMILAR_MOVIE_COUNT = 4;

const MoviesList = (props) => {
  const {filmsByGenre, showSimilar, showingFilmsCount, activeFilmId, favoriteFilms} = props;

  const currentMovie = filmsByGenre.find(
      (film) => film.id === Number(activeFilmId)
  );

  switch (showSimilar) {
    case `showFavorite`:

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
      ).filter((film) => film.id !== Number(activeFilmId))
      .sort(() => Math.random - 0.5);
      return (
        <div className="catalog__movies-list">
          {similarFilms
            .map((film) => <MovieCard film={film} key={film.id} />)
            .slice(0, SHOWING_SIMILAR_MOVIE_COUNT)}
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
  filmsByGenre: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ).isRequired,
  favoriteFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ).isRequired,
  showSimilar: PropTypes.string,
  showingFilmsCount: PropTypes.number,
  activeFilmId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filmsByGenre: getFilmsByFilter(state),
  favoriteFilms: getFavoriteFilms(state),
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
