import React, {PureComponent, createRef} from 'react';
import {getTimeElapsed, getPosition} from "../../utils.js";
import {history} from "../../history.js";
import PropTypes from "prop-types";

const withFullPlayer = (Component) => {
  class WithFullPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();

      this.state = {
        isPlaying: true,
        currentTime: 0,
        duration: 0,
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
      history.goBack();
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

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = ``;
      // video.poster = ``;
      // video.width = null;
      // video.height = null;
      // video.muted = null;
    }

    render() {
      const {currentMovie} = this.props;
      const elapsedTime = getTimeElapsed(this.state.duration, this.state.currentTime);
      const position = getPosition(this.state.currentTime, this.state.duration);
      return (
        <Component {...this.props}
          videoRef= {this._videoRef}
          currentMovie = {currentMovie}
          elapsedTime = {elapsedTime}
          position = {position}
          exitClickHandler = {this._exitClickHandler}
          playChangeHandler = {this._playChangeHandler}
          fullScreenClickHandler = {this._fullScreenClickHandler}
          isPlaying = {this.state.isPlaying}
        />
      );
    }
  }

  WithFullPlayer.propTypes = {
    currentMovie: PropTypes.any,
  };

  return WithFullPlayer;
};


export default withFullPlayer;
