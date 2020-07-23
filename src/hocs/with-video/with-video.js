import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this._timeout = null;
      this.state = {
        isPause: true,
        isMuted: true,
      };
    }

    componentDidMount() {
      const {film} = this.props;
      const video = this._videoRef.current;
      video.src = film.preview;
      video.poster = film.src;
      video.width = `280`;
      video.height = `175`;
      video.muted = this.state.isMuted;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.props.isPlaying) {
        this._timeout = setTimeout(() => {
          this._videoRef.current.play();
        }, 1000);

      } else {
        clearTimeout(this._timeout);
        video.load();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = ``;
      video.poster = ``;
      video.width = null;
      video.height = null;
      video.muted = null;
    }

    render() {
      
      return (
        <Component {...this.props }
          videoRef = {this._videoRef}
        />
      );
    }
  }

  WithVideo.propTypes = {
    film: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    }),
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
