import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmsByFilter, getActiveFilmId} from "../../selectors.js";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";

const MoviesList = (props) => {
  const {
    filmsByGenre,
    setActiveFilmId,
    showSimilar,
    showingFilmsCount,
    activeFilmId,
  } = props;

  const currentMovie = filmsByGenre.find((film) => film.id === activeFilmId);

  const setActiveFilm = (film) => {
    setActiveFilmId(film.id);
  };

  switch (showSimilar) {
    case `similar`:
      const similarFilms = filmsByGenre.filter(
          (film) => film.genre === currentMovie.genre
      );
      return (
        <div className="catalog__movies-list">
          {similarFilms
            .map((film) => (
              <MovieCard
                film={film}
                key={film.id}
                clickHandler={setActiveFilm}
              />
            ))
            .slice(0, 4)}
        </div>
      );
    default:
      return (
        <div className="catalog__movies-list">
          {filmsByGenre
            .map((film) => (
              <MovieCard
                film={film}
                key={film.id}
                clickHandler={setActiveFilm}
              />
            ))
            .slice(0, showingFilmsCount)}
        </div>
      );
  }
};

MoviesList.propTypes = {
  filmsByGenre: PropTypes.array.isRequired,
  activeFilm: PropTypes.func.isRequired,
  currentMovie: PropTypes.shape({
    genre: PropTypes.string,
  }),
  mode: PropTypes.string,
  showSimilar: PropTypes.string,
  showingFilmsCount: PropTypes.number,
  isDataReady: PropTypes.any,
  activeFilmId: PropTypes.any,
  setActiveFilmId: PropTypes.any,
};

const mapStateToProps = (state) => ({
  filmsByGenre: getFilmsByFilter(state),
  activeFilmId: getActiveFilmId(state),
});

const mapDispatchToProps = (dispatch) => ({
  activeFilm(film) {
    dispatch(FilmsReducerAC.activeFilm(film));
  },
  setActiveFilmId(filmId) {
    dispatch(FilmsReducerAC.setActiveFilmId(filmId));
  },
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
