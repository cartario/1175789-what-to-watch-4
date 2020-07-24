import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import {history} from "../../history.js";
import {connect} from "react-redux";
import {getFilmsByFilter, getCurrentMovie} from "../../selectors.js";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";

const MoviesList = (props) => {
  const {currentMovie, filmsByGenre, activeFilm, showSimilar, showingFilmsCount} = props;

  const setActiveFilm = (film) => {
    activeFilm(film);
    history.push(`/moviepage/${film.id}`);
  };

  switch (showSimilar) {
    case `similar`:
      const similarFilms = filmsByGenre.filter((film)=> film.genre === currentMovie.genre);
      return (
        <div className="catalog__movies-list">
          {similarFilms.map((film) =>

            <MovieCard
              film = {film}
              key = {film.id}
              clickHandler = {setActiveFilm}
            />
          ).slice(0, 4)}
        </div>
      );
    default :
      return (
        <div className="catalog__movies-list">
          {filmsByGenre.map((film) =>
            <MovieCard
              film = {film}
              key = {film.id}
              clickHandler = {setActiveFilm}
            />
          ).slice(0, showingFilmsCount)}
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
};

const mapStateToProps = (state) => ({
  filmsByGenre: getFilmsByFilter(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  activeFilm(film) {
    dispatch(FilmsReducerAC.activeFilm(film));
  },
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
