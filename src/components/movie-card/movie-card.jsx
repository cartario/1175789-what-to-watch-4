import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Player from "../player/player.jsx";

class MovieCard extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {film, onHover, onMouseLeave} = this.props;

    const handlerMouseOver = () => {
      onHover(film);
      this.setState({
        isPlaying: true,
      });
    };

    const handlerMouseLeave = () => {
      onMouseLeave();
      this.setState({
        isPlaying: false,
      });
    };

    return (
      <React.Fragment>
        <article
          onMouseOver = {handlerMouseOver}
          onMouseLeave = {handlerMouseLeave}
          className="small-movie-card catalog__movies-card" >

          <div className="small-movie-card__image">
            <Player film={film} isPlaying = {this.state.isPlaying}/>
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
          </h3>
        </article>
      </React.Fragment>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  onHover: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,

};

export default MovieCard;
