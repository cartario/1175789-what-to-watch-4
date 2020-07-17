import React from "react";
import Player from "../player/player.jsx";
import withCard from "../../hocs/with-video/with-card.js";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {film, handlerMouseLeave, handlerMouseOver, isPlaying, clickHandler} = props;

  return (
    <article
      onMouseOver = {handlerMouseOver}
      onMouseLeave = {handlerMouseLeave}
      onClick = {()=> clickHandler(film)}
      className="small-movie-card catalog__movies-card" >
      <div className="small-movie-card__image">
        <Player film={film} isPlaying = {isPlaying}/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/">{film.title}</Link>
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
  clickHandler: PropTypes.func.isRequired,
};

export default withCard(MovieCard);
