import React from 'react';
import PropTypes from "prop-types";
import withVideo from "../../hocs/with-video/with-video.js";

const Player = (props) => {  
  const {videoRef} = props;
  return <video ref={videoRef} />
};

Player.propTypes = {  
  videoRef: PropTypes.any,
};

export default Player;
