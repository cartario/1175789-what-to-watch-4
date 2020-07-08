import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this.state = {
        isPause: !this.props.isPlaying,
        isMuted: true,
      };
      this._timeout = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        this._timeout = setTimeout(() => {
          video.play();

          this.setState({
            isPause: false,
          });

        }, 1000);


      } else {
        clearTimeout(this._timeout);
        video.load();

        this.setState({
          isPause: true,
        });
      }
    }

    render() {

      const {film} = this.props;
      const {isPause, isMuted} = this.state;

      return (
        <Component {...this.props } isPause={isPause} isMuted={isMuted}>

          <video
            src={film.preview}
            poster={film.src}
            muted = {this.state.isMuted}
            ref = {this._videoRef}
            width="280"
            height="175">
          </video>
        </Component>
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
