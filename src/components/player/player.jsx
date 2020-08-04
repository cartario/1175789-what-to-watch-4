import React from 'react';
import PropTypes from "prop-types";

const Player = (props) => {
  const {videoRef} = props;
  return <video ref={videoRef} />;
};

Player.propTypes = {
  videoRef: PropTypes.shape().isRequired,
};

export default Player;
