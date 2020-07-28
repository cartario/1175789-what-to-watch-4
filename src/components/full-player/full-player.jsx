import React from 'react';
import PropTypes from "prop-types";
import withFullPlayer from "../../hocs/with-fullplayer/with-fullplayer.js";
import {connect} from "react-redux";
import {getFilmsByFilter, getReadyData, getActiveFilmId} from "../../selectors.js";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";

const FullPlayer = (props) => {
  if (!props.isDataReady) {
    return null;
  }

  const {isPlaying, elapsedTime, exitClickHandler, playChangeHandler,
    fullScreenClickHandler, position, videoRef, match, films, activeFilm, setActiveFilmId, activeFilmId} = props;


  const currentMovie = films.find((film) => film.id === activeFilmId);

  const {posterImage, videoLink} = currentMovie;
  const currentUrlId = match.params.id;

  setActiveFilmId(Number(currentUrlId));
  // if (currentUrlId !== undefined && films.length !== 0) {
  //   const currentFilm = films.find((film) => film.id === Number(currentUrlId));
  //   // activeFilm(currentFilm);
  //   setActiveFilmId(Number(currentUrlId))
  // }

  return (
      <>
      <div className="player">
        <video ref = {videoRef}

          src={videoLink} className="player__video" poster={posterImage}></video>

        <button onClick={exitClickHandler} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={position} max="100"></progress>
              <div className="player__toggler" style={{left: `${position}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{elapsedTime}</div>
          </div>
          <div className="player__controls-row">
            <button onClick={playChangeHandler} type="button" className="player__play">
              {isPlaying
                ? <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                : <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>}
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button onClick = {fullScreenClickHandler} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
      </>);
};

FullPlayer.propTypes = {
  elapsedTime: PropTypes.string,
  exitClickHandler: PropTypes.func,
  playChangeHandler: PropTypes.func,
  fullScreenClickHandler: PropTypes.func,
  position: PropTypes.number,
  videoRef: PropTypes.any,
  currentMovie: PropTypes.any,
  isPlaying: PropTypes.any,
  films: PropTypes.any,
  match: PropTypes.any,
  activeFilmId: PropTypes.any,
  isDataReady: PropTypes.any,
  setActiveFilmId: PropTypes.any,
};

const mapStateToProps = (state) => ({
  films: getFilmsByFilter(state),
  activeFilmId: getActiveFilmId(state),
  isDataReady: getReadyData(state),
});

const mapDispatchToProps = (dispatch) => ({
  activeFilm(film) {
    dispatch(FilmsReducerAC.activeFilm(film));
  },

  setActiveFilmId(filmId) {
    dispatch(FilmsReducerAC.setActiveFilmId(filmId));
  }
});

const connectedFullPlayer = connect(mapStateToProps, mapDispatchToProps)(FullPlayer);
export default withFullPlayer(connectedFullPlayer);
