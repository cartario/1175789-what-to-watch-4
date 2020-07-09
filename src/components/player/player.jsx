import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";
import withVideo from "../../hocs/with-video/with-video.js";


class Player extends PureComponent {
  constructor() {
    super();
    this._videoRef = createRef();
    this._timeout = null;
  }

  componentDidMount() {
    const {film, isMuted} = this.props;
    const video = this._videoRef.current;
    video.src = film.preview;
    video.poster = film.src;
    video.width = `280`;
    video.height = `175`;
    video.muted = isMuted;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._timeout = setTimeout(() => {
        video.play();
      }, 1000);

    } else {
      clearTimeout(this._timeout);
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = null;
    video.poster = null;
    video.width = null;
    video.height = null;
    video.muted = null;
  }

  render() {
    return (
      <video ref = {this._videoRef}/>
    );
  }
}

Player.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default withVideo(Player);
