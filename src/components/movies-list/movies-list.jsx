import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {history} from "../../history.js";
import {connect} from "react-redux";
import {getFilmsByFilter, getCurrentMovie} from "../../selectors.js";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";

class MoviesList extends PureComponent {
  constructor(props) {

    super(props);
    this.state = {
      activeFilm: null,

    };

    this.currentFilmId = this.props.currentFilmId;
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    switch (this.props.mode) {
      case `similar`:
        let similarFilms = this.props.filmsByGenre;
        const getCurrentFilm = (films, currentfilmId) => {
          return films.filter((film) => film.id === currentfilmId)[0];
        };

        const currentFilm = getCurrentFilm(similarFilms, this.currentFilmId);
        if (currentFilm) {
          similarFilms = similarFilms.filter((film)=> film.genre === currentFilm.genre);
        }

        return (
          <div className="catalog__movies-list">
            {similarFilms.map((film) =>

              <MovieCard
                film = {film}
                key = {film.id}
                onHover = {this.handleHover}
                onMouseLeave= {this.handleMouseLeave}
                clickHandler = {this.handleClick}               
              >

              </MovieCard>
            ).slice(0, 4)}
          </div>
        );
      default :
        return (
          <div className="catalog__movies-list">
            {this.props.filmsByGenre.map((film) =>
              <MovieCard
                film = {film}
                key = {film.id}
                onHover = {this.handleHover}
                onMouseLeave= {this.handleMouseLeave}
                clickHandler = {this.handleClick}               
              >
              </MovieCard>
            )}
          </div>
        );
    }
  }

  handleClick(film) {   
    this.props.activeFilm(film);
    history.push(`/moviepage`);
    return <Redirect to="/moviepage"/>;
  }

  handleMouseLeave() {
    this.setState({

    });
  }

  handleHover(film) {
    this.setState({
      activeFilm: film,
    });
  }
}

MoviesList.propTypes = {
  filmsByGenre: PropTypes.array.isRequired,
  activeFilm: PropTypes.func.isRequired,
  // currentFilmId: PropTypes.number.isRequired,
  mode: PropTypes.string,
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
