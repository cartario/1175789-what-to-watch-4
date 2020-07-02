import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";


class MoviesList extends PureComponent {
  constructor(props) {

    super(props);
    this.state = {
      activeFilm: null,

    };

    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  render() {

    return (
      <div className="catalog__movies-list">
        {this.props.filmsByGenre.map((film) =>

          <MovieCard
            film = {film}
            key = {film.title}
            onHover = {this.handleHover}
            onMouseLeave= {this.handleMouseLeave}
          >

          </MovieCard>
        )}
      </div>
    );
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
