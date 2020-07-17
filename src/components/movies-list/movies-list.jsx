import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {history} from "../../history.js";


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

  handleClick(film) {    
    this.props.activeFilm(film.id);
    history.push("/moviepage");
    return <Redirect to="/moviepage"/>  ;  
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
  films: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  filmsByGenre: PropTypes.array.isRequired,
};

export {MoviesList};
