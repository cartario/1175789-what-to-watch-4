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

    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {currentMovie, filmsByGenre} = this.props;
    switch (this.props.mode) {
      case `similar`:
        const similarFilms = filmsByGenre.filter((film)=> film.genre === currentMovie.genre);
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
  currentMovie: PropTypes.shape({
    genre: PropTypes.string,
  }),
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
