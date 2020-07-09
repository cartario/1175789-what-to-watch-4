import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPause: true,
        isMuted: true,
      };
    }

    render() {
      const {isPause, isMuted} = this.state;
      return (
        <Component {...this.props }
          isPause={isPause} isMuted={isMuted}
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
