import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  render() {
    return (
      <div className="catalog__movies-list" >
        {this.props.films.map((film) =>
          <MovieCard film = {film} key = {film.title} handleHover = {this.handleHover}></MovieCard>
        )}
      </div>
    );
  }

  handleHover(film) {
    this.setState({
      activeFilm: film
    });
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
};
