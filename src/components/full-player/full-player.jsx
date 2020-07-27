import React from 'react';
import PropTypes from "prop-types";
import withFullPlayer from "../../hocs/with-fullplayer/with-fullplayer.js";

const FullPlayer = (props) => {
  const {isPlaying, currentMovie, elapsedTime, exitClickHandler, playChangeHandler, fullScreenClickHandler, position, videoRef} = props;
  const {posterImage, videoLink} = currentMovie;

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
};

export default withFullPlayer(FullPlayer);
