import React from "react";
import Player from "../player/player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../const.js";

const MovieCard = (props) => {
  const {film, handlerMouseLeave, handlerMouseOver, videoRef} = props;

  return (
    <article
      onMouseOver={handlerMouseOver}
      onMouseLeave={handlerMouseLeave}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <Player videoRef={videoRef} />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${AppRoutes.MOVIE_PAGE}/${film.id}`}
        >
          {film.title}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  handlerMouseLeave: PropTypes.func.isRequired,
  handlerMouseOver: PropTypes.func.isRequired,
  videoRef: PropTypes.any,
};

export default withVideo(MovieCard);
