import React, {PureComponent, createRef} from 'react';
import {getTimeElapsed} from "../../utils.js";
import {history} from "../../history.js";
import PropTypes from "prop-types";

class FullPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();

    this.state = {
      isPlaying: true,
      currentTime: 0,
      duration: 0.000001,
    };

    this._exitClickHandler = this._exitClickHandler.bind(this);
    this._playChangeHandler = this._playChangeHandler.bind(this);
    this._fullScreenClickHandler = this._fullScreenClickHandler.bind(this);

  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.play();
    video.muted = true;

    video.ontimeupdate = () => this.setState({
      currentTime: Math.trunc(video.currentTime),
    });

    video.onloadedmetadata = () => this.setState({
      duration: Math.trunc(video.duration),
    });

  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.state.isPlaying) {
      return video.play();
    }
    return video.pause();
  }

  _exitClickHandler() {
    history.push(`/`);

  }

  _fullScreenClickHandler() {
    const video = this._videoRef.current;
    video.requestFullscreen();
  }

  _playChangeHandler() {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }

  render() {
    const {currentMovie} = this.props;
    const {poster, videoLink} = currentMovie;

    const elapsedTime = getTimeElapsed(this.state.duration, this.state.currentTime);
    const position = this.state.currentTime / this.state.duration * 100;

    return (
      <>

      <div className="player">
        <video ref = {this._videoRef}

          src={videoLink} className="player__video" poster={poster}></video>

        <button onClick={this._exitClickHandler} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={position} max="100"></progress>
              <div className="player__toggler" style={{left: `${position}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{elapsedTime}</div>
          </div>
          <div className="player__controls-row">
            <button onClick={this._playChangeHandler} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button onClick = {this._fullScreenClickHandler} type="button" className="player__full-screen">
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
  }
}

FullPlayer.propTypes = {
  currentMovie: PropTypes.any,
};
export default FullPlayer;
