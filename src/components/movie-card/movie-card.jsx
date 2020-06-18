import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class MovieCard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {film, onHover} = this.props;

    return (
      <article onMouseOver = {() => onHover(film)} className="small-movie-card catalog__movies-card" >
        <div className="small-movie-card__image">
          <img src = {film.src} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  onHover: PropTypes.func.isRequired,
};
