import React, {PureComponent, createRef} from "react";
import {getTimeElapsed, getPosition} from "../../utils.js";
import {history} from "../../history.js";

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
      this._updateTime = this._updateTime.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;
      if (video) {
        video.play();
        video.muted = true;

        video.ontimeupdate = this._updateTime;

        video.onloadedmetadata = () =>
          this.setState({
            duration: Math.trunc(video.duration),
          });
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (video) {
        if (this.state.isPlaying) {
          return video.play();
        }
        return video.pause();
      }
      return null;
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

    _updateTime() {
      if (this._videoRef.current) {
        this.setState({
          currentTime: Math.trunc(this._videoRef.current.currentTime),
        });
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = ``;
      video.removeEventListener(`timeupdate`, this._updateTime);
    }

    render() {
      const elapsedTime = getTimeElapsed(
          this.state.duration,
          this.state.currentTime
      );
      const position = getPosition(this.state.currentTime, this.state.duration);
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          elapsedTime={elapsedTime}
          position={position}
          exitClickHandler={this._exitClickHandler}
          playChangeHandler={this._playChangeHandler}
          fullScreenClickHandler={this._fullScreenClickHandler}
          isPlaying={this.state.isPlaying}
        />
      );
    }
  }

  return WithFullPlayer;
};

export default withFullPlayer;
