import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import withVideo from "../../hocs/with-video/with-video.js";

class Player extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <video ref = {this.props.videoRef}/>
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
  videoRef: PropTypes.any,
};

export default withVideo(Player);
