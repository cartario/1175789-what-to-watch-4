import React from 'react';
import PropTypes from "prop-types";
import withVideo from "../../hocs/with-video/with-video.js";

const Player = (props) => {
  const {videoRef} = props;
  return <video ref={videoRef} />
};

Player.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  
  videoRef: PropTypes.any,
};

export default withVideo(Player);
