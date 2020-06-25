import React from "react";
import PropTypes from "prop-types";
import Player from "../player/player.jsx";


const MovieCard = (props) => {

  const {film, onHover, isPlaying} = props;

  const handlerMouseOver = () => {
    onHover(film);
  };

  return (
    <React.Fragment>
      <article onMouseOver = {handlerMouseOver} className="small-movie-card catalog__movies-card" >

        <div className="small-movie-card__image">
          <Player film={film} isPlaying = {isPlaying}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  onHover: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;
