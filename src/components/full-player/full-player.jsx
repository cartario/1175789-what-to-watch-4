import React from "react";
import PropTypes from "prop-types";
import withFullPlayer from "../../hocs/with-fullplayer/with-fullplayer.js";
import {connect} from "react-redux";
import {getFilmsByFilter} from "../../selectors.js";

const FullPlayer = (props) => {
  const {
    isPlaying,
    elapsedTime,
    exitClickHandler,
    playChangeHandler,
    fullScreenClickHandler,
    position,
    videoRef,
    match,
    films,
  } = props;

  const currentMovie = films.find(
      (film) => film.id === Number(match.params.id)
  );

  const {posterImage, videoLink} = currentMovie;

  return (
    <>
      <div className="player">
        <video
          ref={videoRef}
          src={videoLink}
          className="player__video"
          poster={posterImage}
        ></video>

        <button
          onClick={exitClickHandler}
          type="button"
          className="player__exit"
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={position}
                max="100"
              ></progress>
              <div className="player__toggler" style={{left: `${position}%`}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{elapsedTime}</div>
          </div>
          <div className="player__controls-row">
            <button
              onClick={playChangeHandler}
              type="button"
              className="player__play"
            >
              {isPlaying ? (
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
              ) : (
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
              )}
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button
              onClick={fullScreenClickHandler}
              type="button"
              className="player__full-screen"
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

FullPlayer.propTypes = {
  elapsedTime: PropTypes.string.isRequired,
  exitClickHandler: PropTypes.func.isRequired,
  playChangeHandler: PropTypes.func.isRequired,
  fullScreenClickHandler: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  videoRef: PropTypes.shape().isRequired,
  isPlaying: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        posterImage: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
      })
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilmsByFilter(state),
});

const connectedFullPlayer = connect(mapStateToProps)(FullPlayer);
export default withFullPlayer(connectedFullPlayer);
