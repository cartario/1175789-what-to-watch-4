import React from "react";
import Player from "../player/player.jsx";
import withCard from "../../hocs/with-video/with-card.js";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {film, handlerMouseLeave, handlerMouseOver, isPlaying} = props;
  return (
    <article
      onMouseOver = {handlerMouseOver}
      onMouseLeave = {handlerMouseLeave}
      className="small-movie-card catalog__movies-card" >
      <div className="small-movie-card__image">
        <Player film={film} isPlaying = {isPlaying}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};


MovieCard.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  handlerMouseLeave: PropTypes.func.isRequired,
  handlerMouseOver: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default withCard(MovieCard);
